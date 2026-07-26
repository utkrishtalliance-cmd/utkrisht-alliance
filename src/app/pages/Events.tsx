import { motion } from "motion/react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function Events() {
  const upcomingEvents = [
    {
      title: "Utkrisht Luxury Expo 2026",
      date: "June 15-17, 2026",
      location: "Toronto Convention Centre",
      attendees: "500+ HNI/UHNI",
      description:
        "An exclusive showcase of premium brands across fashion, real estate, and lifestyle sectors.",
      image: "https://images.unsplash.com/photo-1660486615549-d50a6564e865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmVhbCUyMGVzdGF0ZSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzc0MDcxMTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Registration Open",
    },
    {
      title: "Utkrisht Fashion Week",
      date: "September 10-14, 2026",
      location: "Vancouver Arts Centre",
      attendees: "1000+ Attendees",
      description:
        "A premier fashion event featuring emerging and established designers from around the world.",
      image: "https://images.unsplash.com/photo-1768913640595-104e0170dfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGZhc2hpb24lMjBzaG93fGVufDF8fHx8MTc3NDA3MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Coming Soon",
    },
    {
      title: "Utkrisht Investment Summit",
      date: "November 8-9, 2026",
      location: "Montreal Financial District",
      attendees: "300+ Investors",
      description:
        "Connect with leading investors and explore opportunities in real estate and luxury markets.",
      image: "https://images.unsplash.com/photo-1768508948485-a7adc1f3427f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjByZWNlcHRpb258ZW58MXx8fHwxNzc0MDcxMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Coming Soon",
    },
  ];

  const pastEvents = [
    {
      title: "Luxury Lifestyle Gala 2025",
      date: "December 2025",
      highlights: "250+ attendees, 30+ luxury brands, $2M+ in deals",
      image: "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHZlbnVlfGVufDF8fHx8MTc3NDA3MTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Fashion Forward Showcase 2025",
      date: "October 2025",
      highlights: "15 designers, 500+ fashion enthusiasts, media coverage",
      image: "https://images.unsplash.com/photo-1769509456084-dacd3cde0e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMHNob3djYXNlfGVufDF8fHx8MTc3NDA3MTEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Real Estate Excellence Awards",
      date: "September 2025",
      highlights: "200+ industry leaders, 25 awards, networking gala",
      image: "https://images.unsplash.com/photo-1762765685348-4bced247d12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHNldHVwfGVufDF8fHx8MTc3Mzk3MTQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "VIP Networking SoirÃ©e",
      date: "July 2025",
      highlights: "100 HNI attendees, exclusive venue, curated experiences",
      image: "https://images.unsplash.com/photo-1764068866740-506ba4cf64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc0MDcxMTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
            <h1 className="text-5xl md:text-7xl mb-8">Events</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience world-class events that bring together luxury brands,
              influential networks, and exclusive opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4">Upcoming Events</h2>
            <p className="text-gray-400 text-lg">
              Join us at our flagship events designed to create exceptional value
            </p>
          </motion.div>

          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 text-sm uppercase tracking-wider">
                    {event.status}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl mb-4">{event.title}</h3>
                  <p className="text-gray-300 mb-6">{event.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Calendar size={20} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <MapPin size={20} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Users size={20} />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider"
                  >
                    Register Interest
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4">Past Events</h2>
            <p className="text-gray-400 text-lg">
              A showcase of our successful events and their impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-sm text-gray-400 mb-2">{event.date}</p>
                  <h3 className="text-2xl mb-3">{event.title}</h3>
                  <p className="text-gray-300 text-sm">{event.highlights}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Properties */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4">Our Flagship Events</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Utkrisht Alliance creates and owns premium event properties that have
              become cornerstones of the luxury industry calendar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Utkrisht Luxury Expo",
                description: "Annual showcase of premium brands and services",
              },
              {
                name: "Utkrisht Fashion Week",
                description: "Celebrating creativity and craftsmanship in fashion",
              },
              {
                name: "Utkrisht Investment Summit",
                description: "Connecting investors with high-value opportunities",
              },
            ].map((property, index) => (
              <motion.div
                key={property.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 border border-zinc-800 hover:border-zinc-600 transition-colors"
              >
                <h3 className="text-xl mb-3">{property.name}</h3>
                <p className="text-gray-400 text-sm">{property.description}</p>
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
            <h2 className="text-4xl md:text-5xl mb-6">
              Be Part of Something Extraordinary
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Whether as an attendee, exhibitor, or sponsor, discover how you can
              participate in our events
            </p>
            <Link
              to="/partner"
              className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Explore Opportunities
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
