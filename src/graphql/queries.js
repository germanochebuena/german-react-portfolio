import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          descriptionHtml
          handle
          images(first: 1) {
            edges {
              node {
                originalSrc
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          metafield(namespace: "custom", key: "brand_color"){
            value
          }
        }
      }
    }
  }
`;
