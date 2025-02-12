import { Chain } from '../types'
import { etherscanBlockExplorers } from './blockExplorers'
import { alchemyRpcUrls, defaultAlchemyId, infuraRpcUrls } from './rpcs'

export const chainId = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
  optimism: 10,
  optimismKovan: 69,
  polygon: 137,
  polygonMumbai: 80_001,
  arbitrum: 42_161,
  arbitrumRinkeby: 421_611,
  localhost: 1_337,
  hardhat: 31_337,
  foundry: 31_337,
} as const
export type ChainName = keyof typeof chainId

export const mainnet: Chain = {
  id: chainId.mainnet,
  name: 'Ethereum',
  network: 'homestead',
  ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    alchemy: alchemyRpcUrls.mainnet,
    infura: infuraRpcUrls.mainnet,
    default: `${alchemyRpcUrls.mainnet}/${defaultAlchemyId}`,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.mainnet,
    default: etherscanBlockExplorers.mainnet,
  },
}

export const ropsten: Chain = {
  id: chainId.ropsten,
  name: 'Ropsten',
  network: 'ropsten',
  ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  nativeCurrency: { name: 'Ropsten Ether', symbol: 'ropETH', decimals: 18 },
  rpcUrls: {
    alchemy: alchemyRpcUrls.ropsten,
    infura: infuraRpcUrls.ropsten,
    default: `${alchemyRpcUrls.ropsten}/${defaultAlchemyId}`,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.ropsten,
    default: etherscanBlockExplorers.ropsten,
  },
  testnet: true,
}

export const rinkeby: Chain = {
  id: chainId.rinkeby,
  name: 'Rinkeby',
  network: 'rinkeby',
  ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  nativeCurrency: { name: 'Rinkeby Ether', symbol: 'rETH', decimals: 18 },
  rpcUrls: {
    alchemy: alchemyRpcUrls.rinkeby,
    infura: infuraRpcUrls.rinkeby,
    default: `${alchemyRpcUrls.rinkeby}/${defaultAlchemyId}`,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.rinkeby,
    default: etherscanBlockExplorers.rinkeby,
  },
  testnet: true,
}

export const goerli: Chain = {
  id: chainId.goerli,
  name: 'Goerli',
  network: 'goerli',
  ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  nativeCurrency: { name: 'Goerli Ether', symbol: 'gETH', decimals: 18 },
  rpcUrls: {
    alchemy: alchemyRpcUrls.goerli,
    infura: infuraRpcUrls.goerli,
    default: `${alchemyRpcUrls.goerli}/${defaultAlchemyId}`,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.goerli,
    default: etherscanBlockExplorers.goerli,
  },
  testnet: true,
}

export const kovan: Chain = {
  id: chainId.kovan,
  name: 'Kovan',
  network: 'kovan',
  nativeCurrency: { name: 'Kovan Ether', symbol: 'kETH', decimals: 18 },
  rpcUrls: {
    alchemy: alchemyRpcUrls.kovan,
    infura: infuraRpcUrls.kovan,
    default: `${alchemyRpcUrls.kovan}/${defaultAlchemyId}`,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.kovan,
    default: etherscanBlockExplorers.kovan,
  },
  testnet: true,
}

export const optimism: Chain = {
  id: chainId.optimism,
  name: 'Optimism',
  network: 'optimism',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    alchemy: alchemyRpcUrls.optimism,
    infura: infuraRpcUrls.optimism,
    default: 'https://mainnet.optimism.io',
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.optimism,
    default: etherscanBlockExplorers.optimism,
  },
}

export const optimismKovan: Chain = {
  id: chainId.optimismKovan,
  name: 'Optimism Kovan',
  network: 'optimism-kovan',
  nativeCurrency: {
    name: 'Kovan Ether',
    symbol: 'KOR',
    decimals: 18,
  },
  rpcUrls: {
    alchemy: alchemyRpcUrls.optimismKovan,
    infura: infuraRpcUrls.optimismKovan,
    default: 'https://kovan.optimism.io',
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.optimismKovan,
    default: etherscanBlockExplorers.optimismKovan,
  },
  testnet: true,
}

