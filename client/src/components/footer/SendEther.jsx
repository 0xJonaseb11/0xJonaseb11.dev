import { useState, useEffect } from "react";
import {
  useAccount,
  useChainId,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";
import {
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiExternalLink,
  FiCopy,
} from "react-icons/fi";
import {
  getBlockExplorerUrl,
  getBlockExplorerName,
} from "../../utils/blockExplorers";

const RECIPIENT_ADDRESS = "0xbb6073d4052f7e1178cc3ae8090715cbb8f911d8";

const SendEther = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ethPrice, setEthPrice] = useState(null);
  const [usdtPrice, setUsdtPrice] = useState(null);

  const {
    data: hash,
    sendTransaction,
    isPending: isSending,
    error: sendError,
  } = useSendTransaction();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  // Fetch ETH and USDT prices
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,tether&vs_currencies=usd"
        );
        const data = await response.json();
        if (data.ethereum?.usd) {
          setEthPrice(data.ethereum.usd);
        }
        if (data.tether?.usd) {
          setUsdtPrice(data.tether.usd);
        }
      } catch (err) {
        console.error("Failed to fetch prices:", err);
        // Fallback prices
        setEthPrice(2500);
        setUsdtPrice(1);
      }
    };

    fetchPrices();
    // Refresh prices every 30 seconds
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText(RECIPIENT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate USDT equivalent
  const calculateUSDT = () => {
    if (!amount || parseFloat(amount) <= 0 || !ethPrice || !usdtPrice)
      return null;
    const ethAmount = parseFloat(amount);
    const ethInUSD = ethAmount * ethPrice;
    const usdtEquivalent = ethInUSD / usdtPrice;
    return usdtEquivalent;
  };

  const usdtAmount = calculateUSDT();

  const handleSend = async () => {
    setError("");
    setSuccess(false);

    if (!isConnected) {
      setError("Please connect your wallet first");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    try {
      const amountInWei = parseEther(amount);
      sendTransaction({
        to: RECIPIENT_ADDRESS,
        value: amountInWei,
      });
    } catch (err) {
      setError(err.message || "Failed to send transaction");
    }
  };

  // Reset success message after transaction
  useEffect(() => {
    if (isConfirmed && !success) {
      setSuccess(true);
      setAmount("");
      setTimeout(() => setSuccess(false), 10000);
    }
  }, [isConfirmed, success]);

  // Update error from sendTransaction
  useEffect(() => {
    if (sendError && !error) {
      setError(sendError.message || "Transaction failed");
    }
  }, [sendError, error]);

  const explorerUrl = hash ? getBlockExplorerUrl(chainId, hash) : null;
  const explorerName = hash ? getBlockExplorerName(chainId) : null;

  return (
    <div className="w-full mt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/20 dark:from-indigo-500/10 dark:via-purple-500/8 dark:to-pink-500/10 rounded-2xl p-8 border-2 border-indigo-500/30 dark:border-indigo-400/20 shadow-2xl backdrop-blur-sm overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-2xl -z-10" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-indigo-500 dark:text-indigo-400 flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FiSend className="text-indigo-500 dark:text-indigo-400 text-3xl" />
              </motion.div>
              Send Ether
            </motion.h3>
            {isConnected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full"
              >
                <span className="text-xs font-semibold text-green-500 dark:text-green-400">
                  Connected
                </span>
              </motion.div>
            )}
          </div>

          {!isConnected ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-ternary-dark dark:text-ternary-light mb-6 text-center">
                Connect your wallet to send Ether directly
              </p>
              <ConnectButton.Custom>
                {({ account, chain, openConnectModal, mounted }) => {
                  const ready = mounted;
                  const connected = ready && account && chain;

                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <motion.button
                              onClick={openConnectModal}
                              type="button"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                              <span>Connect Wallet</span>
                              <FiExternalLink className="text-xl" />
                            </motion.button>
                          );
                        }
                        return null;
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold text-ternary-dark dark:text-ternary-light mb-3">
                  Amount (ETH)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.001"
                    min="0"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setError("");
                    }}
                    placeholder="0.0"
                    className="w-full px-6 py-4 text-lg border-2 dark:border-indigo-500/30 border-indigo-500/20 rounded-xl text-md bg-white/80 dark:bg-primary-dark/80 backdrop-blur-sm text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 disabled:opacity-50"
                    disabled={isSending || isConfirming}
                  />
                </div>
                {amount && parseFloat(amount) > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 space-y-2"
                  >
                    <div className="flex items-center justify-between p-3 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-lg border border-indigo-500/20">
                      <span className="text-sm font-medium text-ternary-dark dark:text-ternary-light">
                        USD Value:
                      </span>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        $
                        {ethPrice
                          ? (parseFloat(amount) * ethPrice).toFixed(2)
                          : "..."}
                      </span>
                    </div>
                    {usdtAmount && (
                      <div className="flex items-center justify-between p-3 bg-green-500/10 dark:bg-green-500/5 rounded-lg border border-green-500/20">
                        <span className="text-sm font-medium text-ternary-dark dark:text-ternary-light">
                          USDT Equivalent:
                        </span>
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                          {usdtAmount.toFixed(2)} USDT
                        </span>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              <div className="bg-white/60 dark:bg-primary-dark/60 backdrop-blur-sm rounded-xl p-5 border-2 border-indigo-500/20 dark:border-indigo-400/20 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-ternary-dark dark:text-ternary-light mb-1 uppercase tracking-wide">
                      Recipient Address
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm break-all text-primary-dark dark:text-primary-light">
                        {RECIPIENT_ADDRESS}
                      </span>
                      <motion.button
                        onClick={copyAddress}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 transition-colors"
                        title="Copy address"
                      >
                        <FiCopy
                          className={`text-sm ${
                            copied
                              ? "text-green-500"
                              : "text-indigo-500 dark:text-indigo-400"
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-indigo-500/10 dark:border-indigo-400/10">
                  <p className="text-xs font-semibold text-ternary-dark dark:text-ternary-light mb-1 uppercase tracking-wide">
                    Your Address
                  </p>
                  <p className="font-mono text-sm break-all text-primary-dark dark:text-primary-light">
                    {address}
                  </p>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-red-500/20 border-2 border-red-500/30 rounded-xl text-red-600 dark:text-red-400 backdrop-blur-sm"
                >
                  <FiAlertCircle className="text-xl flex-shrink-0" />
                  <span className="text-sm font-medium">{error}</span>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-green-500/20 border-2 border-green-500/30 rounded-xl text-green-600 dark:text-green-400 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <FiCheckCircle className="text-xl flex-shrink-0" />
                  </motion.div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold block mb-1">
                      Transaction successful! 🎉
                    </span>
                    {hash && explorerUrl && (
                      <a
                        href={explorerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium underline hover:text-green-700 dark:hover:text-green-300 flex items-center gap-1"
                      >
                        View on {explorerName}
                        <FiExternalLink className="text-xs" />
                      </a>
                    )}
                  </div>
                </motion.div>
              )}

              <motion.button
                onClick={handleSend}
                disabled={
                  isSending ||
                  isConfirming ||
                  !amount ||
                  parseFloat(amount) <= 0
                }
                whileHover={
                  !isSending &&
                  !isConfirming &&
                  amount &&
                  parseFloat(amount) > 0
                    ? { scale: 1.02 }
                    : {}
                }
                whileTap={
                  !isSending &&
                  !isConfirming &&
                  amount &&
                  parseFloat(amount) > 0
                    ? { scale: 0.98 }
                    : {}
                }
                className="w-full px-8 py-4 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending Transaction...</span>
                  </>
                ) : isConfirming ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                    />
                    <span>Confirming Transaction...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="text-xl" />
                    <span>Send Ether</span>
                  </>
                )}
              </motion.button>

              <div className="pt-4 border-t border-indigo-500/20 dark:border-indigo-400/20">
                <ConnectButton showBalance={true} />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SendEther;
