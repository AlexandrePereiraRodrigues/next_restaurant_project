'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log('Form data to be submitted:', formData); // Log the form data before submitting
      const response = await fetch('api', { // Corrected endpoint URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submission successful:', await response.json());
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="border border-gray-300 rounded-md px-4 py-2 w-full"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
