import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import SectionTitle from "./SectionTitle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setStatus("sending");

    setTimeout(() => {
      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  }
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Contact"
          title="Contact Us"
          description="Have a project in mind? Send us a message and we will get back to you."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="shrink-0 text-amber-500" size={28} />

              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>

                <p className="mt-1 text-gray-600">
                  New York, NY, United States
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="shrink-0 text-amber-500" size={28} />

              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>

                <p className="mt-1 text-gray-600">info@kasuka.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="shrink-0 text-amber-500" size={28} />

              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">+1 234 567 890</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 lg:col-span-2"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500"
            />

            <textarea
              name="message"
              rows="7"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500"
            />

            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-md bg-amber-400 px-7 py-3 font-semibold text-gray-900 transition duration-300 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="mt-4 font-medium text-green-600">
                  Your message has been sent successfully!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
