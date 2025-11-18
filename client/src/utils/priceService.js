const COINGECKO_URL = "https://api.coingecko.com/api/v3/simple/price";
const CRYPTOCOMPARE_URL = "https://min-api.cryptocompare.com/data/pricemulti";

const COINGECKO_IDS = {
  ethereum: "ethereum",
  tether: "tether",
};

const SYMBOL_MAP = {
  ethereum: "ETH",
  tether: "USDT",
};

const getCoinGeckoHeaders = () => {
  const proKey = process.env.REACT_APP_COINGECKO_API_KEY?.trim();
  const demoKey = process.env.REACT_APP_COINGECKO_DEMO_KEY?.trim();

  if (!proKey && !demoKey) {
    return {};
  }

  if (proKey) {
    return {
      "x-cg-pro-api-key": proKey,
      accept: "application/json",
    };
  }

  return {
    "x-cg-demo-api-key": demoKey,
    accept: "application/json",
  };
};

const withTimeout = (promise, timeoutMs = 8000) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeoutMs)
    ),
  ]);

const fetchFromCoinGecko = async (ids) => {
  const url = new URL(COINGECKO_URL);
  url.searchParams.set("ids", ids.join(","));
  url.searchParams.set("vs_currencies", "usd");

  const response = await withTimeout(
    fetch(url.toString(), {
      headers: {
        accept: "application/json",
        ...getCoinGeckoHeaders(),
      },
    })
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `CoinGecko request failed (${response.status}): ${error || "Unknown error"}`
    );
  }

  return response.json();
};

const fetchFromCryptoCompare = async (symbols) => {
  const url = new URL(CRYPTOCOMPARE_URL);
  url.searchParams.set("fsyms", symbols.join(","));
  url.searchParams.set("tsyms", "USD");

  const response = await withTimeout(
    fetch(url.toString(), {
      headers: {
        accept: "application/json",
      },
    })
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `CryptoCompare request failed (${response.status}): ${error || "Unknown error"}`
    );
  }

  return response.json();
};

export const getUsdPrices = async (assets = []) => {
  if (!assets.length) {
    return {};
  }

  const normalizedIds = assets
    .map((asset) => asset?.toLowerCase())
    .filter((asset) => !!COINGECKO_IDS[asset]);

  if (!normalizedIds.length) {
    return {};
  }

  const result = normalizedIds.reduce((acc, asset) => {
    acc[asset] = null;
    return acc;
  }, {});

  try {
    const data = await fetchFromCoinGecko(normalizedIds);
    normalizedIds.forEach((asset) => {
      const usdValue = data?.[asset]?.usd;
      if (typeof usdValue === "number") {
        result[asset] = usdValue;
      }
    });

    const missing = normalizedIds.filter((asset) => result[asset] == null);
    if (!missing.length) {
      return result;
    }

    const fallbackSymbols = missing
      .map((asset) => SYMBOL_MAP[asset])
      .filter(Boolean);
    if (fallbackSymbols.length) {
      const fallbackData = await fetchFromCryptoCompare(fallbackSymbols);
      missing.forEach((asset) => {
        const symbol = SYMBOL_MAP[asset];
        const usdValue = fallbackData?.[symbol]?.USD;
        if (typeof usdValue === "number") {
          result[asset] = usdValue;
        }
      });
    }

    return result;
  } catch (error) {
    console.warn("CoinGecko lookup failed, falling back to CryptoCompare:", error);

    const symbols = normalizedIds
      .map((asset) => SYMBOL_MAP[asset])
      .filter(Boolean);

    if (!symbols.length) {
      throw error;
    }

    const fallbackData = await fetchFromCryptoCompare(symbols);
    symbols.forEach((symbol) => {
      const asset = Object.keys(SYMBOL_MAP).find(
        (key) => SYMBOL_MAP[key] === symbol
      );
      if (!asset) return;
      const usdValue = fallbackData?.[symbol]?.USD;
      if (typeof usdValue === "number") {
        result[asset] = usdValue;
      }
    });

    if (Object.values(result).every((value) => value == null)) {
      throw error;
    }

    return result;
  }
};

