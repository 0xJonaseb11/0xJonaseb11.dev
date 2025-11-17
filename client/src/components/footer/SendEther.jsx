import { useState, useEffect, useRef } from "react";
import {
  useAccount,
  useChainId,
  useSendTransaction,
  useWaitForTransactionReceipt,
  useSignMessage,
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
  FiAward,
  FiShare2,
} from "react-icons/fi";
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { PORTFOLIO_RECIPIENT_ADDRESS } from "../../constants/wallet";
import logoLight from "../../images/Logo.png";
import {
  getBlockExplorerUrl,
  getBlockExplorerName,
} from "../../utils/blockExplorers";


const getSupporterBadgeSvg = (logo) => `
<svg width="620" height="260" viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="120%" y2="100%">
      <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#9333EA;stop-opacity:1" />
    </linearGradient>
    <clipPath id="logoClip">
      <circle cx="520" cy="120" r="60" />
    </clipPath>
  </defs>
  <rect rx="32" ry="32" width="620" height="260" fill="#050A16"/>
  <rect rx="30" ry="30" x="12" y="12" width="596" height="236" fill="url(#grad)" opacity="0.18"/>
  <rect rx="28" ry="28" x="24" y="24" width="572" height="212" fill="none" stroke="#4F46E5" stroke-opacity="0.35"/>
  ${
    logo
      ? `<g>
          <circle cx="520" cy="120" r="70" fill="rgba(255,255,255,0.08)" />
          <image href="${logo}" x="460" y="60" width="120" height="120" clip-path="url(#logoClip)" />
        </g>`
      : ""
  }
  <g>
    <text x="60" y="86" font-size="18" fill="#A5B4FC" font-family="Poppins, Arial" letter-spacing="6">OFFICIAL SUPPORTER</text>
    <text x="60" y="138" font-size="50" fill="#FFFFFF" font-family="Poppins, Arial" font-weight="700">Jonas Sebera</text>
    <text x="60" y="170" font-size="20" fill="#C4B5FD" font-family="Poppins, Arial">Portfolio · 0xJonaseb11 · web3 engineer</text>
    <text x="60" y="205" font-size="16" fill="#EDE9FE" font-family="Poppins, Arial">
      Backed with real ETH · Support at 0xjonaseb11.vercel.app
    </text>
  </g>
</svg>
`;
const SUPPORT_LANDING_URL = "https://0xjonaseb11.vercel.app";
const EMAILJS_SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_mk44hmb";
const EMAILJS_SUPPORT_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_SUPPORT_TEMPLATE_ID || "template_sb5r0yg";
const EMAILJS_PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "VrfkLl3nzSOSIU9MB";
const EMAILJS_SUPPORTER_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_SUPPORTER_TEMPLATE_ID ||
  "template_sb5r0yg";

