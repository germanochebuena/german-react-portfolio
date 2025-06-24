import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '/shopify.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <span className="sr-only">Your Portfolio</span>
                            <img className="h-8 w-auto sm:h-10" src={logoImage} alt="Portfolio Logo" />
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <Link 
                            to="/" 
                            className={`text-base font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/product-list" 
                            className={`text-base font-medium ${isActive('/product-list') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Shopify Headless PLP
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img className="h-8 w-auto" src={logoImage} alt="Portfolio" />
                            </div>
                            <div className="-mr-2">
                                <button
                                    type="button"
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                                <Link 
                                    to="/" 
                                    className={`text-base font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-900 hover:text-gray-700'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link 
                                    to="/product-list" 
                                    className={`text-base font-medium ${isActive('/product-list') ? 'text-blue-600' : 'text-gray-900 hover:text-gray-700'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Shopify Headless PLP
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
