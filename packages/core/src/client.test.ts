import { getDefaultProvider } from 'ethers'

import { getProvider, getSigners, getWebSocketProvider } from '../test'
import { Client, createClient, getClient } from './client'
import { MockConnector } from './connectors/mock'
import { defaultChains } from './constants'
import { createStorage } from './storage'

describe('createClient', () => {
  it('returns client', () => {
    const client = createClient({
      chains: defaultChains,
      provider: getDefaultProvider(),
    })
    expect(client).toBeInstanceOf(Client)
  })

  describe('config', () => {
    describe('autoConnect', () => {
      describe('true', () => {
        it('disconnected', async () => {
          const client = createClient({
            autoConnect: true,
            chains: defaultChains,
            provider: getDefaultProvider(),
          })
          expect(client.status).toMatchInlineSnapshot(`"connecting"`)
          await client.autoConnect()
          expect(client.status).toMatchInlineSnapshot(`"disconnected"`)
        })

        it('connected', async () => {
          const client = createClient({
            autoConnect: true,
            chains: defaultChains,
            connectors: [
              new MockConnector({
                options: {
                  flags: { isAuthorized: true },
                  signer: getSigners()[0],
                },
              }),
            ],
            provider: getDefaultProvider(),
          })
          expect(client.status).toMatchInlineSnapshot(`"connecting"`)
          await client.autoConnect()
          expect(client.status).toMatchInlineSnapshot(`"connected"`)
        })

        it('reconnected', async () => {
          const localStorage: Record<string, any> = {}
          const storage = createStorage({
            storage: {
              getItem: (key) => localStorage[key],
              setItem: (key, value) =>
                (localStorage[key] = JSON.stringify(value)),
              removeItem: (key) => delete localStorage[key],
            },
          })
          storage.setItem('store', {
            state: {
              data: {
                account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
              },
            },
          })
          const client = createClient({
            autoConnect: true,
            chains: defaultChains,
            connectors: [
              new MockConnector({
                options: {
                  flags: { isAuthorized: true },
                  signer: getSigners()[0],
                },
              }),
            ],
            provider: getDefaultProvider(),
            storage,
          })
          expect(client.status).toMatchInlineSnapshot(`"reconnecting"`)
          await client.autoConnect()
          expect(client.status).toMatchInlineSnapshot(`"connected"`)
        })
      })

      it('false', () => {
        const client = createClient({
          autoConnect: false,
          chains: defaultChains,
          provider: getDefaultProvider(),
        })
        expect(client.status).toMatchInlineSnapshot(`"disconnected"`)
      })
    })

    describe('connectors', () => {
      it('default', () => {
        const client = createClient({
          chains: defaultChains,
          provider: getDefaultProvider(),
        })
        expect(client.connectors.map((x) => x.name)).toMatchInlineSnapshot(`
          [
            "Injected",
          ]
        `)
      })

      it('custom', () => {
        const client = createClient({
          chains: defaultChains,
          connectors: [
            new MockConnector({
              options: {
                signer: getSigners()[0],
              },
            }),
          ],
          provider: getDefaultProvider(),
        })
        expect(client.connectors.map((x) => x.name)).toMatchInlineSnapshot(`
          [
            "Mock",
          ]
        `)
      })
    })

    describe('provider', () => {
      it('default', () => {
        const client = createClient({
          chains: defaultChains,
          provider: getDefaultProvider(),
        })
        expect(client.provider).toBeDefined()
      })

      it('custom', () => {
        const client = createClient({
          chains: defaultChains,
          provider: getProvider,
        })
        expect(client.provider).toMatchInlineSnapshot(
          `"<Provider network={31337} />"`,
        )
      })
    })

    describe('storage', () => {
      it('default', () => {
        const client = createClient({
          chains: defaultChains,
          provider: getDefaultProvider(),
        })
        expect(client.storage).toMatchInlineSnapshot(`
          {
            "getItem": [Function],
            "removeItem": [Function],
            "setItem": [Function],
          }
        `)
      })

      it('custom', () => {
        const client = createClient({
          chains: defaultChains,
          provider: getDefaultProvider(),
          storage: createStorage({
            storage: window.localStorage,
          }),
        })
        expect(client.storage).toMatchInlineSnapshot(`
          {
            "getItem": [Function],
            "removeItem": [Function],
            "setItem": [Function],
          }
        `)
      })
    })

    describe('webSocketProvider', () => {
      it('default', () => {
        const client = createClient({
          chains: defaultChains,
          provider: getDefaultProvider(),
        })
        expect(client.webSocketProvider).toBeUndefined()
      })

      it('custom', async () => {
        const client = createClient({
          chains: defaultChains,
          provider: getDefaultProvider(),
          webSocketProvider: getWebSocketProvider,
        })
        await client.webSocketProvider?.destroy()
        expect(client.webSocketProvider).toMatchInlineSnapshot(
          `"<WebSocketProvider network={31337} />"`,
        )
      })
    })
  })
})

describe('getClient', () => {
  it('returns default client', () => {
    expect(getClient()).toBeDefined()
  })

  it('returns created client', () => {
    const client = createClient({
      chains: defaultChains,
      provider: getDefaultProvider(),
    })
    expect(getClient()).toEqual(client)
  })
})
