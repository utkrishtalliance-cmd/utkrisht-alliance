import { motion } from "motion/react";
import {
  Sparkles,
  Shirt,
  Droplet,
  Palette,
  Building2,
  Wine,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Detailed overview of the Signature Experiences — one editorial row per vertical,
// each linking through to its full segment page. Order matches the home-page grid.
export function SignatureExperiences() {
  const experiences = [
    {
      icon: Sparkles,
      title: "Brand Showcases",
      description:
        "Immersive brand showcases and activations, staged as an experience a discerning audience chooses to walk into — and remembers afterward.",
      features: [
        "Immersive activations and set design",
        "Brand storytelling, told with restraint",
        "Private reveals and previews",
        "Hosted experiences and hospitality",
      ],
      image: "/images/photo-1769509456084-dacd3cde0e20.jpg",
      to: "/brand-showcases",
    },
    {
      icon: Shirt,
      title: "Fashion Shows",
      description:
        "Curated runway showcases for couture houses, emerging designers, and the jewellery and lifestyle labels that dress a discerning audience.",
      features: [
        "A single-house, uncrowded runway segment",
        "Editorial and social coverage of your collection",
        "Consent-based introductions to buyers and press",
      ],
      image: "/images/photo-1768913640595-104e0170dfee.jpg",
      to: "/fashion-shows",
    },
    {
      icon: Droplet,
      title: "Beauty & Grooming",
      description:
        "Curated showcases for beauty, grooming, fragrance and wellness houses — met in the hand, demonstrated, and remembered.",
      features: [
        "Skincare, cosmetics and complexion",
        "Men's grooming and barbering",
        "Fragrance and perfumery",
        "Wellness and Ayurvedic beauty",
      ],
      image: "/images/beauty-grooming.jpg",
      to: "/beauty-grooming",
    },
    {
      icon: Palette,
      title: "Arts & Architecture",
      description:
        "A curated stage for fine art, design and luxury living — placed before collectors and the design-led homes that acquire it.",
      features: [
        "Painters, fine artists and galleries",
        "Interior, product and architectural design",
        "Luxury-home and design-led brands",
      ],
      image: "/images/arts-architecture.jpg",
      to: "/arts-architecture",
    },
    {
      icon: Building2,
      title: "Luxury Real Estate",
      description:
        "Curated property expositions presenting exceptional residences to qualified HNI and NRI buyers — education-first, never a hard sell.",
      features: [
        "Developers across Canada, India and Dubai",
        "Education-first showings and private viewings",
        "Qualified, consent-based introductions",
      ],
      image: "/images/photo-1660486615549-d50a6564e865.jpg",
      to: "/luxury-real-estate",
    },
    {
      icon: Wine,
      title: "Whisky & Spirits Salons",
      description:
        "Intimate curated salons of rare single malts and small-batch spirits — a story told at the right pace, for collectors and connoisseurs.",
      features: [
        "Rare, aged and small-batch expressions",
        "Guided, seated tastings",
        "Distillery and brand storytelling",
      ],
      image: "/images/whisky-salon.jpg",
      to: "/whisky-spirits",
    },
    {
      icon: Users,
      title: "Invite-Only Networking",
      description:
        "Private, invitation-only evenings for a vetted circle of HNI and NRI guests — discreet, considered, and built around who is in the room.",
      features: [
        "A guest list by registration and review",
        "Discreet brand presence and hosting",
        "Consent-based introductions, both sides opted in",
      ],
      image: "/images/networking-events.jpg",
      to: "/networking-events",
    },
  ];

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
            <h1 className="text-5xl md:text-7xl mb-8">Signature Experiences</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The event properties we curate and own — each built around a
              distinct audience, and each an invitation to be featured in our
              founding season.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border border-zinc-700 rounded-full">
                    <exp.icon size={36} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-4">{exp.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{exp.description}</p>
                  <ul className="space-y-3 mb-8">
                    {exp.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-400">
                        <span className="text-[#c7a468] mt-1">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={exp.to}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-wider border-b border-zinc-600 pb-1 hover:text-gray-300 transition-colors"
                  >
                    Explore {exp.title}
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Link to={exp.to} className="block group">
                    <div className="relative aspect-[4/3] overflow-hidden border border-zinc-800">
                      <ImageWithFallback
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Be part of the founding season
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Founding-season places across our experiences are limited and
              offered by review. Tell us where your brand belongs, and we will be
              in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/partner"
                className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
              >
                Partner With Us
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="px-12 py-5 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
