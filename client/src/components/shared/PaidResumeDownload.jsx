import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  FiDownload,
  FiLock,
  FiShield,
  FiAlertCircle,
  FiExternalLink,
} from "react-icons/fi";
import {
  useAccount,
  useChainId,
  useSendTransaction,
  useSignMessage,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import { PORTFOLIO_RECIPIENT_ADDRESS } from "../../constants/wallet";
import {
  getBlockExplorerUrl,
  getBlockExplorerName,
} from "../../utils/blockExplorers";

const RESUME_PRICE_USD = 0.5;
const RESUME_FILE_PATH = "/files/Jonas-Sebera-Resume.pdf";

const PaidResumeDownload = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
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
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [transactionHash, setTransactionHash] = useState(null);
  const [showTransactionLink, setShowTransactionLink] = useState(false);

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
    if (isSuccess && hash) {
      setTransactionHash(hash);
      const downloadedTxs = JSON.parse(localStorage.getItem("resume_downloads") || "[]");
      if (!downloadedTxs.includes(hash)) {
        setDownloadReady(true);
      } else {
        setHasDownloaded(true);
        setDownloadReady(false);
      }
      setIsSigning(false);
      
      setShowTransactionLink(true);
      const timer = setTimeout(() => {
        setShowTransactionLink(false);
      }, 5 * 60 * 1000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, hash]);

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
    if (!transactionHash || hasDownloaded) {
      setError("This transaction has already been used for download.");
      return;
    }

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

      const downloadedTxs = JSON.parse(localStorage.getItem("resume_downloads") || "[]");
      if (!downloadedTxs.includes(transactionHash)) {
        downloadedTxs.push(transactionHash);
        localStorage.setItem("resume_downloads", JSON.stringify(downloadedTxs));
      }
      
      setHasDownloaded(true);
      setDownloadReady(false);
    } catch (err) {
      console.error("Resume download failed:", err);
      setError("Download failed. Please contact me directly.");
    } finally {
      setIsDownloading(false);
    }
  };

  const priceLabel = resumePriceInEth
    ? `${RESUME_PRICE_USD.toFixed(2)} USDT ≈ ${resumePriceInEth
        .toFixed(6)
        .replace(/0+$/, "")
        .replace(/\.$/, "")} ETH`
    : "Loading live rate...";

  const isActionDisabled =
    isSigning || isPending || isConfirming || !resumePriceInEth;

  return (
    <div className="group relative flex flex-col gap-3 rounded-2xl border border-indigo-100 dark:border-indigo-500/30 bg-white/90 dark:bg-primary-dark/40 p-4 shadow-md">
      <div className="absolute bottom-full left-0 right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 transform group-hover:translate-y-0 translate-y-2">
        <div className="relative flex items-start gap-3 rounded-xl border-2 border-emerald-400 dark:border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/40 dark:to-green-900/30 px-4 py-3 text-sm text-emerald-900 dark:text-emerald-100 shadow-2xl max-w-md mx-auto backdrop-blur-sm">
          <div className="absolute inset-0 rounded-xl bg-emerald-400/20 dark:bg-emerald-500/20 blur-xl -z-10"></div>
          
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500 dark:bg-emerald-400 flex items-center justify-center shadow-lg">
              <FiShield className="text-white text-base" />
            </div>
          </div>
          
          <div className="flex-1 space-y-1">
            <p className="font-bold text-base text-emerald-900 dark:text-emerald-50 leading-tight">
              Bank-Level Security Guaranteed
            </p>
            <p className="text-xs leading-relaxed text-emerald-800 dark:text-emerald-200">
              Every transaction is cryptographically verified on-chain before execution. Your payment is protected by bullet-proof signatures, no transaction proceeds without full verification. <span className="font-semibold">100% secure, 100% transparent.</span>
            </p>
          </div>
        </div>
      </div>

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
              <FiExternalLink />
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

      {downloadReady && !hasDownloaded && (
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handleDownload}
          disabled={isDownloading || hasDownloaded}
          className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-100 disabled:bg-emerald-100 disabled:text-emerald-400"
        >
          <FiDownload />
          {isDownloading ? "Preparing..." : "Download resume"}
        </motion.button>
      )}
      
      {hasDownloaded && (
        <div className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-2.5 text-sm font-semibold text-gray-600 dark:text-gray-400">
          <FiDownload />
          Resume downloaded
        </div>
      )}
      {showTransactionLink && hash && isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-2 pt-3 border-t border-indigo-200 dark:border-indigo-500/20"
        >
          <a
            href={getBlockExplorerUrl(chainId, hash)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            <span>View transaction on {getBlockExplorerName(chainId)}</span>
            <FiExternalLink className="text-xs" />
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default PaidResumeDownload;

