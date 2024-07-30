import React, { useEffect } from 'react';
import ProductsGrid from './components/ProductsGrid';
import './index.css';
import Header from './components/Header'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function App() {
  useEffect(() => {
    gsap.to("header", {
      backgroundColor: "#79b259",
      duration: 1.5,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
      }
    });

    gsap.to("nav > a", {
      color: "#ffffff",
      duration: 1.5,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductsGrid />
    </div>
  );
}

export default App;
