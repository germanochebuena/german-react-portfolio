import React from 'react';
import ProductsGrid from './components/ProductsGrid';
import './index.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsGrid />
    </div>
  );
}

export default App;