const SendEther = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ethPrice, setEthPrice] = useState(null);
  const [usdtPrice, setUsdtPrice] = useState(null);
  const [badgeDataUrl, setBadgeDataUrl] = useState("");
  const [pendingAmount, setPendingAmount] = useState("");
  const [pendingUsdValue, setPendingUsdValue] = useState(null);
  const [supporterEmail, setSupporterEmail] = useState("");
  const [supporterEmailSubmitted, setSupporterEmailSubmitted] = useState(false);
  const [supporterEmailError, setSupporterEmailError] = useState("");
  const [supporterEmailLoading, setSupporterEmailLoading] = useState(false);
  const [isSigningSupport, setIsSigningSupport] = useState(false);
  const [supportSignature, setSupportSignature] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pendingAmountRef = useRef("");
  const pendingUsdRef = useRef(null);
  const supporterEmailRef = useRef("");
  const lastNotifiedHashRef = useRef(null);
  const supportSignatureRef = useRef("");

  useEffect(() => {
    pendingAmountRef.current = pendingAmount;
  }, [pendingAmount]);

  useEffect(() => {
    pendingUsdRef.current = pendingUsdValue;
  }, [pendingUsdValue]);

  useEffect(() => {
    supporterEmailRef.current = supporterEmail;
  }, [supporterEmail]);

  useEffect(() => {
    supportSignatureRef.current = supportSignature;
  }, [supportSignature]);

  const markHashNotified = (hashValue) => {
    lastNotifiedHashRef.current = hashValue;
  };

  const {
    data: hash,
    sendTransaction,
    isPending: isSending,
    error: sendError,
  } = useSendTransaction();
  const { signMessageAsync } = useSignMessage();

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
    navigator.clipboard.writeText(PORTFOLIO_RECIPIENT_ADDRESS);
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

    setPendingAmount(amount);
    setPendingUsdValue(
      ethPrice ? parseFloat(amount) * ethPrice : null
    );
    markHashNotified(null);
    setSupporterEmail("");
    setSupporterEmailSubmitted(false);
    setSupporterEmailError("");
    setSupporterEmailLoading(false);
    setSupportSignature("");

    try {
      setIsSigningSupport(true);
      const normalizedAmount = parseFloat(amount).toFixed(4);
      const message = `I authorize sending ${normalizedAmount} ETH from ${
        address || "my wallet"
      } to support Jonas Sebera on ${new Date().toUTCString()}.`;
      const signature = await signMessageAsync({ message });
      setSupportSignature(signature);
    } catch (err) {
      setIsSigningSupport(false);
      const declined =
        err?.code === 4001 || err?.message?.toLowerCase().includes("user");
      setError(
        declined
          ? "Signature required before sending. Please approve the request."
          : err.message || "Unable to capture signature."
      );
      return;
    }

    setIsSigningSupport(false);

    try {
      const amountInWei = parseEther(amount);
      sendTransaction({
        to: PORTFOLIO_RECIPIENT_ADDRESS,
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
    }
  }, [isConfirmed, success]);

  // Update error from sendTransaction
  useEffect(() => {
    if (sendError && !error) {
      setError(sendError.message || "Transaction failed");
    }
  }, [sendError, error]);

  useEffect(() => {
    const loadBadge = async () => {
      try {
        const response = await fetch(logoLight);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          const logoDataUrl = reader.result;
          const svgString = getSupporterBadgeSvg(
            typeof logoDataUrl === "string" ? logoDataUrl : ""
          );
          setBadgeDataUrl(
            `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`
          );
        };
        reader.readAsDataURL(blob);
      } catch (err) {
        console.error("Failed to load supporter badge assets:", err);
        setBadgeDataUrl(
          `data:image/svg+xml;utf8,${encodeURIComponent(
            getSupporterBadgeSvg("")
          )}`
        );
      }
    };

    loadBadge();
  }, []);

  const explorerUrl = hash ? getBlockExplorerUrl(chainId, hash) : null;
  const explorerName = hash ? getBlockExplorerName(chainId) : null;

  useEffect(() => {
    if (!isConfirmed || !hash || !pendingAmountRef.current) return;
    if (hash === lastNotifiedHashRef.current) return;
    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_SUPPORT_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      console.warn(
        "EmailJS credentials missing; skipping support notification email."
      );
      return;
    }

    const sendNotification = async () => {
      const ethValue = parseFloat(pendingAmountRef.current);
      if (!ethValue || Number.isNaN(ethValue)) {
        return;
      }

      const usdValue =
        pendingUsdRef.current ??
        (ethPrice ? parseFloat((ethValue * ethPrice).toFixed(2)) : null);
      const usdDisplay = usdValue ? `$${usdValue.toFixed(2)}` : "N/A";
      const templateParams = {
        user_name: "Portfolio Support Bot",
        user_email: "support@0xjonaseb11.dev",
        subject: `New support received (${ethValue.toFixed(4)} ETH)`,
        message: `Heads up! ${address || "An anonymous supporter"} just sent ${
          ethValue.toFixed(4)
        } ETH (${usdValue ? usdDisplay : "USD value unavailable"}) through your portfolio.`,
        support_amount_eth: ethValue.toFixed(4),
        support_amount_usd: usdDisplay,
        supporter_wallet: address || "Wallet not detected",
        tx_hash: hash,
        explorer_link: explorerUrl || SUPPORT_LANDING_URL,
        supporter_email:
          supporterEmailRef.current || "Supporter email not provided yet",
        support_signature:
          supportSignatureRef.current || "Signature not captured",
      };

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_SUPPORT_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
        markHashNotified(hash);
      } catch (err) {
        console.error("Support notification email failed:", err);
      }
    };

    sendNotification();
  }, [
    isConfirmed,
    hash,
    explorerUrl,
    address,
    ethPrice,
  ]);

  const shareCallout =
    "I just backed Jonas Sebera with real ETH so he can keep shipping legendary Web3 products. Support him too at 0xjonaseb11.vercel.app.";
  const shareUrlForButtons = explorerUrl || SUPPORT_LANDING_URL;

  const openShareWindow = (shareUrl) =>
    window.open(shareUrl, "_blank", "noopener,noreferrer");

  const handleDownloadBadge = () => {
    if (!badgeDataUrl) return;
    const link = document.createElement("a");
    link.href = badgeDataUrl;
    link.download = "jonas-supporter-badge.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNativeShare = () => {
    const nativeText = `${shareCallout}\n${shareUrlForButtons}\nLet's keep empowering builders.`;
    if (navigator.share) {
      navigator
        .share({
          title: "I backed Jonas Sebera",
          text: nativeText,
          url: shareUrlForButtons,
        })
        .catch(() => {});
    } else {
      openShareWindow(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          nativeText
        )}`
      );
    }
  };

  const handleLinkedInShare = () => {
    const summary = `${shareCallout} Tagging Jonas Sebera (@Jonas Sebera) so more people can jump in.`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrlForButtons
    )}&summary=${encodeURIComponent(summary)}`;
    openShareWindow(linkedInUrl);
  };

  const handleXShare = () => {
    const xText = `${shareCallout} @0xJonaseb11\n${shareUrlForButtons}\n#SupportBuilders #Web3`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      xText
    )}`;
    openShareWindow(tweetUrl);
  };

  const handleWhatsappShare = () => {
    const whatsAppText = `${shareCallout}\n${shareUrlForButtons}\nYou should support him too!`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      whatsAppText
    )}`;
    openShareWindow(whatsappUrl);
  };

  const handleSupporterEmailSubmit = async (event) => {
    event.preventDefault();
    setSupporterEmailError("");

    if (!success) {
      setSupporterEmailError(
        "Complete a support transaction first, then drop your email."
      );
      return;
    }

    if (!supporterEmail || !emailPattern.test(supporterEmail.trim())) {
      setSupporterEmailError("Please enter a valid email address.");
      return;
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_SUPPORTER_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      setSupporterEmailError(
        "Email service is offline right now—please reach me directly instead."
      );
      return;
    }

    const ethValue = pendingAmount ? parseFloat(pendingAmount) : null;
    const usdValue =
      pendingUsdValue ??
      (ethPrice && ethValue ? parseFloat((ethValue * ethPrice).toFixed(2)) : null);

    const templateParams = {
      supporter_email: supporterEmail.trim(),
      support_amount_eth: ethValue ? ethValue.toFixed(4) : "N/A",
      support_amount_usd: usdValue ? `$${usdValue.toFixed(2)}` : "N/A",
      supporter_wallet: address || "Wallet not detected",
      tx_hash: hash || "Pending hash",
      explorer_link: explorerUrl || SUPPORT_LANDING_URL,
      subject: `Supporter email shared by ${
        address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "supporter"
      }`,
      message: `Hello Jonas,\n\n${
        address || "A supporter"
      } just left their email (${supporterEmail.trim()}) after tipping ${
        ethValue ? `${ethValue.toFixed(4)} ETH` : "you"
      }.\n\nTake a moment to thank them personally and keep the relationship warm!\n\n– Portfolio Support Bot`,
    };

    try {
      setSupporterEmailLoading(true);
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_SUPPORTER_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSupporterEmailSubmitted(true);
    } catch (err) {
      console.error("Supporter email capture failed:", err);
      setSupporterEmailError(
        "Email service misconfigured—please double-check EmailJS IDs or DM me directly."
      );
    } finally {
      setSupporterEmailLoading(false);
    }
  };

  return (
    <div className="w-full mt-6">
      <motion.div
        id="support-my-work"
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
                        {PORTFOLIO_RECIPIENT_ADDRESS}
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
                    {supportSignature && (
                      <p className="text-[11px] text-green-700 dark:text-green-300 mt-1 break-all">
                        Signature verified: {supportSignature.slice(0, 22)}…
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/70 dark:bg-primary-dark/70 backdrop-blur rounded-xl p-5 border border-green-500/20 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">
                      <FiAward className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
                        Appreciation badge unlocked
                      </p>
                      <p className="text-lg font-semibold text-ternary-dark dark:text-primary-light">
                        You’re officially supporting my work—feel free to show it off!
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border border-indigo-500/20 p-4 bg-white dark:bg-primary-dark/40 flex flex-col sm:flex-row items-center gap-4">
                    <img
                      src={badgeDataUrl || logoLight}
                      alt="Jonas supporter badge"
                      className="w-full sm:w-56 rounded-md shadow-md"
                    />
                    <div className="flex-1 space-y-3 text-center sm:text-left">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Download or share this badge as a proof of backing my Web3 journey right
                        from here.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <button
                          onClick={handleDownloadBadge}
                          className="flex items-center justify-center gap-2 rounded-xl border border-indigo-500/40 px-4 py-3 font-semibold text-indigo-600 dark:text-indigo-300 hover:border-indigo-500"
                        >
                          <FiAward /> Download Badge
                        </button>
                        <button
                          onClick={handleNativeShare}
                          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 font-semibold text-white hover:bg-indigo-600"
                        >
                          <FiShare2 /> Quick Share
                        </button>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                          Share it on your network
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <button
                            onClick={handleLinkedInShare}
                            className="flex items-center gap-2 rounded-full border border-[#0A66C2]/40 px-4 py-2 text-sm font-semibold text-[#0A66C2] hover:border-[#0A66C2]"
                          >
                            <FaLinkedinIn /> LinkedIn
                          </button>
                          <button
                            onClick={handleXShare}
                            className="flex items-center gap-2 rounded-full border border-black/40 px-4 py-2 text-sm font-semibold text-black dark:text-white hover:border-black"
                          >
                            <FaTwitter /> X
                          </button>
                          <button
                            onClick={handleWhatsappShare}
                            className="flex items-center gap-2 rounded-full border border-green-500/40 px-4 py-2 text-sm font-semibold text-green-600 hover:border-green-500"
                          >
                            <FaWhatsapp /> WhatsApp
                          </button>
                        </div>
                      </div>
                      <div className="mt-6 w-full">
                        <p className="text-sm font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                          Leave your email so I can send a personal thank-you.
                        </p>
                        <form
                          onSubmit={handleSupporterEmailSubmit}
                          className="flex flex-col sm:flex-row gap-3"
                        >
                          <input
                            type="email"
                            value={supporterEmail}
                            onChange={(e) => {
                              setSupporterEmail(e.target.value);
                              setSupporterEmailError("");
                            }}
                            placeholder="you@email.com"
                            className="flex-1 px-4 py-3 rounded-xl border border-indigo-500/30 bg-white/80 dark:bg-primary-dark/70 dark:text-primary-light text-primary-dark focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-60"
                            disabled={supporterEmailSubmitted || supporterEmailLoading}
                          />
                          <button
                            type="submit"
                            disabled={
                              supporterEmailSubmitted ||
                              supporterEmailLoading ||
                              !supporterEmail
                            }
                            className="px-5 py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                          >
                            {supporterEmailSubmitted
                              ? "Saved"
                              : supporterEmailLoading
                              ? "Sending..."
                              : "Share Email"}
                          </button>
                        </form>
                        {supporterEmailError && (
                          <p className="mt-2 text-sm text-red-500">
                            {supporterEmailError}
                          </p>
                        )}
                        {supporterEmailSubmitted && !supporterEmailError && (
                          <p className="mt-2 text-sm text-green-500">
                            Got it! I’ll reach out with a proper thank-you soon.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.button
                onClick={handleSend}
                disabled={
                  isSigningSupport ||
                  isSending ||
                  isConfirming ||
                  !amount ||
                  parseFloat(amount) <= 0
                }
                whileHover={
                  !isSigningSupport &&
                  !isSending &&
                  !isConfirming &&
                  amount &&
                  parseFloat(amount) > 0
                    ? { scale: 1.02 }
                    : {}
                }
                whileTap={
                  !isSigningSupport &&
                  !isSending &&
                  !isConfirming &&
                  amount &&
                  parseFloat(amount) > 0
                    ? { scale: 0.98 }
                    : {}
                }
                className="w-full px-8 py-4 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSigningSupport ? (
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
                    <span>Awaiting signature...</span>
                  </>
                ) : isSending ? (
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
