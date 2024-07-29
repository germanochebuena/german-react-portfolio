import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';

const ProductsGrid = () => {
    const { loading, error, data, networkStatus } = useQuery(GET_PRODUCTS, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: 'all'
    });
  
    console.log({ loading, networkStatus, error, data });  // Log all relevant data for debugging
  
    if (loading && !data) return <p>Loading...</p>;
    if (error) {
      console.error('GraphQL Error:', error);
      return <p>Error: {error.message}. Check the console for more details.</p>;
    }
  
    if (!data || !data.products || !data.products.edges.length) {
      return <p>No data found.</p>;  // Handle cases where data is null or the data structure is not as expected
    }
  
    return (
      <div>
        {data.products.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>{node.title}</h2>
            <img src={node.images.edges[0]?.node.originalSrc} alt={node.title} />
            <p>{node.descriptionHtml || 'No description available'}</p>
            <p>{`${node.priceRange.minVariantPrice.amount} ${node.priceRange.minVariantPrice.currencyCode}`}</p>
          </div>
        ))}
      </div>
    );
  };
  

export default ProductsGrid;
