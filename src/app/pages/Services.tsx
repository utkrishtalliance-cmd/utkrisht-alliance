import { motion } from "motion/react";
import {
  TrendingUp,
  Sparkles,
  Building2,
  Camera,
  Users,
  ArrowRight,
  Globe2,
  Share2,
  Award,
  Megaphone,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Brand Strategy & Consulting",
      description:
        "Strategic guidance to position your brand in the luxury market",
      features: [
        "Market entry strategy for new regions",
        "Brand positioning & differentiation",
        "Luxury audience targeting & insights",
        "Competitive analysis & benchmarking",
      ],
      image: "/images/photo-1758633854736-8973bcd84dd1.jpg",
    },
    {
      icon: Sparkles,
      title: "Experiential Events",
      description: "Unforgettable experiences that captivate and engage",
      features: [
        "High-fashion runway shows",
        "Luxury lifestyle activations",
        "Private VIP networking events",
        "Product launch experiences",
      ],
      image: "/images/photo-1579254216656-3c0c16a3bdd6.jpg",
    },
    {
      icon: Building2,
      title: "Exhibitions & Trade Platforms",
      description: "Professional showcases that drive business results",
      features: [
        "Luxury real estate expositions",
        "Investment & opportunity showcases",
        "Industry-specific trade shows",
        "B2B matchmaking platforms",
      ],
      image: "/images/photo-1762028892701-692dc360db08.jpg",
    },
    {
      icon: Camera,
      title: "Media & Production",
      description: "Premium content that elevates your brand story",
      features: [
        "Commercial ad films & campaigns",
        "High-end brand photography",
        "Event coverage & aftermovies",
        "Digital content creation",
      ],
      image: "/images/photo-1634812930988-141ddf8ecab3.jpg",
    },
    {
      icon: Users,
      title: "PR & Partnerships",
      description: "Strategic relationships that amplify your reach",
      features: [
        "Influencer collaborations & management",
        "Sponsorship strategy & activation",
        "Strategic brand alliances",
        "Media relations & press coverage",
      ],
      image: "/images/photo-1696861270495-7f35c35c3273.jpg",
    },
    {
      icon: Globe2,
      title: "Website Development",
      description: "Cutting-edge digital experiences for luxury brands",
      features: [
        "Custom luxury website design",
        "E-commerce & booking platforms",
        "Mobile-responsive development",
        "Performance optimization",
        "Search, answer & generative engine optimization (SEO, AEO, GEO)",
      ],
      image: "/images/photo-1642602519174-0318c786f6d8.jpg",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engaging digital campaigns that drive brand awareness",
      features: [
        "Content strategy & creation",
        "Paid advertising campaigns",
        "Community management & engagement",
        "Analytics & performance tracking",
      ],
      image: "/images/photo-1769596722541-40dedee6789d.jpg",
    },
    {
      icon: Award,
      title: "Global Brand Licensing / Franchising",
      description: "Expand your brand's reach through strategic licensing and franchising",
      features: [
        "International licensing agreements",
        "Franchise development & expansion",
        "Brand compliance & quality control",
        "Territory rights & partnership structuring",
      ],
      image: "/images/photo-1723853310542-a9d2d84f5fa2.jpg",
    },
    {
      icon: Megaphone,
      title: "Advertisement",
      description: "360° advertising solutions across every channel and format",
      features: [
        "Digital & programmatic advertising",
        "Out-of-home & billboard campaigns",
        "Print, broadcast & radio media",
        "Influencer & sponsored content",
        "Event & experiential advertising",
        "Search, display & video ads",
      ],
      image: "/images/photo-1760180139823-527522243bae.jpg",
    },
  ];

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
            <h1 className="text-5xl md:text-7xl mb-8">Our Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive solutions designed to elevate your brand and create
              meaningful connections with high-value audiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border border-zinc-700 rounded-full">
                    <service.icon size={36} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-4">{service.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-400">
                        <span className="text-white mt-1">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden border border-zinc-800">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Segment spotlight — links to the Arts & Architecture vertical page */}
      <section className="pb-4">
        <div className="container mx-auto px-6">
          <Link
            to="/arts-architecture"
            className="group block max-w-4xl mx-auto border border-zinc-800 hover:border-[#c7a468] transition-colors p-8 md:flex md:items-center md:justify-between gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#c7a468] mb-2">
                For painters, designers &amp; luxury-home brands
              </p>
              <h3 className="text-2xl mb-2">Arts &amp; Architecture Showcase</h3>
              <p className="text-gray-400 text-sm">
                A curated stage for fine art, design, and luxury living — featured
                before collectors and luxury-home buyers.
              </p>
            </div>
            <span className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm uppercase tracking-wider whitespace-nowrap text-gray-300 group-hover:text-white transition-colors">
              Explore
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your vision and objectives",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Developing a customized approach",
              },
              {
                step: "03",
                title: "Execution",
                description: "Flawless delivery with attention to detail",
              },
              {
                step: "04",
                title: "Analysis",
                description: "Measuring impact and optimizing results",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4 text-zinc-700">{item.step}</div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals
            </p>
            <Link
              to="/contact"
              className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}