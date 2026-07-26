import { motion } from "motion/react";
import { Play, Image as ImageIcon, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Media() {
  const portfolioItems = [
    {
      title: "Luxury Fashion Week 2025",
      category: "Event Coverage",
      type: "video",
      image: "https://images.unsplash.com/photo-1768913640595-104e0170dfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGZhc2hpb24lMjBzaG93fGVufDF8fHx8MTc3NDA3MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Premium Real Estate Campaign",
      category: "Brand Photography",
      type: "image",
      image: "https://images.unsplash.com/photo-1660486615549-d50a6564e865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmVhbCUyMGVzdGF0ZSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzc0MDcxMTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "VIP Networking Gala",
      category: "Event Aftermovie",
      type: "video",
      image: "https://images.unsplash.com/photo-1768508948485-a7adc1f3427f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjByZWNlcHRpb258ZW58MXx8fHwxNzc0MDcxMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Luxury Brand Showcase",
      category: "Commercial Production",
      type: "video",
      image: "https://images.unsplash.com/photo-1769509456084-dacd3cde0e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMHNob3djYXNlfGVufDF8fHx8MTc3NDA3MTEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Corporate Event Photography",
      category: "Event Coverage",
      type: "image",
      image: "https://images.unsplash.com/photo-1762765685348-4bced247d12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHNldHVwfGVufDF8fHx8MTc3Mzk3MTQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Media Production Services",
      category: "Brand Campaign",
      type: "video",
      image: "https://images.unsplash.com/photo-1764068866740-506ba4cf64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc0MDcxMTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Luxury Venue Photography",
      category: "Location Shoots",
      type: "image",
      image: "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHZlbnVlfGVufDF8fHx8MTc3NDA3MTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Studio Production Work",
      category: "Commercial Photography",
      type: "image",
      image: "https://images.unsplash.com/photo-1641260783083-a0af6cf964ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NzQwNzExMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const pressFeatures = [
    {
      publication: "Luxury Living Magazine",
      title: "Redefining Premium Events in Canada",
      date: "March 2026",
    },
    {
      publication: "Business Excellence Today",
      title: "The Art of Curated Experiences",
      date: "February 2026",
    },
    {
      publication: "Fashion & Lifestyle Weekly",
      title: "Behind the Scenes of Luxury Events",
      date: "January 2026",
    },
    {
      publication: "Real Estate Insider",
      title: "Connecting Investors Through Events",
      date: "December 2025",
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
            <h1 className="text-5xl md:text-7xl mb-8">Media & Portfolio</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our collection of event coverage, brand campaigns, and
              premium production work
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative overflow-hidden aspect-square cursor-pointer"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Type Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === "video" ? (
                    <Play size={20} className="text-white" />
                  ) : (
                    <ImageIcon size={20} className="text-white" />
                  )}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-gray-400 mb-2">{item.category}</p>
                  <h3 className="text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4">Featured Work</h2>
            <p className="text-gray-400 text-lg">
              Highlights from our most impactful campaigns and events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video bg-zinc-900 group cursor-pointer overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768913640595-104e0170dfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGZhc2hpb24lMjBzaG93fGVufDF8fHx8MTc3NDA3MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Featured video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl mb-2">Event Aftermovie 2025</h3>
                <p className="text-gray-400 text-sm">2:45 minutes</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-video bg-zinc-900 group cursor-pointer overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764068866740-506ba4cf64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc0MDcxMTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Featured video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl mb-2">Brand Campaign Showreel</h3>
                <p className="text-gray-400 text-sm">3:15 minutes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press & Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4">Press & Features</h2>
            <p className="text-gray-400 text-lg">
              Coverage and recognition from leading publications
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {pressFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 p-8 border border-zinc-800 hover:border-zinc-600 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                  <FileText size={20} className="text-white group-hover:text-black transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-2">{feature.publication}</p>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "50+", label: "Events Covered" },
              { value: "100K+", label: "Photos Captured" },
              { value: "200+", label: "Videos Produced" },
              { value: "30+", label: "Brand Campaigns" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
