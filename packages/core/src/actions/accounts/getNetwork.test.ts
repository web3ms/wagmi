import { getSigners, setupClient } from '../../../test'
import { MockConnector } from '../../connectors/mock'
import { connect } from './connect'
import { getNetwork } from './getNetwork'

const connector = new MockConnector({
  options: { signer: getSigners()[0] },
})

describe('getNetwork', () => {
  beforeEach(() => setupClient())

  describe('behavior', () => {
    it('not connected', async () => {
      expect(getNetwork()).toMatchInlineSnapshot(`
        {
          "chain": undefined,
          "chains": [
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
              },
              "id": 1,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 14353601,
              },
              "name": "Ethereum",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ether",
                "symbol": "ETH",
              },
              "network": "homestead",
              "rpcUrls": {
                "alchemy": "https://eth-mainnet.alchemyapi.io/v2",
                "default": "https://eth-mainnet.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://mainnet.infura.io/v3",
              },
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://ropsten.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://ropsten.etherscan.io",
                },
              },
              "id": 3,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 12063863,
              },
              "name": "Ropsten",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ropsten Ether",
                "symbol": "ropETH",
              },
              "network": "ropsten",
              "rpcUrls": {
                "alchemy": "https://eth-ropsten.alchemyapi.io/v2",
                "default": "https://eth-ropsten.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://ropsten.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://rinkeby.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://rinkeby.etherscan.io",
                },
              },
              "id": 4,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 10299530,
              },
              "name": "Rinkeby",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Rinkeby Ether",
                "symbol": "rETH",
              },
              "network": "rinkeby",
              "rpcUrls": {
                "alchemy": "https://eth-rinkeby.alchemyapi.io/v2",
                "default": "https://eth-rinkeby.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://rinkeby.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
              },
              "id": 5,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 6507670,
              },
              "name": "Goerli",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Goerli Ether",
                "symbol": "gETH",
              },
              "network": "goerli",
              "rpcUrls": {
                "alchemy": "https://eth-goerli.alchemyapi.io/v2",
                "default": "https://eth-goerli.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://goerli.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://kovan.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://kovan.etherscan.io",
                },
              },
              "id": 42,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 30285908,
              },
              "name": "Kovan",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Kovan Ether",
                "symbol": "kETH",
              },
              "network": "kovan",
              "rpcUrls": {
                "alchemy": "https://eth-kovan.alchemyapi.io/v2",
                "default": "https://eth-kovan.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://kovan.infura.io/v3",
              },
              "testnet": true,
            },
          ],
        }
      `)
    })

    it('connected', async () => {
      await connect({ connector })
      expect(getNetwork()).toMatchInlineSnapshot(`
        {
          "chain": {
            "blockExplorers": {
              "default": {
                "name": "Etherscan",
                "url": "https://etherscan.io",
              },
              "etherscan": {
                "name": "Etherscan",
                "url": "https://etherscan.io",
              },
            },
            "id": 1,
            "multicall": {
              "address": "0xca11bde05977b3631167028862be2a173976ca11",
              "blockCreated": 14353601,
            },
            "name": "Ethereum",
            "nativeCurrency": {
              "decimals": 18,
              "name": "Ether",
              "symbol": "ETH",
            },
            "network": "homestead",
            "rpcUrls": {
              "alchemy": "https://eth-mainnet.alchemyapi.io/v2",
              "default": "https://eth-mainnet.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
              "infura": "https://mainnet.infura.io/v3",
            },
            "unsupported": false,
          },
          "chains": [
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
              },
              "id": 1,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 14353601,
              },
              "name": "Ethereum",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ether",
                "symbol": "ETH",
              },
              "network": "homestead",
              "rpcUrls": {
                "alchemy": "https://eth-mainnet.alchemyapi.io/v2",
                "default": "https://eth-mainnet.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://mainnet.infura.io/v3",
              },
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://ropsten.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://ropsten.etherscan.io",
                },
              },
              "id": 3,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 12063863,
              },
              "name": "Ropsten",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ropsten Ether",
                "symbol": "ropETH",
              },
              "network": "ropsten",
              "rpcUrls": {
                "alchemy": "https://eth-ropsten.alchemyapi.io/v2",
                "default": "https://eth-ropsten.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://ropsten.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://rinkeby.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://rinkeby.etherscan.io",
                },
              },
              "id": 4,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 10299530,
              },
              "name": "Rinkeby",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Rinkeby Ether",
                "symbol": "rETH",
              },
              "network": "rinkeby",
              "rpcUrls": {
                "alchemy": "https://eth-rinkeby.alchemyapi.io/v2",
                "default": "https://eth-rinkeby.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://rinkeby.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
              },
              "id": 5,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 6507670,
              },
              "name": "Goerli",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Goerli Ether",
                "symbol": "gETH",
              },
              "network": "goerli",
              "rpcUrls": {
                "alchemy": "https://eth-goerli.alchemyapi.io/v2",
                "default": "https://eth-goerli.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://goerli.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://kovan.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://kovan.etherscan.io",
                },
              },
              "id": 42,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 30285908,
              },
              "name": "Kovan",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Kovan Ether",
                "symbol": "kETH",
              },
              "network": "kovan",
              "rpcUrls": {
                "alchemy": "https://eth-kovan.alchemyapi.io/v2",
                "default": "https://eth-kovan.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://kovan.infura.io/v3",
              },
              "testnet": true,
            },
          ],
        }
      `)
    })

    it('unsupported chain', async () => {
      await connect({
        connector: new MockConnector({
          options: {
            network: 69,
            signer: getSigners()[0],
          },
        }),
      })
      expect(getNetwork()).toMatchInlineSnapshot(`
        {
          "chain": {
            "id": 69,
            "name": "Chain 69",
            "network": "69",
            "rpcUrls": {
              "default": "",
            },
            "unsupported": true,
          },
          "chains": [
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
              },
              "id": 1,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 14353601,
              },
              "name": "Ethereum",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ether",
                "symbol": "ETH",
              },
              "network": "homestead",
              "rpcUrls": {
                "alchemy": "https://eth-mainnet.alchemyapi.io/v2",
                "default": "https://eth-mainnet.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://mainnet.infura.io/v3",
              },
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://ropsten.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://ropsten.etherscan.io",
                },
              },
              "id": 3,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 12063863,
              },
              "name": "Ropsten",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ropsten Ether",
                "symbol": "ropETH",
              },
              "network": "ropsten",
              "rpcUrls": {
                "alchemy": "https://eth-ropsten.alchemyapi.io/v2",
                "default": "https://eth-ropsten.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://ropsten.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://rinkeby.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://rinkeby.etherscan.io",
                },
              },
              "id": 4,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 10299530,
              },
              "name": "Rinkeby",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Rinkeby Ether",
                "symbol": "rETH",
              },
              "network": "rinkeby",
              "rpcUrls": {
                "alchemy": "https://eth-rinkeby.alchemyapi.io/v2",
                "default": "https://eth-rinkeby.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://rinkeby.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
              },
              "id": 5,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 6507670,
              },
              "name": "Goerli",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Goerli Ether",
                "symbol": "gETH",
              },
              "network": "goerli",
              "rpcUrls": {
                "alchemy": "https://eth-goerli.alchemyapi.io/v2",
                "default": "https://eth-goerli.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://goerli.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://kovan.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://kovan.etherscan.io",
                },
              },
              "id": 42,
              "multicall": {
                "address": "0xca11bde05977b3631167028862be2a173976ca11",
                "blockCreated": 30285908,
              },
              "name": "Kovan",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Kovan Ether",
                "symbol": "kETH",
              },
              "network": "kovan",
              "rpcUrls": {
                "alchemy": "https://eth-kovan.alchemyapi.io/v2",
                "default": "https://eth-kovan.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://kovan.infura.io/v3",
              },
              "testnet": true,
            },
          ],
        }
      `)
    })
  })
})
