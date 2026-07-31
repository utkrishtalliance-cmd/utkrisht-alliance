import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

// Web3Forms access key — routes submissions to utkrishtalliance@gmail.com.
// Get a free key at https://web3forms.com (enter that inbox address, verify by email).
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Guard: until the Web3Forms access key is configured, behave inertly
    // (no broken network call, no error shown). Remove once the key is set.
    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      console.warn("Contact form: Web3Forms access key not configured yet.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${formData.name} — Utkrisht Alliance`,
          from_name: "Utkrisht Alliance Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          interest: formData.interest,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          interest: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error. Please check your connection and try again."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl mb-8">Get In Touch</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Let's discuss how Utkrisht Alliance can help bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm uppercase tracking-wider mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm uppercase tracking-wider mb-2">
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-700 focus:border-white outline-none transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="event-partnership">Event Partnership</option>
                    <option value="sponsorship">Sponsorship Opportunities</option>
                    <option value="exhibition">Exhibition Booth</option>
                    <option value="media-services">Media & Production Services</option>
                    <option value="brand-consulting">Brand Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors resize-none"
                  />
                </div>

                {/* Honeypot spam trap — bots fill this, humans never see it */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-sm text-center">
                    Thank you — your message has been sent. We'll respond within
                    24 business hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">{errorMsg}</p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">Headquarters</h3>
                      <p className="text-gray-400">
                        Toronto, Ontario<br />
                        Canada
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        Operating globally across North America, Europe, and Asia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">Registered Office</h3>
                      <p className="text-gray-400">
                        717 Mohawk Road<br />
                        Ancaster, ON L9G 2X1<br />
                        Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">Email</h3>
                      <a
                        href="mailto:info@utkrishtalliance.com"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        info@utkrishtalliance.com
                      </a>
                      <br />
                      <a
                        href="mailto:partnerships@utkrishtalliance.com"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        partnerships@utkrishtalliance.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">Phone</h3>
                      <a
                        href="tel:+16399160639"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        +1 (639) 916-0639
                      </a>
                      <p className="text-gray-500 text-sm mt-2">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="border border-zinc-800 p-8">
                <h3 className="text-xl mb-6">Office Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-zinc-900 p-8">
                <h3 className="text-xl mb-4">Quick Response Guarantee</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We understand the importance of timely communication. Our team
                  commits to responding to all inquiries within 24 business hours.
                  For urgent matters, please indicate so in your message.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-zinc-700" />
              <p className="text-gray-500">Interactive map coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