export const polygon: Chain = {
  id: chainId.polygon,
  name: 'Polygon',
  network: 'matic',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls: {
    alchemy: alchemyRpcUrls.polygon,
    infura: infuraRpcUrls.polygon,
    default: 'https://polygon-rpc.com',
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.polygon,
    default: etherscanBlockExplorers.polygon,
  },
}

export const polygonMumbai: Chain = {
  id: chainId.polygonMumbai,
  name: 'Polygon Mumbai',
  network: 'maticmum',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: {
    alchemy: alchemyRpcUrls.polygonMumbai,
    infura: infuraRpcUrls.polygonMumbai,
    default: 'https://matic-mumbai.chainstacklabs.com',
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.polygonMumbai,
    default: etherscanBlockExplorers.polygonMumbai,
  },
  testnet: true,
}

export const arbitrum: Chain = {
  id: chainId.arbitrum,
  name: 'Arbitrum',
  network: 'arbitrum',
  nativeCurrency: { name: 'Ether', symbol: 'AETH', decimals: 18 },
  rpcUrls: {
    alchemy: alchemyRpcUrls.arbitrum,
    infura: infuraRpcUrls.arbitrum,
    default: 'https://arb1.arbitrum.io/rpc',
  },
  blockExplorers: {
    arbitrum: {
      name: 'Arbitrum Explorer',
      url: 'https://explorer.arbitrum.io',
    },
    etherscan: etherscanBlockExplorers.arbitrum,
    default: etherscanBlockExplorers.arbitrum,
  },
}

export const arbitrumRinkeby: Chain = {
  id: chainId.arbitrumRinkeby,
  name: 'Arbitrum Rinkeby',
  network: 'arbitrum-rinkeby',
  nativeCurrency: {
    name: 'Arbitrum Rinkeby Ether',
    symbol: 'ARETH',
    decimals: 18,
  },
  rpcUrls: {
    alchemy: alchemyRpcUrls.arbitrumRinkeby,
    infura: infuraRpcUrls.arbitrumRinkeby,
    default: 'https://rinkeby.arbitrum.io/rpc',
  },
  blockExplorers: {
    arbitrum: {
      name: 'Arbitrum Explorer',
      url: 'https://rinkeby-explorer.arbitrum.io',
    },
    etherscan: etherscanBlockExplorers.arbitrumRinkeby,
    default: etherscanBlockExplorers.arbitrumRinkeby,
  },
  testnet: true,
}

export const localhost: Chain = {
  id: chainId.localhost,
  name: 'Localhost',
  network: 'localhost',
  rpcUrls: {
    default: 'http://127.0.0.1:8545',
  },
}

export const hardhat: Chain = {
  id: chainId.hardhat,
  name: 'Hardhat',
  network: 'hardhat',
  rpcUrls: {
    default: 'http://127.0.0.1:8545',
  },
}

export const foundry: Chain = {
  id: chainId.hardhat,
  name: 'Foundry',
  network: 'foundry',
  rpcUrls: {
    default: 'http://127.0.0.1:8545',
  },
}

/**
 * Common chains for convenience
 * Should not contain all possible chains
 */
export const chain = {
  mainnet,
  ropsten,
  rinkeby,
  goerli,
  kovan,
  optimism,
  optimismKovan,
  polygon,
  polygonMumbai,
  arbitrum,
  arbitrumRinkeby,
  localhost,
  hardhat,
  foundry,
} as const
export const allChains = Object.values(chain)

export const defaultChains: Chain[] = [
  chain.mainnet,
  chain.ropsten,
  chain.rinkeby,
  chain.goerli,
  chain.kovan,
]

export const defaultL2Chains: Chain[] = [
  chain.arbitrum,
  chain.arbitrumRinkeby,
  chain.optimism,
  chain.optimismKovan,
]
