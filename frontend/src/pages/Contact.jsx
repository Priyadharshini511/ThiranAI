// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-12" style={{ backgroundColor: '#F8FAFC' }}>
//       <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#384959]">
//         Contact <span className="text-[#6A89A7]">Us</span>
//       </h1>

//       <div className="grid md:grid-cols-2 gap-10">
//         {/* Contact Form */}
//         <form className="bg-white shadow-md rounded-2xl p-8">
//           <div className="mb-4">
//             <label className="block text-[#384959] text-sm font-semibold mb-2">Name</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-[#384959] text-sm font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="your@email.com"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-[#384959] text-sm font-semibold mb-2">Message</label>
//             <textarea
//               rows="5"
//               placeholder="Write your message..."
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-[#6A89A7] text-white px-6 py-2 rounded-lg hover:bg-[#384959] transition"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Contact Info */}
//         <div className="flex flex-col justify-center bg-[#BDDDFC] rounded-2xl p-8 shadow-md text-[#384959]">
//           <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
//           <p className="mb-4">We’d love to hear from you! Feel free to reach out through the form or using the details below.</p>

//           <div className="mb-2">
//             <strong>Email:</strong> <a href="mailto:contact@thiranai.com" className="underline hover:text-[#6A89A7]">contact@thiranai.com</a>
//           </div>
//           <div className="mb-2">
//             <strong>Phone:</strong> <a href="tel:+911234567890" className="underline hover:text-[#6A89A7]">+91 12345 67890</a>
//           </div>
//           <div className="mb-2">
//             <strong>Address:</strong><br />
//             123, AI Park Street<br />
//             Chennai, Tamil Nadu – 600001
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// Contact.jsx



import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    const response = await fetch("http://127.0.0.1:8000/contact", {
      method: "POST",
      body: form,
    });

    const data = await response.json();
    if (data.success) {
      setStatus("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-12" style={{ backgroundColor: '#F8FAFC' }}>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#384959]">
        Contact <span className="text-[#6A89A7]">Us</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <form className="bg-white shadow-md rounded-2xl p-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#384959] text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#384959] text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#384959] text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#6A89A7] text-white px-6 py-2 rounded-lg hover:bg-[#384959] transition"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-[#384959]">{status}</p>}
        </form>

        <div className="flex flex-col justify-center bg-[#BDDDFC] rounded-2xl p-8 shadow-md text-[#384959]">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">We’d love to hear from you! Feel free to reach out through the form or using the details below.</p>

          <div className="mb-2">
            <strong>Email:</strong> <a href="mailto:thiranai2025@gmail.com" className="underline hover:text-[#6A89A7]">thiranai2025@gmail.com</a>
          </div>
          <div className="mb-2">
            <strong>Phone:</strong> <a href="tel:+911234567890" className="underline hover:text-[#6A89A7]">+91 12345 67890</a>
          </div>
          <div className="mb-2">
            <strong>Address:</strong><br />
            123, AI Park Street<br />
            Chennai, Tamil Nadu – 600001
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;