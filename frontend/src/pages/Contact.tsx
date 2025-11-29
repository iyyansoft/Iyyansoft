import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler (Will connect to backend later)
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response =await fetch(`${import.meta.env.VITE_API_URL}/send-email`,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert("Email sending failed!");
    }
  } catch (error) {
    alert("Something went wrong!");
  }

  setFormState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: ""
  });
};


  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We’d love to discuss your lab setup, prototype, or software project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Information */}
            <div className="lg:w-1/3 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-black">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us via email, phone, or visit our office. We're
                  here to assist you.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600">iyyansoft@gmail.com</p>
                    <p className="text-gray-500 text-sm mt-1">
                      We reply within 24 hours.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">+91-XXXXXXXXXX</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Mon–Fri, 9am – 6pm IST
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      Plot 30/2, 2nd St, Ramapuram, Adambakkam, Chennai
                    </p>
                    <p className="text-gray-600">Tamil Nadu – India</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
                    FB
                  </div>
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
                    TW
                  </div>
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
                    LN
                  </div>
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
                    IG
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl flex items-center gap-4">
                    <CheckCircle size={32} />
                    <div>
                      <h3 className="font-bold text-lg">
                        Message Sent Successfully!
                      </h3>
                      <p>Thank you for contacting us. We’ll get back soon.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300"
                          placeholder=""
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300"
                          placeholder=""
                        />
                      </div>
                    </div>

                    {/* Phone + Organization */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300"
                          placeholder=""
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">
                          Organization
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formState.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300"
                          placeholder=""
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="Makers Lab Setup">Makers Lab Setup</option>
                        <option value="Prototype Development">
                          Prototype Development
                        </option>
                        <option value="IT Services">
                          IT Services & Software
                        </option>
                        <option value="Consulting">Consulting</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none"
                        placeholder="Please describe your requirements..."
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-black transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      Submit Request <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
