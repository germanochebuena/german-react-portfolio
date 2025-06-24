import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProjectPage from './pages/ProjectPage';
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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
