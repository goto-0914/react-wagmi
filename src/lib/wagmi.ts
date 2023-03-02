import { createClient, configureChains, mainnet, goerli } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const { chains, provider, webSocketProvider } = configureChains(
  [goerli, mainnet],
  [
    publicProvider(),
    // alchemyProvider({ apiKey: import.meta.env.ALCHEMY_API_KEY }),
  ]
);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});
