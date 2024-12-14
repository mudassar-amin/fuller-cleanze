// src/pages/ContactUs.js
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://your-firebase-project.cloudfunctions.net/sendMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Your message has been sent!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <div>
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">Name</label>
            <input
              className="w-full border rounded px-3 py-2"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">Email</label>
            <input
              className="w-full border rounded px-3 py-2"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#2A7F3C] via-[#B3864A] to-[#6B4E9A] text-white px-6 py-2 rounded-full font-semibold transition-transform transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Contact Details with Logo at Bottom */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-lg flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
          <p className="mb-4"><strong>Email:</strong> contact@fullercleanze.com</p>
          <p className="mb-4"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="mb-4"><strong>Website:</strong> www.fullercleanze.com</p>
          <p className="mb-4"><strong>Address:</strong> 123 Wellness St, Healthy City, HC 45678</p>
        </div>
        <div className="mt-6 flex justify-center">
          <img src="/img/Fuller Cleanze-TM.png" alt="Fuller Cleanze Logo" className="h-12 w-auto opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
