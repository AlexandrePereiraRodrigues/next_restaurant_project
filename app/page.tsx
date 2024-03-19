'use client';
import React from 'react';
import Hero from './components/hero';
import RestaurantsList from './data/restaurants_list';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero section */}
      <div className="bg-gray-900">
        <Hero />
      </div>

      {/* Title */}
      <div className="bg-gray-50 py-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Take a look at our restaurants</h2>
      </div>

      {/* Restaurant cards section */}
      <div id="restaurant-cards-section" className="container mx-auto mt-8 mb-8 custom-scroll">
        <RestaurantsList />
      </div>

      <Footer />

      <style jsx global>{`
        /* Override overflow style for body */
        body {
          overflow: auto !important;
        }
      `}</style>
    </main>
  );
}

