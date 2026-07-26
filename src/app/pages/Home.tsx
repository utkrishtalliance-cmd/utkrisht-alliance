import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Globe, Users, TrendingUp, Briefcase } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const services = [
    "Strategy",
    "Experiential Events",
    "Exhibitions",
    "Media",
    "Luxury Consulting",
  ];

  const experiences = [
    {
      title: "Fashion Shows",
      description: "Curated runway experiences for luxury brands",
      image: "https://images.unsplash.com/photo-1768913640595-104e0170dfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGZhc2hpb24lMjBzaG93fGVufDF8fHx8MTc3NDA3MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Luxury Real Estate Exhibitions",
      description: "Premium property showcases for investors",
      image: "https://images.unsplash.com/photo-1660486615549-d50a6564e865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmVhbCUyMGVzdGF0ZSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzc0MDcxMTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Invite-Only Networking Events",
      description: "Exclusive connections for high-value audiences",
      image: "https://images.unsplash.com/photo-1768508948485-a7adc1f3427f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjByZWNlcHRpb258ZW58MXx8fHwxNzc0MDcxMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Brand Showcases",
      description: "Immersive experiences that elevate brands",
      image: "https://images.unsplash.com/photo-1769509456084-dacd3cde0e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMHNob3djYXNlfGVufDF8fHx8MTc3NDA3MTEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1773745060497-4cc1df774c72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHZlbnVlfGVufDF8fHx8MTc3NDA3MTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury venue"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-6 z-20 text-center">
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
            A premier media & events company connecting luxury brands with
            high-value audiences worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
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
              {service} â€¢
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
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl mb-2">{exp.title}</h3>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Utkrisht Alliance */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
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

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">
              Let's Create Something Exceptional
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Partner with us to deliver world-class experiences that resonate with your audience
            </p>
            <Link
              to="/partner"
              className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Partner With Us
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
