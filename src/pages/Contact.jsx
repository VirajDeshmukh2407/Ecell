import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:ecellskncoe.mail@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="flex flex-col lg:flex-row gap-10 mx-6">
        {/* Location Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <iframe
            title="Ecell SKNCOE Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30275.021425589428!2d73.81664658618092!3d18.466544100000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2954c2482cba5%3A0x6223f5d2544ac9bb!2sShrimati%20Kashibai%20Navale%20College%20of%20Engineering%20(Administration%20Building)!5e0!3m2!1sen!2sin!4v1732688725968!5m2!1sen!2sin"
            className="w-full h-96 rounded-md border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;