'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const FAQs = () => {
  const [showReply, setShowReply] = useState<boolean[]>([]);

  const toggleReply = (index: number) => {
    const newShowReply = [...showReply];
    newShowReply[index] = !newShowReply[index];
    setShowReply(newShowReply);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-24">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[...Array(5)].map((_, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }} // Adjust the duration here (in seconds)
                className="p-4 bg-white shadow-md rounded-md cursor-pointer transition-transform duration-300"
                onClick={() => toggleReply(index)}
              >
                <h2 className="text-xl font-semibold mb-2">Question {index + 1}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dolor in lorem lacinia tristique.</p>
                {showReply[index] && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 3 }} 
                    className="mt-2 bg-gray-100 p-2 rounded-md"
                  >
                    Reply: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
