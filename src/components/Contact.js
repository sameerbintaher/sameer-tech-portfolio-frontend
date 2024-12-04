import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'your-formspree-endpoint' with your actual Formspree form ID
    fetch("https://formspree.io/f/your-formspree-endpoint", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Error sending message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message.");
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            I’d love to hear from you! Whether you have a question, want to
            discuss a project, or just want to say hello, feel free to get in
            touch.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                📧 sameerbintaher@gmail.com
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                📍 Tiangong University, No. 399 BinShuiXi Road, XiQing District,
                Tianjin 300387, P.R. of China
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Social Media
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  🌐 GitHub:{" "}
                  <a
                    href="https://github.com/sameerbintaher"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    github.com/sameerbintaher
                  </a>
                </li>
                <li>
                  🌐 LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/in/sameerbintaher"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    linkedin.com/in/sameerbintaher
                  </a>
                </li>
                <li>
                  🌐 Facebook:{" "}
                  <a
                    href="https://facebook.com/sameerbintaher"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    facebook.com/sameerbintaher
                  </a>
                </li>
                <li>
                  🌐 Twitter:{" "}
                  <a
                    href="https://twitter.com/sameerbintaher"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    twitter.com/sameerbintaher
                  </a>
                </li>
                <li>
                  🌐 Instagram:{" "}
                  <a
                    href="https://instagram.com/sameerbintaher"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    instagram.com/sameerbintaher
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Message Me
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Message"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
