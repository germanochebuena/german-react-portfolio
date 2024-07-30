import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';

const ProductsGrid = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS, {
      notifyOnNetworkStatusChange: true,
    });
    const [isHovered, setIsHovered] = useState(false);

    const changeBodyColor = (color, hoverState) => {
      document.body.style.backgroundColor = color;
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
      return <p className="text-red-500">Error: {error.message}. Check the console for more details.</p>;
    }
  
    if (!data || !data.products || !data.products.edges.length) {
      return <p className="text-gray-500 text-center">No data found.</p>;
    }
  
    return (
      <div>
        <h1 className="py-8 px-4 mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">A Headless Collection Page Done With <span>React</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pb-20">
          {data.products.edges.map(({ node }) => (
            <div key={node.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-500 ease-in-out transform hover:scale-105"
            onMouseEnter={() => changeBodyColor(node.metafield?.value || '#f9fafb', true)}
            onMouseLeave={() => changeBodyColor('#f9fafb', false)}>
              <a href={`https://${import.meta.env.VITE_SHOPIFY_STORE_DOMAIN}/products/${node.handle}`} className="block p-4 flex flex-col justify-center">
                  <img src={node.images.edges[0]?.node.originalSrc || '/picture.png'} 
                      alt={node.title} 
                      className={`${!node.images.edges.length ? 'placeholder' : ''} w-full h-auto object-cover`}
                  />
                  <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{node.title}</div>
                  <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: node.descriptionHtml || 'No description available'}}></p>
                  <p className="text-xl mt-3 text-gray-500 font-bold">{`${node.priceRange.minVariantPrice.amount} ${node.priceRange.minVariantPrice.currencyCode}`}</p>
                  </div>
              </a>
          </div>        
          ))}
        </div>
      </div>
    );
  };
  

export default ProductsGrid;
