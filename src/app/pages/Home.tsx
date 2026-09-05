import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Globe, Users, TrendingUp, Briefcase } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Toggle for the hero's "Explore Our Work" button. Kept OFF until we have real
// work to showcase as a new business. Flip to `true` to restore the original
// two-button hero (Explore Our Work primary + Partner With Us secondary).
const SHOW_EXPLORE_WORK = false;

export function Home() {
  const services = [
    "Strategy",
    "Experiential Events",
    "Exhibitions",
    "Media",
    "Luxury Consulting",
  ];

  const experiences: {
    title: string;
    description: string;
    image: string;
    to?: string;
  }[] = [
    {
      title: "Brand Showcases",
      description: "Immersive experiences that elevate brands",
      image: "/images/photo-1769509456084-dacd3cde0e20.jpg",
      to: "/brand-showcases",
    },
    {
      title: "Fashion Shows",
      description: "Curated runway experiences for luxury brands",
      image: "/images/photo-1768913640595-104e0170dfee.jpg",
      to: "/fashion-shows",
    },
    {
      title: "Arts & Architecture",
      description: "Curated showcases spanning fine art, design, and luxury living spaces",
      image: "/images/arts-architecture.jpg",
      to: "/arts-architecture",
    },
    {
      title: "Luxury Real Estate Exhibitions",
      description: "Premium property showcases for investors",
      image: "/images/photo-1660486615549-d50a6564e865.jpg",
      to: "/luxury-real-estate",
    },
    {
      title: "Whisky & Spirits Salons",
      description: "Curated tastings of rare single malts and small-batch spirits",
      image: "/images/whisky-salon.jpg",
      to: "/whisky-spirits",
    },
    {
      title: "Invite-Only Networking Events",
      description: "Exclusive connections for high-value audiences",
      image: "/images/networking-events.jpg",
      to: "/networking-events",
    },
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Canada-based with international market presence",
    },
    {
      icon: Users,
      title: "HNI/UHNI Access",
      description: "Direct connection to high-value audiences",
    },
    {
      icon: TrendingUp,
      title: "Industry Crossovers",
      description: "Fashion, real estate, and luxury convergence",
    },
    {
      icon: Briefcase,
      title: "End-to-End Execution",
      description: "Comprehensive event and media solutions",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex justify-center [align-items:safe_center] overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/photo-1773745060497-4cc1df774c72.jpg"
            alt="Luxury venue"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-6 z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-4 mb-8"
          >
            <span className="h-px w-14 bg-[#c7a468]" />
            <span className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#c7a468]">
              Founding Season · 2026–27
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          >
            Curating Elite
            <br />
            Global Experiences
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            A media &amp; events house connecting luxury brands with the audiences
            that matter most — where excellence meets{" "}
            <span className="text-[#e6d0a1]">jalsa</span>, and every moment is
            built to leave an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {SHOW_EXPLORE_WORK ? (
              <>
                <Link
                  to="/media"
                  className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
                >
                  Explore Our Work
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/partner"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center"
                >
                  Partner With Us
                </Link>
              </>
            ) : (
              <Link
                to="/partner"
                className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
              >
                Partner With Us
                <ArrowRight size={16} />
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-8 border-y border-zinc-800 overflow-hidden">
        <div className="flex gap-8 animate-scroll">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="text-gray-400 uppercase tracking-wider text-sm whitespace-nowrap"
            >
              {service} •
            </div>
          ))}
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="mx-auto mb-6 block h-px w-14 bg-[#c7a468]" />
            <h2 className="text-4xl md:text-6xl mb-4">Signature Experiences</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Creating unforgettable moments that connect brands with their ideal audiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <ImageWithFallback
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                {exp.to && (
                  <Link
                    to={exp.to}
                    aria-label={`${exp.title} — learn more`}
                    className="absolute inset-0 z-10"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl mb-2">{exp.title}</h3>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                  {exp.to && (
                    <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#c7a468]">
                      Explore
                      <ArrowRight size={12} />
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="mx-auto mb-6 block h-px w-14 bg-[#c7a468]" />
            <h2 className="text-4xl md:text-6xl mb-4">Who We Partner With</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We work with brands and institutions whose audiences are discerning,
              high-value, and hard to reach through advertising alone.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Luxury Brands",
              "Fashion Houses",
              "Artists & Galleries",
              "Design & Architecture",
              "Real Estate & Developers",
              "Spirits & Distilleries",
              "Private Members' Clubs",
              "Hospitality",
              "HNI / UHNI Audiences",
            ].map((v) => (
              <span
                key={v}
                className="px-5 py-2 border border-zinc-700 rounded-full text-sm text-gray-300 uppercase tracking-wider"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Utkrisht Alliance */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="mx-auto mb-6 block h-px w-14 bg-[#c7a468]" />
            <h2 className="text-4xl md:text-6xl mb-4">Why Utkrisht Alliance</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-zinc-700 rounded-full">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="mx-auto mb-6 block h-px w-14 bg-[#c7a468]" />
            <h2 className="text-4xl md:text-6xl mb-4">How We Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A disciplined path from first conversation to measurable impact.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { n: "01", t: "Discovery", d: "We learn your brand, your goals, and the audience you want in the room." },
              { n: "02", t: "Strategy", d: "We design the concept, format, and guest experience around that intent." },
              { n: "03", t: "Execution", d: "We produce every detail end to end — media, moments, and logistics." },
              { n: "04", t: "Impact", d: "We measure what mattered and turn it into lasting relationships." },
            ].map((s, index) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-[#c7a468] text-sm tracking-[0.3em] mb-3">{s.n}</div>
                <h3 className="text-xl mb-2">{s.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Season — closing invitation */}
      <section className="py-28 bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="mx-auto mb-6 block h-px w-14 bg-[#c7a468]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c7a468]">
              Founding Season · 2026–27
            </span>
            <h2 className="text-4xl md:text-6xl mt-4 mb-6">Get in at the founding</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We're a new house, and we're building deliberately. Our founding
              season is a limited first chapter — a small series of curated events
              and a select circle of founding partners.
            </p>
            <p className="text-gray-400 leading-relaxed mb-12">
              It's the ground floor, and the best seat we'll ever offer. If you want
              your brand in these rooms from the very first, this is the moment.
            </p>
            <Link
              to="/partner"
              className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Become a Founding Partner
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
