import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';

const ProductsGrid = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS, {
      notifyOnNetworkStatusChange: true,
    });
    const [isHovered, setIsHovered] = useState(false);

    // Debug logging
    console.log('GraphQL Query State:', { loading, error, data });
    console.log('Environment Variables:', {
      domain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
      hasToken: !!import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN
    });

    document.body.style.transition = 'background 0.3s ease';

    const changeBodyColor = (color, hoverState) => {
      // Convert hex to rgba for transparency
      const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      };
      
      const transparentColor = hexToRgba(color, 0.6);
      document.body.style.background = `linear-gradient(180deg, ${color} 0%, ${transparentColor} 100%)`;
      setIsHovered(hoverState);
      if(hoverState){
        document.querySelector('h1').style.color = '#ffffff';
        document.querySelector('h1 span').style.color = '#111827';
      } else {
        document.querySelector('h1').style.color = '#111827';
        document.querySelector('h1 span').style.color = '#01d8ff';
      }
    };
  
    if (loading && !data) return <p className="text-center">Loading...</p>;
    if (error) {
      console.error('GraphQL Error:', error);
      console.error('Error Details:', {
        message: error.message,
        networkError: error.networkError,
        graphQLErrors: error.graphQLErrors
      });
      return (
        <div className="text-red-500 p-4">
          <p>Error: {error.message}</p>
          <p className="text-sm mt-2">Check the console for more details.</p>
          {error.networkError && (
            <p className="text-sm mt-1">Network Error: {error.networkError.message}</p>
          )}
        </div>
      );
    }
  
    if (!data || !data.products || !data.products.edges.length) {
      console.log('No data found. Data structure:', data);
      return (
        <div className="text-gray-500 text-center p-4">
          <p>No data found.</p>
          <p className="text-sm mt-2">Data structure: {JSON.stringify(data, null, 2)}</p>
        </div>
      );
    }
  
    return (
      <div>
        <h1 className="py-8 px-4 mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">A Headless Collection Page Done With <span>React</span></h1>
        <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700 bg-white/80 rounded-xl shadow-sm px-6 py-4 border border-blue-100">
          <span className="font-semibold text-blue-600">Technical Overview:</span> This page demonstrates a <span className="font-bold">headless Shopify product collection</span> built with <span className="font-bold">React</span> and <span className="font-bold">Apollo Client</span>, fetching live product data via <span className="font-bold">GraphQL</span>. Each product card dynamically applies a hover background color based on a Shopify metafield, showcasing real-time UI theming powered by custom metafields. The layout is styled with <span className="font-bold">Tailwind CSS</span> for a modern, responsive experience.
          <br />
          <a
            href="https://github.com/germanochebuena/german-react-portfolio/blob/master/src/components/ProductsGrid.jsx"
            className="text-blue-500 hover:text-blue-700 text-sm mt-2 inline-block font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View this file on GitHub
          </a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pb-20">
          {data.products.edges.map(({ node }) => {
            // Validate metafield value is a hex color (e.g., #RRGGBB)
            const brandColor = (node.metafield?.value && /^#[0-9A-Fa-f]{6}$/.test(node.metafield.value))
              ? node.metafield.value
              : '#f9fafb';

            // Debug: log the metafield value and what will be used
            console.log('Product:', node.title, 'Metafield value:', node.metafield?.value, 'Used color:', brandColor);

            return (
              <div
                key={node.id}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-500 ease-in-out transform hover:scale-105"
                onMouseEnter={() => changeBodyColor(brandColor, true)}
                onMouseLeave={() => changeBodyColor('#f9fafb', false)}
              >
                <a href={`https://${import.meta.env.VITE_SHOPIFY_STORE_DOMAIN}/products/${node.handle}`} className="block p-4 flex flex-col justify-center">
                    <img src={node.images.edges[0]?.node.originalSrc || '/picture.png'} 
                        alt={node.title} 
                        className={`${!node.images.edges.length ? 'placeholder' : ''} w-full h-auto object-contain aspect-square object-center`}
                    />
                    <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{node.title}</div>
                    <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: node.descriptionHtml || 'No description available'}}></p>
                    <p className="text-xl mt-3 text-gray-500 font-bold">{`${node.priceRange.minVariantPrice.amount} ${node.priceRange.minVariantPrice.currencyCode}`}</p>
                    </div>
                </a>
            </div>        
            )})}
        </div>
      </div>
    );
  };
  

export default ProductsGrid;
