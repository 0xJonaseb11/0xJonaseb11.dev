import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { 
  FiX, 
  FiZap, 
  FiTrendingUp, 
  FiShield, 
  FiGlobe,
  FiCpu,
  FiDollarSign,
  FiCode,
  FiLock
} from 'react-icons/fi';
import { 
  SiEthereum, 
  SiBitcoin
} from 'react-icons/si';

// Web3 Facts Database
const web3Facts = [
  {
    category: 'Ethereum',
    icon: <SiEthereum className="text-4xl text-indigo-500" />,
    title: 'Ethereum Virtual Machine (EVM)',
    fact: 'The EVM is a Turing-complete virtual machine that executes smart contracts. Every Ethereum node runs the EVM to maintain consensus across the network.',
    color: 'indigo'
  },
  {
    category: 'Blockchain',
    icon: <FiLock className="text-4xl text-blue-500" />,
    title: 'Immutable Ledger',
    fact: 'Once data is written to a blockchain, it cannot be altered or deleted. This immutability is achieved through cryptographic hashing and distributed consensus.',
    color: 'blue'
  },
  {
    category: 'Bitcoin',
    icon: <SiBitcoin className="text-4xl text-orange-500" />,
    title: 'Satoshi Nakamoto',
    fact: 'The Bitcoin network processes approximately 300,000 transactions per day. The smallest unit of Bitcoin is called a Satoshi, named after its creator.',
    color: 'orange'
  },
  {
    category: 'Smart Contracts',
    icon: <FiCode className="text-4xl text-purple-500" />,
    title: 'Self-Executing Code',
    fact: 'Smart contracts automatically execute when predetermined conditions are met, eliminating the need for intermediaries and reducing transaction costs.',
    color: 'purple'
  },
  {
    category: 'Solana',
    icon: <FiZap className="text-4xl text-purple-600" />,
    title: 'High Throughput',
    fact: 'Solana can process up to 65,000 transactions per second using its unique Proof of History consensus mechanism combined with Proof of Stake.',
    color: 'purple'
  },
  {
    category: 'DeFi',
    icon: <FiDollarSign className="text-4xl text-green-500" />,
    title: 'Decentralized Finance',
    fact: 'DeFi protocols have locked over $50 billion in total value. They enable lending, borrowing, and trading without traditional financial intermediaries.',
    color: 'green'
  },
  {
    category: 'NFTs',
    icon: <FiShield className="text-4xl text-pink-500" />,
    title: 'Non-Fungible Tokens',
    fact: 'NFTs use blockchain technology to prove ownership and authenticity of digital assets. Each NFT has a unique identifier that cannot be replicated.',
    color: 'pink'
  },
  {
    category: 'Gas Fees',
    icon: <FiZap className="text-4xl text-yellow-500" />,
    title: 'Network Fees',
    fact: 'Gas fees on Ethereum are paid in ETH and vary based on network congestion. Layer 2 solutions like Base and Arbitrum reduce fees by up to 99%.',
    color: 'yellow'
  },
  {
    category: 'Consensus',
    icon: <FiGlobe className="text-4xl text-cyan-500" />,
    title: 'Distributed Consensus',
    fact: 'Blockchain networks achieve consensus through mechanisms like Proof of Work or Proof of Stake, ensuring all nodes agree on the state of the ledger.',
    color: 'cyan'
  },
  {
    category: 'Web3',
    icon: <FiGlobe className="text-4xl text-indigo-600" />,
    title: 'The Future of Internet',
    fact: 'Web3 represents a paradigm shift towards decentralized applications, giving users ownership of their data and digital assets through blockchain technology.',
    color: 'indigo'
  },
  {
    category: 'Cryptography',
    icon: <FiLock className="text-4xl text-red-500" />,
    title: 'Public Key Cryptography',
    fact: 'Blockchain uses asymmetric cryptography where public keys are shared openly, but private keys must remain secret to sign transactions securely.',
    color: 'red'
  },
  {
    category: 'Mining',
    icon: <FiCpu className="text-4xl text-teal-500" />,
    title: 'Proof of Work',
    fact: 'Bitcoin miners compete to solve complex mathematical puzzles. The first to solve it gets to add a block and receives Bitcoin as a reward.',
    color: 'teal'
  },
  {
    category: 'Staking',
    icon: <FiTrendingUp className="text-4xl text-emerald-500" />,
    title: 'Proof of Stake',
    fact: 'In PoS networks, validators lock up cryptocurrency as stake. They earn rewards for validating transactions and maintaining network security.',
    color: 'emerald'
  },
  {
    category: 'Layer 2',
    icon: <FiZap className="text-4xl text-violet-500" />,
    title: 'Scaling Solutions',
    fact: 'Layer 2 solutions like Optimistic Rollups and ZK-Rollups process transactions off-chain and batch them to mainnet, reducing costs and increasing speed.',
    color: 'violet'
  },
  {
    category: 'DAO',
    icon: <FiGlobe className="text-4xl text-rose-500" />,
    title: 'Decentralized Autonomous Organizations',
    fact: 'DAOs are organizations governed by smart contracts and member voting. They operate without central leadership, making decisions through token-based governance.',
    color: 'rose'
  }
];

