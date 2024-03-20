'use client';
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactForm from '../components/contact_form';

const Contact = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow mt-24">
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-4 sm:ml-2">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ContactForm />
              <div className="p-4 bg-gray-100 shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <p className="mb-6"><strong>Email:</strong> example@example.com</p>
                <p className="mb-6"><strong>Address:</strong> 123 Street Name, City, State, ZIP</p>
                <p className="mb-6"><strong>Phone:</strong> 123-456-7890</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
};

export default Contact;
