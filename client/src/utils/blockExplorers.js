const explorerConfig = {
  1: { name: "Etherscan", baseUrl: "https://etherscan.io" },
  10: { name: "Optimistic Etherscan", baseUrl: "https://optimistic.etherscan.io" },
  137: { name: "Polygonscan", baseUrl: "https://polygonscan.com" },
  8453: { name: "Basescan", baseUrl: "https://basescan.org" },
  42161: { name: "Arbiscan", baseUrl: "https://arbiscan.io" },
};

const getFallbackExplorer = () => explorerConfig[1];

export const getBlockExplorerUrl = (chainId, txHash) => {
  const explorer = explorerConfig[chainId] || getFallbackExplorer();
  if (!explorerConfig[chainId]) {
    console.warn(`Unknown chain ID: ${chainId}, falling back to ${explorer.name}`);
  }
  return `${explorer.baseUrl}/tx/${txHash}`;
};

export const getBlockExplorerName = (chainId) => {
  const explorer = explorerConfig[chainId] || getFallbackExplorer();
  return explorer.name;
};

