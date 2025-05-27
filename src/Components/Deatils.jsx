import React, { useState } from "react";
import Vector from '../assets/Image/Vector.png'
import phone from '../assets/Image/bxs_phone.png'
import clock from '../assets/Image/bi_clock-fill.png'


export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Message submitted!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch With Us</h2>
          <p className="mt-8 text-center text-gray-500">
            For more information about our products and services, feel free to drop us <br /> an email. We’re here to help!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-8 text-gray-700">
            <div className="flex items-start gap-4">
              <span className="text-xl"><img src={Vector} alt="" /></span>
              <div>
                <h4 className="font-semibold text-lg">Address</h4>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl"> <img src={phone} alt="" /></span>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl"><img src={clock} alt="" /></span>
              <div>
                <h4 className="font-semibold text-lg">Working Time</h4>
                <p>Mon–Fri: 9:00 - 22:00</p>
                <p>Sat–Sun: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow-700 text-white px-6 py-2 rounded-md hover:bg-yellow-800 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
