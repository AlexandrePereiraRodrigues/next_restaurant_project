import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Links */}
        <div className="mb-6">
          <Link href="/FAQs"className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-red-800 hover:text-white mr-6 inline-block min-w-max">
              FAQs
          </Link>
          <Link href="/contact"className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-red-800 hover:text-white inline-block min-w-max">
              Contact
          </Link>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center mb-6">
          <div className="mr-4">
            <Link href="#" className="text-gray-300 hover:text-blue-500 flex flex-col items-center">
                <FaFacebook size={24} />
                <span className="block text-xs mt-1">Facebook</span>
            </Link>
          </div>
          <div className="mr-4">
            <Link href="#" className="text-gray-300 hover:text-pink-500 flex flex-col items-center">
                <FaInstagram size={24} />
                <span className="block text-xs mt-1">Instagram</span>
            </Link>
          </div>
          <div>
            <Link href="#" className="text-gray-300 hover:text-blue-400 flex flex-col items-center">
                <FaTelegram size={24} />
                <span className="block text-xs mt-1">Telegram</span>
            </Link>
          </div>
        </div>

        {/* Copyright notice */}
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
