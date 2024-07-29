import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

const middlewareLink = setContext(() => ({
	headers: {
		'X-Shopify-Storefront-Access-Token': import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN
	}
}));

const httpLink = new HttpLink({
	uri: `https://${import.meta.env.VITE_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`
});

const link = middlewareLink.concat(httpLink);

export const client = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

console.log(link)
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
