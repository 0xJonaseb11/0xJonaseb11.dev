import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  FiDownload,
  FiLock,
  FiShield,
  FiLink,
  FiAlertCircle,
} from "react-icons/fi";
import {
  useAccount,
  useSendTransaction,
  useSignMessage,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import { PORTFOLIO_RECIPIENT_ADDRESS } from "../../constants/wallet";

const RESUME_PRICE_USD = 0.5;
const RESUME_FILE_PATH = "/files/Jonas-Sebera-Resume.pdf";

const PaidResumeDownload = () => {
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { data: hash, sendTransaction, isPending } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const [ethPrice, setEthPrice] = useState(null);
  const [error, setError] = useState("");
  const [downloadReady, setDownloadReady] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        if (data.ethereum?.usd) {
          setEthPrice(data.ethereum.usd);
        } else {
          throw new Error("Missing ETH price");
        }
      } catch (err) {
        console.error("Failed to fetch ETH price:", err);
        setError(
          "Unable to fetch live ETH price. Please refresh or try again later."
        );
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  const resumePriceInEth = useMemo(() => {
    if (!ethPrice) return null;
    return RESUME_PRICE_USD / ethPrice;
  }, [ethPrice]);

  useEffect(() => {
    if (isSuccess) {
      setDownloadReady(true);
      setIsSigning(false);
    }
  }, [isSuccess]);

  const handlePurchase = async () => {
    setError("");

    if (!isConnected) {
      setError("Connect your wallet to continue.");
      return;
    }

    if (!resumePriceInEth) {
      setError("Fetching live ETH price. Please wait a second.");
      return;
    }

    try {
      setIsSigning(true);
      const priceEthString = resumePriceInEth.toFixed(6);
      const message = `I, ${address}, authorise the transfer of $${RESUME_PRICE_USD.toFixed(
        2
      )} (~${priceEthString} ETH) to download Jonas Sebera's resume on ${new Date().toUTCString()}.`;
      await signMessageAsync({ message });

      sendTransaction({
        to: PORTFOLIO_RECIPIENT_ADDRESS,
        value: parseEther(priceEthString),
      });
    } catch (err) {
      console.error("Resume payment failed:", err);
      setError(err?.shortMessage || err?.message || "Transaction cancelled.");
      setIsSigning(false);
    }
  };

  const handleDownload = async () => {
    setError("");
    setIsDownloading(true);

    try {
      const response = await fetch(RESUME_FILE_PATH, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Resume unavailable.");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Jonas-Sebera-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Resume download failed:", err);
      setError("Download failed. Please contact me directly.");
    } finally {
      setIsDownloading(false);
    }
  };

  const priceLabel = resumePriceInEth
    ? `${RESUME_PRICE_USD.toFixed(2)} USD • ${resumePriceInEth
        .toFixed(6)
        .replace(/0+$/, "")
        .replace(/\.$/, "")} ETH`
    : "Loading live rate...";

  const isActionDisabled =
    isSigning || isPending || isConfirming || !resumePriceInEth;

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-indigo-100 dark:border-indigo-500/30 bg-white/90 dark:bg-primary-dark/40 p-4 shadow-md">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 font-semibold text-gray-600 uppercase tracking-wide">
          <FiLock />
          Secure resume access
        </span>
        <span className="font-semibold text-indigo-600 dark:text-indigo-300">
          {priceLabel}
        </span>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-1.5 text-xs text-red-600">
          <FiAlertCircle />
          <span>{error}</span>
        </div>
      )}

      {!isConnected ? (
        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={openConnectModal}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500"
            >
              <FiLink />
              Connect wallet
            </motion.button>
          )}
        </ConnectButton.Custom>
      ) : (
        <motion.button
          whileHover={!isActionDisabled ? { scale: 1.01 } : {}}
          whileTap={!isActionDisabled ? { scale: 0.99 } : {}}
          disabled={isActionDisabled}
          onClick={handlePurchase}
          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isPending || isConfirming ? "Processing..." : "Pay & download"}
          <FiShield />
        </motion.button>
      )}

      {downloadReady && (
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-100 disabled:bg-emerald-100 disabled:text-emerald-400"
        >
          <FiDownload />
          {isDownloading ? "Preparing..." : "Download resume"}
        </motion.button>
      )}
    </div>
  );
};

export default PaidResumeDownload;

