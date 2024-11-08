// src/pages/Products.js
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Fuller Cleanze Bath Salts',
    price: '$12.00 USD',
    description:
      'Used for healing, purifying body, mind, and spirit, for a total reset.',
    image: `${process.env.PUBLIC_URL}/img/Fuller Cleanze Bath Salts.jpg`,
  },
  {
    id: 2,
    name: 'Fuller Cleanze Detox Tea',
    price: '$49.99 USD',
    description:
      'Used for detoxification of liver, cleansing of your body, relief of tension, stress, and anxiety.',
    image: `${process.env.PUBLIC_URL}/img/Fuller Cleanze Detox Tea.jpg`,
  },
  {
    id: 3,
    name: 'Fuller Cleanze Essential Oil',
    price: '$12.00 USD',
    description:
      'Used for healing, purifying atmosphere to boost mood, can be inhaled for asthma and upper respiratory infection.',
    image: `${process.env.PUBLIC_URL}/img/Fuller Cleanze Essential Oil.jpg`,
  },
];

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Top Section with Background Color */}
      <section className="bg-gradient-to-r from-[#2A7F3C] via-[#B3864A] to-[#6B4E9A] text-white text-center py-12 px-6 rounded-lg mb-10">
        <h1 className="text-4xl font-bold">Explore Our Products</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          Discover the unique benefits of Fuller Cleanze products, crafted to support your journey to wellness with natural, organic ingredients.
        </p>
      </section>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-medium text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4 text-justify">{product.description}</p>
            <p className="text-xl font-bold text-green-700 mb-6">{product.price}</p>
            <button className="bg-green-600 text-white w-full py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
