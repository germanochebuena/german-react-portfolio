import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductList = lazy(() => import('./pages/ProductList'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

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
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
