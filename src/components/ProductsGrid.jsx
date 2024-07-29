import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';

const ProductsGrid = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS, {
      notifyOnNetworkStatusChange: true,
    });
    const [hoverColor, setHoverColor] = useState('');

    // Function to change the body background color
    const changeBodyColor = (color) => {
      document.body.style.backgroundColor = color;
    };
  
  
    console.log({ loading, error, data });
  
    if (loading && !data) return <p className="text-center">Loading...</p>;
    if (error) {
      console.error('GraphQL Error:', error);
      return <p className="text-red-500">Error: {error.message}. Check the console for more details.</p>;
    }
  
    if (!data || !data.products || !data.products.edges.length) {
      return <p className="text-gray-500 text-center">No data found.</p>;
    }
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 py-20">
        {data.products.edges.map(({ node }) => (
          <div key={node.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-500 ease-in-out transform hover:scale-105"
          onMouseEnter={() => changeBodyColor(node.metafield?.value || '#f9fafb')}
          onMouseLeave={() => changeBodyColor('#f9fafb')}>
            <a href={`https://${import.meta.env.VITE_SHOPIFY_STORE_DOMAIN}/products/${node.handle}`} className="block p-4 flex flex-col justify-center">
                <img src={node.images.edges[0]?.node.originalSrc || '/picture.png'} 
                    alt={node.title} 
                    className={`${!node.images.edges.length ? 'placeholder' : ''} w-full h-auto object-cover`}
                />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{node.title}</div>
                <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: node.descriptionHtml || 'No description available'}}></p>
                <p className="text-gray-900 font-bold">{`${node.priceRange.minVariantPrice.amount} ${node.priceRange.minVariantPrice.currencyCode}`}</p>
                </div>
            </a>
        </div>        
        ))}
      </div>
    );
  };
  

export default ProductsGrid;
