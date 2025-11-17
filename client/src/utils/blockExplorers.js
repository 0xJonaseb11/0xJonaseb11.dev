// Block explorer URLs for different chains
export const getBlockExplorerUrl = (chainId, txHash) => {
  const explorers = {
    // Ethereum Mainnet
    1: `https://etherscan.io/tx/${txHash}`,
    // Base Mainnet
    8453: `https://basescan.org/tx/${txHash}`,
    // Polygon Mainnet
    137: `https://polygonscan.com/tx/${txHash}`,
    // Arbitrum One
    42161: `https://arbiscan.io/tx/${txHash}`,
    // Optimism
    10: `https://optimistic.etherscan.io/tx/${txHash}`,
  };

  const url = explorers[chainId];
  if (!url) {
    // Fallback to Etherscan if chain not recognized
    console.warn(`Unknown chain ID: ${chainId}, using Etherscan as fallback`);
    return `https://etherscan.io/tx/${txHash}`;
  }

  return url;
};

export const getBlockExplorerName = (chainId) => {
  const names = {
    1: "Etherscan",
    8453: "Basescan",
    137: "Polygonscan",
    42161: "Arbiscan",
    10: "Optimistic Etherscan",
  };

  return names[chainId] || "Block Explorer";
};

