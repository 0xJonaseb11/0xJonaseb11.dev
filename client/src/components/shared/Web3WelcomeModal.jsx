import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import {
  FiX,
  FiZap,
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiCpu,
  FiDollarSign,
  FiCode,
  FiLock,
} from "react-icons/fi";
import { SiEthereum } from "react-icons/si";

// Web3 Facts Database - Advanced Concepts
const web3Facts = [
  // Zero-Knowledge Proofs
  {
    category: "ZK Proofs",
    icon: <FiLock className="text-4xl text-indigo-500" />,
    title: "Zero-Knowledge Proofs (ZK-SNARKs)",
    fact: "ZK-SNARKs allow one party to prove knowledge of a value without revealing the value itself. Used in privacy coins like Zcash and scaling solutions like zkSync.",
    color: "indigo",
  },
  {
    category: "ZK Proofs",
    icon: <FiLock className="text-4xl text-purple-500" />,
    title: "ZK-STARKs vs ZK-SNARKs",
    fact: "ZK-STARKs are quantum-resistant and don't require a trusted setup, but generate larger proofs. ZK-SNARKs are more efficient but require initial trusted setup ceremony.",
    color: "purple",
  },
  {
    category: "ZK Proofs",
    icon: <FiShield className="text-4xl text-blue-500" />,
    title: "Trusted Setup Ceremony",
    fact: 'ZK-SNARKs require a "trusted setup" where participants generate cryptographic parameters. If compromised, the system\'s security is broken. Modern ceremonies use multi-party computation.',
    color: "blue",
  },

  // Rollups
  {
    category: "Rollups",
    icon: <FiZap className="text-4xl text-violet-500" />,
    title: "Optimistic Rollups",
    fact: "Optimistic Rollups assume transactions are valid and only verify if challenged. They use fraud proofs and have a 7-day withdrawal period for security.",
    color: "violet",
  },
  {
    category: "Rollups",
    icon: <FiZap className="text-4xl text-cyan-500" />,
    title: "ZK-Rollups",
    fact: "ZK-Rollups use zero-knowledge proofs to verify transaction validity instantly. They provide immediate finality and don't require a challenge period like Optimistic Rollups.",
    color: "cyan",
  },
  {
    category: "Rollups",
    icon: <FiCode className="text-4xl text-indigo-600" />,
    title: "Arbitrum One",
    fact: "Arbitrum uses Optimistic Rollup technology with fraud proofs. It can process thousands of transactions per second while maintaining Ethereum security guarantees.",
    color: "indigo",
  },
  {
    category: "Rollups",
    icon: <FiCode className="text-4xl text-pink-500" />,
    title: "Optimism",
    fact: "Optimism is an EVM-compatible Optimistic Rollup that reduces gas fees by up to 10x. It uses a single-round fraud proof system for faster dispute resolution.",
    color: "pink",
  },
  {
    category: "Rollups",
    icon: <SiEthereum className="text-4xl text-blue-500" />,
    title: "Base Network",
    fact: "Base is Coinbase's Layer 2 built on Optimism's OP Stack. It provides low-cost transactions and seamless integration with Coinbase's ecosystem.",
    color: "blue",
  },
  {
    category: "Rollups",
    icon: <FiZap className="text-4xl text-purple-600" />,
    title: "zkSync Era",
    fact: "zkSync Era is a ZK-Rollup that supports EVM-compatible smart contracts. It uses zkEVM technology to execute Solidity code while maintaining ZK proof security.",
    color: "purple",
  },
  {
    category: "Rollups",
    icon: <FiCode className="text-4xl text-teal-500" />,
    title: "Polygon zkEVM",
    fact: "Polygon zkEVM is a ZK-Rollup that provides full EVM equivalence. It uses zero-knowledge proofs to batch transactions, reducing costs by 90% compared to mainnet.",
    color: "teal",
  },

  // Token Standards
  {
    category: "Token Standards",
    icon: <FiDollarSign className="text-4xl text-green-500" />,
    title: "ERC-20 Standard",
    fact: "ERC-20 is the most widely used token standard on Ethereum, defining functions like transfer(), approve(), and balanceOf(). Over 500,000 ERC-20 tokens exist.",
    color: "green",
  },
  {
    category: "Token Standards",
    icon: <FiShield className="text-4xl text-pink-500" />,
    title: "ERC-721 (NFTs)",
    fact: "ERC-721 defines the standard for Non-Fungible Tokens. Each token has a unique tokenId and metadata URI. The standard includes functions like ownerOf() and safeTransferFrom().",
    color: "pink",
  },
  {
    category: "Token Standards",
    icon: <FiCode className="text-4xl text-purple-500" />,
    title: "ERC-1155 Multi-Token",
    fact: "ERC-1155 allows a single contract to manage multiple token types (fungible, non-fungible, or semi-fungible). It's more gas-efficient than separate ERC-20 and ERC-721 contracts.",
    color: "purple",
  },
  {
    category: "Token Standards",
    icon: <FiTrendingUp className="text-4xl text-emerald-500" />,
    title: "ERC-4626 Vault Standard",
    fact: "ERC-4626 standardizes yield-bearing vaults in DeFi. It provides a unified interface for tokenized vaults, making it easier to integrate yield strategies across protocols.",
    color: "emerald",
  },
  {
    category: "Token Standards",
    icon: <FiLock className="text-4xl text-orange-500" />,
    title: "ERC-2612 Permit",
    fact: "ERC-2612 allows users to approve token spending via signatures instead of transactions. This enables gasless approvals and better UX for DeFi applications.",
    color: "orange",
  },
  {
    category: "Token Standards",
    icon: <FiCode className="text-4xl text-cyan-500" />,
    title: "ERC-4337 Account Abstraction",
    fact: "ERC-4337 enables smart contract wallets without changing Ethereum's core protocol. It allows social recovery, multi-sig, and gasless transactions through paymasters.",
    color: "cyan",
  },
  {
    category: "Token Standards",
    icon: <FiShield className="text-4xl text-red-500" />,
    title: "ERC-777 Advanced Token",
    fact: "ERC-777 is an advanced token standard with hooks that notify contracts when tokens are sent. It enables more complex DeFi interactions but requires careful security auditing.",
    color: "red",
  },

  // Security
  {
    category: "Security",
    icon: <FiShield className="text-4xl text-red-500" />,
    title: "Reentrancy Attacks",
    fact: "Reentrancy occurs when a function calls an external contract before updating state. The DAO hack in 2016 was a reentrancy attack that led to Ethereum's hard fork.",
    color: "red",
  },
  {
    category: "Security",
    icon: <FiLock className="text-4xl text-orange-500" />,
    title: "Checks-Effects-Interactions Pattern",
    fact: "The CEI pattern prevents reentrancy: first check conditions, then update state (effects), and finally interact with external contracts. This is a critical security practice.",
    color: "orange",
  },
  {
    category: "Security",
    icon: <FiShield className="text-4xl text-yellow-500" />,
    title: "Flash Loan Attacks",
    fact: "Flash loans allow borrowing without collateral if repaid in the same transaction. Attackers use them to manipulate prices and exploit vulnerabilities, causing millions in losses.",
    color: "yellow",
  },
  {
    category: "Security",
    icon: <FiLock className="text-4xl text-pink-500" />,
    title: "Integer Overflow/Underflow",
    fact: "Solidity 0.8.0+ automatically checks for integer overflow/underflow. Older versions required SafeMath library. The 2018 BEC token hack exploited integer overflow.",
    color: "pink",
  },
  {
    category: "Security",
    icon: <FiShield className="text-4xl text-purple-500" />,
    title: "Front-Running & MEV",
    fact: "Maximal Extractable Value (MEV) refers to profit validators can extract by reordering transactions. Front-running bots monitor mempools and submit higher gas transactions.",
    color: "purple",
  },
  {
    category: "Security",
    icon: <FiLock className="text-4xl text-indigo-500" />,
    title: "Access Control Vulnerabilities",
    fact: "Missing access control checks allow unauthorized users to call sensitive functions. The Parity wallet hack in 2017 exploited a missing onlyOwner modifier.",
    color: "indigo",
  },
  {
    category: "Security",
    icon: <FiShield className="text-4xl text-teal-500" />,
    title: "Oracle Manipulation",
    fact: "Price oracle attacks exploit centralized price feeds. The 2020 bZx flash loan attacks manipulated oracle prices to drain millions from DeFi protocols.",
    color: "teal",
  },
  {
    category: "Security",
    icon: <FiLock className="text-4xl text-cyan-500" />,
    title: "Time-Based Vulnerabilities",
    fact: "Using block.timestamp or block.number for critical logic is dangerous. Miners can manipulate timestamps within a small range, and block numbers are predictable.",
    color: "cyan",
  },
  {
    category: "Security",
    icon: <FiShield className="text-4xl text-rose-500" />,
    title: "Unchecked External Calls",
    fact: "External calls can fail silently or consume all gas. Always check return values and use low-level calls carefully. The send() function only forwards 2300 gas.",
    color: "rose",
  },
  {
    category: "Security",
    icon: <FiLock className="text-4xl text-violet-500" />,
    title: "Signature Replay Attacks",
    fact: "EIP-712 prevents signature replay by including domain separators. Without proper nonces or domain separation, signatures can be reused across different contexts.",
    color: "violet",
  },

  // Advanced Ethereum
  {
    category: "Ethereum",
    icon: <SiEthereum className="text-4xl text-indigo-500" />,
    title: "Ethereum Improvement Proposals (EIPs)",
    fact: "EIPs are design documents proposing changes to Ethereum. EIP-1559 changed fee structure, EIP-4844 introduced blob transactions for cheaper data storage.",
    color: "indigo",
  },
  {
    category: "Ethereum",
    icon: <SiEthereum className="text-4xl text-blue-500" />,
    title: "EIP-1559 Fee Market",
    fact: "EIP-1559 introduced base fees that are burned and priority fees for miners. This makes gas prices more predictable and reduces ETH supply over time.",
    color: "blue",
  },
  {
    category: "Ethereum",
    icon: <SiEthereum className="text-4xl text-purple-500" />,
    title: "EIP-4844 Proto-Danksharding",
    fact: "EIP-4844 (Dencun upgrade) introduced blob transactions, reducing Layer 2 costs by 90%. Blobs are temporary data that don't compete with regular transaction space.",
    color: "purple",
  },
  {
    category: "Ethereum",
    icon: <FiCode className="text-4xl text-cyan-500" />,
    title: "Gas Optimization Techniques",
    fact: "Gas optimization includes using uint256, packing structs, using events instead of storage, and minimizing external calls. A 1% gas reduction can save thousands in fees.",
    color: "cyan",
  },
  {
    category: "Ethereum",
    icon: <SiEthereum className="text-4xl text-indigo-600" />,
    title: "EVM Opcodes",
    fact: "The EVM has 140+ opcodes. PUSH operations cost 3 gas, SSTORE costs 20,000 gas for new storage, and CALL costs 2,300+ gas. Understanding opcodes is crucial for optimization.",
    color: "indigo",
  },
  {
    category: "Ethereum",
    icon: <FiCpu className="text-4xl text-teal-500" />,
    title: "Storage vs Memory",
    fact: "Storage is persistent and expensive (20,000 gas to write). Memory is temporary and cheaper. Understanding when to use each is key to gas-efficient smart contracts.",
    color: "teal",
  },

  // Payment Systems
  {
    category: "Payments",
    icon: <FiDollarSign className="text-4xl text-green-500" />,
    title: "ERC-4020 Token Payment Standard",
    fact: "ERC-4020 standardizes token payments, enabling seamless integration of payment systems across different tokens and protocols in the Ethereum ecosystem.",
    color: "green",
  },
  {
    category: "Payments",
    icon: <FiDollarSign className="text-4xl text-emerald-500" />,
    title: "Payment Channels",
    fact: "Payment channels like Lightning Network enable instant, low-cost transactions off-chain. Users can make unlimited transactions with only two on-chain transactions.",
    color: "emerald",
  },
  {
    category: "Payments",
    icon: <FiTrendingUp className="text-4xl text-blue-500" />,
    title: "State Channels",
    fact: "State channels allow complex interactions off-chain. Participants sign state updates and only settle on-chain if there's a dispute, enabling instant and free transactions.",
    color: "blue",
  },

  // DeFi Advanced
  {
    category: "DeFi",
    icon: <FiTrendingUp className="text-4xl text-green-500" />,
    title: "Automated Market Makers (AMMs)",
    fact: "AMMs like Uniswap use constant product formula (x * y = k) for pricing. Liquidity providers earn fees but face impermanent loss when token prices diverge.",
    color: "green",
  },
  {
    category: "DeFi",
    icon: <FiDollarSign className="text-4xl text-emerald-500" />,
    title: "Liquidity Pools",
    fact: "Liquidity pools lock tokens in smart contracts to enable trading. The ratio of tokens determines prices. Larger pools provide better price stability and lower slippage.",
    color: "emerald",
  },
  {
    category: "DeFi",
    icon: <FiTrendingUp className="text-4xl text-cyan-500" />,
    title: "Impermanent Loss",
    fact: "Impermanent loss occurs when providing liquidity to AMMs. If token prices change, LPs would have been better off holding tokens. Loss becomes permanent if withdrawn.",
    color: "cyan",
  },
  {
    category: "DeFi",
    icon: <FiDollarSign className="text-4xl text-purple-500" />,
    title: "Lending Protocols",
    fact: "Compound and Aave use algorithmic interest rates based on supply and demand. Over-collateralization protects lenders, with liquidation if collateral value drops.",
    color: "purple",
  },
  {
    category: "DeFi",
    icon: <FiTrendingUp className="text-4xl text-pink-500" />,
    title: "Yield Farming",
    fact: "Yield farming involves providing liquidity to earn rewards. Strategies often involve multiple protocols and token swaps, maximizing returns but increasing complexity and risk.",
    color: "pink",
  },
  {
    category: "DeFi",
    icon: <FiDollarSign className="text-4xl text-orange-500" />,
    title: "Liquidation Mechanisms",
    fact: "When collateral value drops below a threshold, liquidators can repay debt at a discount. This maintains protocol solvency but can cause cascading liquidations during crashes.",
    color: "orange",
  },

  // Oracles
  {
    category: "Oracles",
    icon: <FiGlobe className="text-4xl text-blue-500" />,
    title: "Chainlink Oracles",
    fact: "Chainlink provides decentralized price feeds by aggregating data from multiple nodes. It uses reputation systems and economic incentives to ensure data accuracy.",
    color: "blue",
  },
  {
    category: "Oracles",
    icon: <FiGlobe className="text-4xl text-cyan-500" />,
    title: "Oracle Problem",
    fact: "The oracle problem is how to trust external data on-chain. Solutions include multiple data sources, reputation systems, and cryptographic proofs of data authenticity.",
    color: "cyan",
  },

  // Cross-Chain
  {
    category: "Cross-Chain",
    icon: <FiGlobe className="text-4xl text-violet-500" />,
    title: "Cross-Chain Bridges",
    fact: "Bridges enable asset transfers between blockchains. They use lock-and-mint or burn-and-mint mechanisms. Bridge hacks have resulted in over $2 billion in losses.",
    color: "violet",
  },
  {
    category: "Cross-Chain",
    icon: <FiGlobe className="text-4xl text-indigo-500" />,
    title: "Wormhole Protocol",
    fact: "Wormhole uses a network of validators to secure cross-chain transfers. It supports 20+ blockchains and uses a proof-of-authority consensus for message verification.",
    color: "indigo",
  },

  // Consensus Advanced
  {
    category: "Consensus",
    icon: <FiCpu className="text-4xl text-teal-500" />,
    title: "Byzantine Fault Tolerance",
    fact: "BFT systems can function correctly even if up to 1/3 of nodes are malicious. Ethereum 2.0 uses a BFT-style consensus where validators vote on block validity.",
    color: "teal",
  },
  {
    category: "Consensus",
    icon: <FiTrendingUp className="text-4xl text-emerald-500" />,
    title: "Finality in PoS",
    fact: "Ethereum 2.0 achieves finality through checkpoints. Validators vote on epochs, and once 2/3 agree, blocks are finalized and cannot be reverted except through 51% attack.",
    color: "emerald",
  },
  {
    category: "Consensus",
    icon: <FiCpu className="text-4xl text-orange-500" />,
    title: "Slashing Conditions",
    fact: "In PoS, validators can be slashed (lose stake) for malicious behavior like double-signing or voting on conflicting blocks. This disincentivizes attacks.",
    color: "orange",
  },

  // Cryptography Advanced
  {
    category: "Cryptography",
    icon: <FiLock className="text-4xl text-red-500" />,
    title: "Elliptic Curve Cryptography",
    fact: "Ethereum uses secp256k1 elliptic curve for signatures. Private keys are 256-bit numbers, and public keys are derived points on the curve. Breaking ECC requires solving discrete logarithm.",
    color: "red",
  },
  {
    category: "Cryptography",
    icon: <FiLock className="text-4xl text-purple-500" />,
    title: "Merkle Trees",
    fact: "Merkle trees enable efficient verification of large datasets. Block headers contain Merkle roots, allowing light clients to verify transactions without downloading full blocks.",
    color: "purple",
  },
  {
    category: "Cryptography",
    icon: <FiLock className="text-4xl text-indigo-500" />,
    title: "Hash Functions",
    fact: "Ethereum uses Keccak-256 (SHA-3 variant) for hashing. Hash functions are one-way and deterministic - same input always produces same output, but output reveals nothing about input.",
    color: "indigo",
  },

  // Advanced Concepts
  {
    category: "Advanced",
    icon: <FiCode className="text-4xl text-violet-500" />,
    title: "Meta-Transactions",
    fact: "Meta-transactions allow users to interact with dApps without holding ETH for gas. Relayers pay gas fees and users sign messages. ERC-4337 standardizes this with account abstraction.",
    color: "violet",
  },
  {
    category: "Advanced",
    icon: <FiCode className="text-4xl text-rose-500" />,
    title: "Proxy Patterns",
    fact: "Upgradeable contracts use proxy patterns (UUPS, Transparent, Beacon). The proxy delegates calls to implementation contracts, allowing upgrades while maintaining the same address.",
    color: "rose",
  },
  {
    category: "Advanced",
    icon: <FiCode className="text-4xl text-pink-500" />,
    title: "Diamond Pattern (EIP-2535)",
    fact: "The Diamond pattern allows unlimited function additions to contracts. It uses a lookup table to route function calls to different facets, enabling modular and upgradeable contracts.",
    color: "pink",
  },
  {
    category: "Advanced",
    icon: <FiZap className="text-4xl text-yellow-500" />,
    title: "Flash Swaps",
    fact: "Flash swaps allow borrowing tokens without collateral if repaid in the same transaction. Uniswap V2 introduced this, enabling complex arbitrage and liquidation strategies.",
    color: "yellow",
  },
  {
    category: "Advanced",
    icon: <FiCode className="text-4xl text-cyan-500" />,
    title: "CREATE2 Deterministic Addresses",
    fact: "CREATE2 allows predicting contract addresses before deployment. This enables counterfactual deployments and advanced patterns like counterfactual instantiation.",
    color: "cyan",
  },
  {
    category: "Advanced",
    icon: <FiShield className="text-4xl text-teal-500" />,
    title: "Formal Verification",
    fact: "Formal verification uses mathematical proofs to verify smart contract correctness. Tools like Certora and K framework help prove contracts meet specifications.",
    color: "teal",
  },
  {
    category: "Advanced",
    icon: <FiCode className="text-4xl text-indigo-600" />,
    title: "Minimal Proxy (EIP-1167)",
    fact: "EIP-1167 defines a minimal bytecode proxy that delegates all calls to an implementation. It's only 55 bytes, making it extremely gas-efficient for deploying many similar contracts.",
    color: "indigo",
  },

  // MEV
  {
    category: "MEV",
    icon: <FiTrendingUp className="text-4xl text-orange-500" />,
    title: "Maximal Extractable Value",
    fact: "MEV is profit validators can extract by reordering, including, or excluding transactions. Front-running, back-running, and sandwich attacks are common MEV strategies.",
    color: "orange",
  },
  {
    category: "MEV",
    icon: <FiZap className="text-4xl text-yellow-500" />,
    title: "Flashbots",
    fact: "Flashbots is a research organization building MEV infrastructure. Their private mempool allows searchers to submit bundles directly to validators, reducing front-running.",
    color: "yellow",
  },

  // Additional Advanced Topics
  {
    category: "Ethereum",
    icon: <SiEthereum className="text-4xl text-blue-500" />,
    title: "EVM Compatibility",
    fact: "EVM-compatible chains can run Ethereum smart contracts without modification. Chains like BSC, Polygon, and Avalanche use EVM to leverage Ethereum's developer ecosystem.",
    color: "blue",
  },
  {
    category: "Blockchain",
    icon: <FiLock className="text-4xl text-blue-500" />,
    title: "51% Attack",
    fact: "A 51% attack occurs when a single entity controls majority of network hashrate or stake. They can double-spend and censor transactions, but cannot steal funds or change history.",
    color: "blue",
  },
  {
    category: "Smart Contracts",
    icon: <FiCode className="text-4xl text-purple-500" />,
    title: "Self-Destruct Function",
    fact: "The selfdestruct() function deletes a contract and sends remaining ETH to an address. It's useful for upgrades but can be dangerous if called unexpectedly.",
    color: "purple",
  },
  {
    category: "DeFi",
    icon: <FiDollarSign className="text-4xl text-green-500" />,
    title: "Synthetic Assets",
    fact: "Synthetic assets mirror real-world assets on-chain. Protocols like Synthetix use collateral pools to mint synths, enabling exposure to stocks, commodities, and forex.",
    color: "green",
  },
  {
    category: "Security",
    icon: <FiShield className="text-4xl text-red-500" />,
    title: "Smart Contract Audits",
    fact: "Professional audits review code for vulnerabilities, gas optimization, and best practices. Top audit firms include Trail of Bits, OpenZeppelin, and Consensys Diligence.",
    color: "red",
  },
  {
    category: "Security",
    icon: <FiLock className="text-4xl text-orange-500" />,
    title: "Bug Bounty Programs",
    fact: "Many protocols offer rewards for finding vulnerabilities. Immunefi hosts bug bounties with rewards up to $10M. Responsible disclosure helps protect users before exploits.",
    color: "orange",
  },
  {
    category: "Advanced",
    icon: <FiCode className="text-4xl text-violet-500" />,
    title: "Gas Token Optimization",
    fact: "Gas tokens like GST2 and CHI allowed storing gas for later use. They exploited refund mechanisms, but EIP-3529 reduced refunds, making them less effective.",
    color: "violet",
  },
  {
    category: "Advanced",
    icon: <FiZap className="text-4xl text-cyan-500" />,
    title: "Batch Transactions",
    fact: "Batching multiple operations in one transaction saves gas. Instead of separate approve() and transferFrom(), users can batch operations, reducing total gas costs significantly.",
    color: "cyan",
  },
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
    indigo: "bg-indigo-500/10 border-indigo-500/30",
    blue: "bg-blue-500/10 border-blue-500/30",
    orange: "bg-orange-500/10 border-orange-500/30",
    purple: "bg-purple-500/10 border-purple-500/30",
    green: "bg-green-500/10 border-green-500/30",
    pink: "bg-pink-500/10 border-pink-500/30",
    yellow: "bg-yellow-500/10 border-yellow-500/30",
    cyan: "bg-cyan-500/10 border-cyan-500/30",
    red: "bg-red-500/10 border-red-500/30",
    teal: "bg-teal-500/10 border-teal-500/30",
    emerald: "bg-emerald-500/10 border-emerald-500/30",
    violet: "bg-violet-500/10 border-violet-500/30",
    rose: "bg-rose-500/10 border-rose-500/30",
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
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <SiEthereum className="text-3xl text-indigo-400" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-light">
                    Welcome to Web3
                  </h2>
                  <p className="text-sm text-ternary-light">
                    Blockchain & Web3 Specialist Portfolio
                  </p>
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
                  animate={{
                    opacity: isAnimating ? 0 : 1,
                    x: isAnimating ? -20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`${
                    colorClasses[currentFact.color]
                  } rounded-2xl p-8 border-2 backdrop-blur-sm`}
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
                  <div className="text-2xl font-bold text-indigo-400">69</div>
                  <div className="text-xs text-ternary-light mt-1">
                    Web3 Facts
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center p-4 bg-white/5 dark:bg-black/10 rounded-xl backdrop-blur-sm border border-purple-500/20"
                >
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-xs text-ternary-light mt-1">
                    Blockchain Focus
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-center p-4 bg-white/5 dark:bg-black/10 rounded-xl backdrop-blur-sm border border-pink-500/20"
                >
                  <div className="text-2xl font-bold text-pink-400">∞</div>
                  <div className="text-xs text-ternary-light mt-1">
                    Possibilities
                  </div>
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
