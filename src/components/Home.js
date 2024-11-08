// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const benefitsRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, options);

    // Copy ref.current values to local variables
    const hero = heroRef.current;
    const about = aboutRef.current;
    const benefits = benefitsRef.current;
    const products = productsRef.current;
    const cta = ctaRef.current;

    // Observe each section
    if (hero) observer.observe(hero);
    if (about) observer.observe(about);
    if (benefits) observer.observe(benefits);
    if (products) observer.observe(products);
    if (cta) observer.observe(cta);

    // Cleanup
    return () => {
      if (hero) observer.unobserve(hero);
      if (about) observer.unobserve(about);
      if (benefits) observer.unobserve(benefits);
      if (products) observer.unobserve(products);
      if (cta) observer.unobserve(cta);
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="bg-gradient-to-r from-[#2A7F3C] via-[#B3864A] to-[#6B4E9A] h-96 flex flex-col items-center justify-center text-white text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Fuller Cleanze
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
          Revitalize Your Mind, Body, and Soul with our organic, chemical-free products crafted for holistic wellness.
        </p>
        <Link
          to="/products"
          className="bg-white text-[#2A7F3C] hover:text-[#6B4E9A] px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Shop Now
        </Link>
      </section>

      {/* About Us Section */}
      <section
        ref={aboutRef}
        className="py-16 bg-gray-100 text-center px-4 transition-opacity duration-1000"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          At Fuller Cleanze, we believe in the power of nature. Our products are crafted with 100% organic ingredients to help you detoxify, de-stress, and embrace a healthier lifestyle.
        </p>
      </section>

      {/* Key Benefits Section */}
      <section
        ref={benefitsRef}
        className="py-16 bg-white text-center px-4 transition-opacity duration-1000"
      >
        <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-10 tracking-wide">Key Benefits</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="benefit-item p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-600">Physical Wellness</h3>
            <p className="text-gray-600">Detoxification, skin enhancement, and relaxation.</p>
          </div>
          <div className="benefit-item p-6 rounded-lg shadow-lg bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-purple-600">Mental Wellness</h3>
            <p className="text-gray-600">Reduces stress, anxiety, and enhances mood.</p>
          </div>
          <div className="benefit-item p-6 rounded-lg shadow-lg bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-green-600">Spiritual Cleansing</h3>
            <p className="text-gray-600">Promotes balance and purifies energy.</p>
          </div>
        </div>
      </section>

{/* Featured Products Section */}
<section
  ref={productsRef}
  className="py-20 bg-gray-100 text-center px-4 transition-opacity duration-1000"
>
  {/* Updated Heading */}
  <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-10 tracking-wide">
    Our Featured Products
  </h2>

  {/* Horizontal Scrollable Product Container */}
  <div className="flex space-x-6 overflow-x-auto md:overflow-visible md:justify-center px-4 py-6 scrollbar-hide">
    <div className="product-item p-6 min-w-[250px] rounded-lg shadow-lg bg-white hover:bg-blue-100 transition-all duration-300">
      <h3 className="text-lg font-semibold text-blue-600">Detox Tea</h3>
      <p className="text-gray-600 mb-4">100% Organic, aids liver detox and relaxation.</p>
      <Link to="/products" className="text-blue-600 font-semibold hover:underline">
        Explore More
      </Link>
    </div>
    <div className="product-item p-6 min-w-[250px] rounded-lg shadow-lg bg-white hover:bg-purple-100 transition-all duration-300">
      <h3 className="text-lg font-semibold text-purple-600">Essential Oil</h3>
      <p className="text-gray-600 mb-4">Relieves stress, skin irritation, and enhances mood.</p>
      <Link to="/products" className="text-purple-600 font-semibold hover:underline">
        Explore More
      </Link>
    </div>
    <div className="product-item p-6 min-w-[250px] rounded-lg shadow-lg bg-white hover:bg-green-100 transition-all duration-300">
      <h3 className="text-lg font-semibold text-green-600">Bath Salts</h3>
      <p className="text-gray-600 mb-4">For body, mind, and spirit rejuvenation.</p>
      <Link to="/products" className="text-green-600 font-semibold hover:underline">
        Explore More
      </Link>
    </div>
  </div>
</section>


 {/* Call to Action Section */}
<section
  ref={ctaRef}
  className="relative py-16 bg-gradient-to-r from-[#2A7F3C] via-[#B3864A] to-[#6B4E9A] text-white text-center transition-opacity duration-1000 overflow-hidden"
>
  {/* CTA Content */}
  <div className="relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
      Ready to Start Your Wellness Journey?
    </h2>
    <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 opacity-90">
      Discover our range of organic, chemical-free products crafted to renew your mind, body, and spirit.
    </p>
    <Link
      to="/products"
      className="bg-white text-[#2A7F3C] hover:text-[#6B4E9A] px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 animate-bounce"
    >
      Shop Now
    </Link>
  </div>
</section>

    </div>
  );
};

export default Home;
