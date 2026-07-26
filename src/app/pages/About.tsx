import { motion } from "motion/react";
import { Target, Eye, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
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
            <h1 className="text-5xl md:text-7xl mb-8">Who We Are</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Utkrisht Alliance is a premium media and events company headquartered
              in Canada with a global operational footprint. We specialize in creating
              sophisticated experiences at the intersection of luxury, investment,
              and lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[60vh]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1762765685348-4bced247d12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHNldHVwfGVufDF8fHx8MTc3Mzk3MTQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Corporate event"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Eye size={32} className="text-white" />
                <h2 className="text-3xl">Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become a global platform where premium brands and elite audiences
                connect through curated experiences that drive meaningful engagement
                and lasting partnerships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Target size={32} className="text-white" />
                <h2 className="text-3xl">Mission</h2>
              </div>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Deliver world-class events that exceed expectations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Build meaningful brand exposure for our partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Create high-value business ecosystems</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4">What Sets Us Apart</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 border border-zinc-800"
            >
              <Award size={40} className="mx-auto mb-6 text-white" />
              <h3 className="text-xl mb-4">Global Expertise</h3>
              <p className="text-gray-400">
                Canada-based operations with international market knowledge and connections
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 border border-zinc-800"
            >
              <Award size={40} className="mx-auto mb-6 text-white" />
              <h3 className="text-xl mb-4">Luxury Focus</h3>
              <p className="text-gray-400">
                Specialized in high-end experiences across fashion, real estate, and lifestyle
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 border border-zinc-800"
            >
              <Award size={40} className="mx-auto mb-6 text-white" />
              <h3 className="text-xl mb-4">Full-Service Solutions</h3>
              <p className="text-gray-400">
                From strategy to execution, we handle every aspect of your event or campaign
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between luxury brands and
                  discerning audiences, Utkrisht Alliance has established itself as
                  a trusted partner in the premium events and media landscape.
                </p>
                <p>
                  Operating from our headquarters in Canada, we've expanded our reach
                  to serve clients globally, creating experiences that resonate across
                  cultures and markets. Our expertise spans fashion shows, real estate
                  exhibitions, exclusive networking events, and comprehensive media
                  production.
                </p>
                <p>
                  What drives us is the belief that exceptional experiences create
                  lasting value. Whether it's connecting a luxury brand with its ideal
                  customers or facilitating high-value business relationships, we approach
                  every project with meticulous attention to detail and a commitment to
                  excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