const Web3WelcomeModal = ({ onClose }) => {
  const [currentFact, setCurrentFact] = useState(null);
  const [factIndex, setFactIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Get random fact on mount and when user clicks next
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * web3Facts.length);
    setFactIndex(randomIndex);
    setCurrentFact(web3Facts[randomIndex]);
  }, []);

  const getNextFact = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const newIndex = (factIndex + 1) % web3Facts.length;
      setFactIndex(newIndex);
      setCurrentFact(web3Facts[newIndex]);
      setIsAnimating(false);
    }, 300);
  };

  const getRandomFact = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * web3Facts.length);
      setFactIndex(randomIndex);
      setCurrentFact(web3Facts[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  const colorClasses = {
    indigo: 'bg-indigo-500/10 border-indigo-500/30',
    blue: 'bg-blue-500/10 border-blue-500/30',
    orange: 'bg-orange-500/10 border-orange-500/30',
    purple: 'bg-purple-500/10 border-purple-500/30',
    green: 'bg-green-500/10 border-green-500/30',
    pink: 'bg-pink-500/10 border-pink-500/30',
    yellow: 'bg-yellow-500/10 border-yellow-500/30',
    cyan: 'bg-cyan-500/10 border-cyan-500/30',
    red: 'bg-red-500/10 border-red-500/30',
    teal: 'bg-teal-500/10 border-teal-500/30',
    emerald: 'bg-emerald-500/10 border-emerald-500/30',
    violet: 'bg-violet-500/10 border-violet-500/30',
    rose: 'bg-rose-500/10 border-rose-500/30',
  };

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] transition-all duration-300"
        onClick={onClose}
      >
        {/* Animated Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-black/80 backdrop-blur-md fixed inset-0 w-full h-full"
        />

        {/* Modal Content */}
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto z-[201] pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-primary-dark border-2 border-indigo-500/30 shadow-2xl rounded-3xl overflow-hidden pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between p-6 border-b border-indigo-500/20">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <SiEthereum className="text-3xl text-indigo-400" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-light">
                    Welcome to Web3
                  </h2>
                  <p className="text-sm text-ternary-light">Blockchain & Web3 Specialist Portfolio</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors text-ternary-light hover:text-primary-light"
                aria-label="Close modal"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            {/* Fact Content */}
            <div className="relative z-10 p-8">
              {currentFact && (
                <motion.div
                  key={factIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isAnimating ? 0 : 1, x: isAnimating ? -20 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${colorClasses[currentFact.color]} rounded-2xl p-8 border-2 backdrop-blur-sm`}
                >
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="flex items-center gap-3"
                    >
                      {currentFact.icon}
                      <span className="px-4 py-1.5 bg-white/10 dark:bg-black/20 rounded-full text-sm font-semibold text-primary-light backdrop-blur-sm">
                        {currentFact.category}
                      </span>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-primary-light mb-4"
                  >
                    {currentFact.title}
                  </motion.h3>

                  {/* Fact Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-ternary-light leading-relaxed"
                  >
                    {currentFact.fact}
                  </motion.p>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-4 mt-6">
                <motion.button
                  onClick={getNextFact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiTrendingUp />
                  <span>Next Fact</span>
                </motion.button>
                <motion.button
                  onClick={getRandomFact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 border-2 border-purple-500/30 text-primary-light font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiZap />
                  <span>Random</span>
                </motion.button>
              </div>

              {/* Fun Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center p-4 bg-white/5 dark:bg-black/10 rounded-xl backdrop-blur-sm border border-indigo-500/20"
                >
                  <div className="text-2xl font-bold text-indigo-400">15+</div>
                  <div className="text-xs text-ternary-light mt-1">Web3 Facts</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center p-4 bg-white/5 dark:bg-black/10 rounded-xl backdrop-blur-sm border border-purple-500/20"
                >
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-xs text-ternary-light mt-1">Blockchain Focus</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-center p-4 bg-white/5 dark:bg-black/10 rounded-xl backdrop-blur-sm border border-pink-500/20"
                >
                  <div className="text-2xl font-bold text-pink-400">∞</div>
                  <div className="text-xs text-ternary-light mt-1">Possibilities</div>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 p-6 border-t border-indigo-500/20 bg-indigo-500/5">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore My Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default Web3WelcomeModal;

