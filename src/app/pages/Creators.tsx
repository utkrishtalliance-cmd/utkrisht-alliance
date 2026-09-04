import { motion } from "motion/react";
import { Camera, Sparkles, Calendar, Users, Send } from "lucide-react";
import { useRef, useState } from "react";
import { WEB3FORMS_ACCESS_KEY, CONTACT_EMAIL } from "../config";
import { HCaptchaBox, type HCaptchaHandle } from "../components/HCaptchaBox";

type CreatorForm = {
  name: string;
  email: string;
  phone: string;
  platform: string;
  handle: string;
  audience: string;
  niche: string;
  location: string;
  portfolio: string;
  message: string;
};

const EMPTY: CreatorForm = {
  name: "",
  email: "",
  phone: "",
  platform: "",
  handle: "",
  audience: "",
  niche: "",
  location: "",
  portfolio: "",
  message: "",
};

// Pre-fill the visitor's email app if delivery isn't available — a creator
// application should never be silently lost.
function buildMailtoHref(d: CreatorForm) {
  const subject = `Creator application${d.name ? ` — ${d.name}` : ""}`;
  const body = [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone}`,
    `Primary platform: ${d.platform}`,
    `Handle: ${d.handle}`,
    `Audience size: ${d.audience}`,
    `Content niche: ${d.niche}`,
    `City / region: ${d.location}`,
    `Portfolio / media kit: ${d.portfolio}`,
    "",
    "About:",
    d.message,
  ].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

const benefits = [
  {
    icon: Camera,
    title: "Paid Assignments",
    description:
      "Get matched with paid campaigns, shoots, and event coverage for premium brands.",
  },
  {
    icon: Sparkles,
    title: "Luxury Brands",
    description:
      "Collaborate with names across fashion, real estate, spirits, and lifestyle.",
  },
  {
    icon: Calendar,
    title: "Event Access",
    description:
      "Attend and create at invite-only events others can't get into.",
  },
  {
    icon: Users,
    title: "Real Partnership",
    description:
      "Join a roster we build with — ongoing collaborations, not one-off gigs.",
  },
];

export function Creators() {
  const [formData, setFormData] = useState<CreatorForm>(EMPTY);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "fallback"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaUnavailable, setCaptchaUnavailable] = useState(false);
  const captchaRef = useRef<HCaptchaHandle>(null);

  const resetCaptcha = () => {
    setCaptchaToken("");
    captchaRef.current?.reset();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaUnavailable && !captchaToken) {
      setStatus("error");
      setErrorMsg("Please complete the verification below before applying.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const keyConfigured = WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE";

    if (keyConfigured) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `CREATOR — ${formData.name} — Utkrisht Alliance`,
            from_name: "Utkrisht Alliance Creators",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            platform: formData.platform,
            handle: formData.handle,
            audience: formData.audience,
            niche: formData.niche,
            location: formData.location,
            portfolio: formData.portfolio,
            message: formData.message,
            "h-captcha-response": captchaToken,
          }),
        });
        const data = await response.json();
        if (data.success) {
          setStatus("success");
          setFormData(EMPTY);
          resetCaptcha();
          return;
        }
        // Backend reachable but rejected — fall through to the email fallback.
      } catch {
        // Network error — fall through to the email fallback.
      }
    }

    window.location.href = buildMailtoHref(formData);
    setStatus("fallback");
    resetCaptcha();
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="mx-auto mb-6 block h-px w-14 bg-[#c7a468]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c7a468]">
              Creators &amp; Influencers
            </span>
            <h1 className="text-5xl md:text-7xl mt-4 mb-8">Create With Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're building a roster of content creators and influencers for our
              brand campaigns and events. Sign up to be considered for paid
              assignments as our founding season gets underway.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((b, index) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-zinc-700 rounded-full">
                  <b.icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl mb-3">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-6 block h-px w-14 bg-[#c7a468]" />
              <h2 className="text-3xl md:text-4xl mb-4">Join the Roster</h2>
              <p className="text-gray-400 mb-8">
                Tell us about you and your audience. If there's a fit, we'll reach
                out with assignments as they come up.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      Email *
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="platform" className="block text-sm uppercase tracking-wider mb-2">
                      Primary Platform *
                    </label>
                    <select
                      id="platform"
                      name="platform"
                      value={formData.platform}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-700 focus:border-white outline-none transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="instagram">Instagram</option>
                      <option value="tiktok">TikTok</option>
                      <option value="youtube">YouTube</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="x">X (Twitter)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="handle" className="block text-sm uppercase tracking-wider mb-2">
                      Handle / @username *
                    </label>
                    <input
                      type="text"
                      id="handle"
                      name="handle"
                      value={formData.handle}
                      onChange={handleChange}
                      required
                      placeholder="@yourname"
                      className="w-full px-4 py-3 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="audience" className="block text-sm uppercase tracking-wider mb-2">
                      Audience Size *
                    </label>
                    <select
                      id="audience"
                      name="audience"
                      value={formData.audience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-700 focus:border-white outline-none transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="under-10k">Under 10K</option>
                      <option value="10k-50k">10K – 50K</option>
                      <option value="50k-250k">50K – 250K</option>
                      <option value="250k-1m">250K – 1M</option>
                      <option value="1m-plus">1M+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="niche" className="block text-sm uppercase tracking-wider mb-2">
                      Content Niche *
                    </label>
                    <select
                      id="niche"
                      name="niche"
                      value={formData.niche}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-700 focus:border-white outline-none transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="fashion-style">Fashion & Style</option>
                      <option value="luxury-lifestyle">Luxury & Lifestyle</option>
                      <option value="food-dining">Food & Dining</option>
                      <option value="travel">Travel</option>
                      <option value="real-estate-design">Real Estate & Design</option>
                      <option value="beauty">Beauty</option>
                      <option value="business-finance">Business & Finance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm uppercase tracking-wider mb-2">
                      City / Region
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="portfolio" className="block text-sm uppercase tracking-wider mb-2">
                      Portfolio / Media Kit
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="https://"
                      className="w-full px-4 py-3 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
                    About You
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your style, past collaborations, and what you'd love to work on."
                    className="w-full px-4 py-3 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors resize-none"
                  />
                </div>

                <HCaptchaBox
                  ref={captchaRef}
                  onVerify={setCaptchaToken}
                  onExpire={() => setCaptchaToken("")}
                  onUnavailable={() => setCaptchaUnavailable(true)}
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting..." : "Apply to Join"}
                  <Send size={16} />
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-sm text-center">
                    Thank you — your application is in. If there's a fit, we'll be
                    in touch with assignments.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">{errorMsg}</p>
                )}
                {status === "fallback" && (
                  <p className="text-gray-300 text-sm text-center">
                    Opening your email app with your application ready to send. If
                    it doesn't open, email us at{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="underline hover:text-white"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
