import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { insights } from "../data/insights";
import { WEB3FORMS_ACCESS_KEY } from "../config";
import { HCaptchaBox, type HCaptchaHandle } from "../components/HCaptchaBox";

export function Insights() {
  const featured = insights.find((a) => a.featured) ?? insights[0];
  const rest = insights.filter((a) => a !== featured);

  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // hCaptcha. If the widget can't load we let the signup through rather than
  // silently blocking subscribers behind a third-party script.
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaUnavailable, setCaptchaUnavailable] = useState(false);
  const [captchaMsg, setCaptchaMsg] = useState("");
  const captchaRef = useRef<HCaptchaHandle>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (!captchaUnavailable && !captchaToken) {
      setCaptchaMsg("Please complete the verification below.");
      return;
    }

    setCaptchaMsg("");
    setSubStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New newsletter subscriber — Utkrisht Alliance",
          from_name: "Utkrisht Alliance Website",
          email,
          message: `Newsletter signup: ${email}`,
          "h-captcha-response": captchaToken,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubStatus("success");
        setEmail("");
      } else {
        setSubStatus("error");
      }
    } catch {
      setSubStatus("error");
    } finally {
      // The token is single-use, so clear it whichever way the request went.
      setCaptchaToken("");
      captchaRef.current?.reset();
    }
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
            <h1 className="text-5xl md:text-7xl mb-8">Insights</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Industry perspectives, market analysis, and thought leadership from
              the Utkrisht Alliance team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            >
              <Link
                to={`/insights/${featured.slug}`}
                className="group relative aspect-[4/3] overflow-hidden block"
              >
                <ImageWithFallback
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 text-sm uppercase tracking-wider">
                  Featured
                </div>
              </Link>

              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                  {featured.category}
                </div>
                <h2 className="text-4xl mb-6">{featured.title}</h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {featured.excerpt}
                </p>

                <div className="flex items-center gap-6 mb-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{featured.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featured.date}</span>
                  </div>
                </div>

                <Link
                  to={`/insights/${featured.slug}`}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      {rest.length > 0 && (
        <section className="py-24 bg-zinc-950">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/insights/${article.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden mb-6">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                      {article.category}
                    </div>

                    <h3 className="text-2xl mb-4 group-hover:text-gray-300 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center border border-zinc-800 p-12"
          >
            <h2 className="text-4xl mb-6">Stay Informed</h2>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe to our newsletter for the latest insights, event updates,
              and industry news
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={subStatus === "submitting"}
                className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {subStatus === "submitting" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {!captchaUnavailable && (
              <div className="mt-6 flex justify-center">
                <HCaptchaBox
                  ref={captchaRef}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                    setCaptchaMsg("");
                  }}
                  onExpire={() => setCaptchaToken("")}
                  onUnavailable={() => setCaptchaUnavailable(true)}
                  className="min-h-[78px]"
                />
              </div>
            )}

            {captchaMsg && (
              <p className="text-red-400 text-sm mt-4">{captchaMsg}</p>
            )}

            {subStatus === "success" && (
              <p className="text-green-400 text-sm mt-6">
                Thank you — you're subscribed. Watch your inbox for updates.
              </p>
            )}
            {subStatus === "error" && (
              <p className="text-red-400 text-sm mt-6">
                Something went wrong. Please try again, or email us at
                info@utkrishtalliance.com.
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
