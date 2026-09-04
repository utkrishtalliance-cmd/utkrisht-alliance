import { motion } from "motion/react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

// Toggle for the "Past Events" showcase. Kept OFF until we have events to show
// as a new business. Flip to `true` to bring the section back.
const SHOW_PAST_EVENTS = false;

type UpcomingEvent = {
  title: string;
  /** Last day of the event, ISO `YYYY-MM-DD`. Drives the staleness guard below. */
  endsOn: string;
  date: string;
  location: string;
  capacity?: string;
  description: string;
  image: string;
  /** Optional object-position class when a centre crop loses the subject. */
  imagePosition?: string;
  status: string;
};

// NOTE — The 6ix Dram serves alcohol: it needs an AGCO Industry Promotional
// permit filed at least 30 days ahead (allow up to 3 weeks' review), Smart Serve
// certified staff, and — for any brand without an LCBO listing — a market
// research structure to source product legally.
//
// Venues are listed as "to be announced" until contracts are signed — naming a
// room we haven't booked is the kind of detail an HNI audience checks.
const ALL_UPCOMING: UpcomingEvent[] = [
  {
    title: "The Utkrisht Circle — Inaugural Salon",
    endsOn: "2026-12-05",
    date: "Saturday, December 5, 2026",
    location: "Toronto, Ontario — by invitation",
    capacity: "40 covers · invitation only",
    description:
      "Our first gathering: a private dinner for forty. No stage, no pitch — an evening among the founders, investors and collectors the season is built for. Invitations open on request.",
    image: "/images/photo-1762765685348-4bced247d12c.jpg",
    imagePosition: "object-bottom",
    status: "Save the Date",
  },
  {
    title: "The 6ix Dram",
    endsOn: "2027-02-27",
    date: "Saturday, February 27, 2027",
    location: "Downtown Toronto — venue to be announced",
    description:
      "An evening of rare and small-batch whisky, with a focus on the Indian single malts now collecting world awards. Part of our founding season.",
    image: "/images/photo-1768508948485-a7adc1f3427f.jpg",
    status: "Save the Date",
  },
  {
    title: "Utkrisht Real Estate & Senior Living Summit",
    endsOn: "2027-05-09",
    date: "Sunday, May 9, 2027",
    location: "Toronto, Ontario — venue to be announced",
    capacity: "400–600 delegates",
    description:
      "Three tracks in one room for Canadian NRI families: Dubai residential, Indian luxury residential, and senior living for parents in India. Timed to Akshaya Tritiya, the most auspicious acquisition day of the year.",
    image: "/images/photo-1660486615549-d50a6564e865.jpg",
    status: "Save the Date",
  },
  {
    title: "Utkrisht Luxury Expo",
    endsOn: "2027-06-13",
    date: "June 12–13, 2027",
    location: "Toronto, Ontario — venue to be announced",
    capacity: "2,500–4,000 over two days",
    description:
      "Four halls across luxury Ayurveda and beauty, premium Indian and world spirits, international education, and luxury lifestyle — watches, art, automotive and hospitality.",
    image: "/images/photo-1579254216656-3c0c16a3bdd6.jpg",
    status: "Save the Date",
  },
  {
    title: "Utkrisht Salon des Arts",
    endsOn: "2027-10-23",
    date: "Saturday, October 23, 2027",
    location: "Toronto, Ontario — venue to be announced",
    capacity: "100–120 guests · by invitation",
    description:
      "An evening for fine art, design and architecture — a curated hang of painters and makers alongside the collectors and design-led homes that acquire them. Timed to Toronto's autumn art season.",
    image: "/images/arts-architecture.jpg",
    status: "Save the Date",
  },
  {
    title: "Utkrisht Couture",
    endsOn: "2027-08-28",
    date: "Saturday, August 28, 2027",
    location: "Toronto, Ontario — venue to be announced",
    capacity: "350–500 guests · 12–18 designers",
    description:
      "An invitation-only bridal and occasion-wear showcase with private appointment suites, timed for late summer so pieces can be commissioned in good time for the festive season and the winter wedding calendar.",
    image: "/images/photo-1773745060497-4cc1df774c72.jpg",
    status: "Save the Date",
  },
  {
    title: "Jalsa — The Founding Gala",
    endsOn: "2027-12-04",
    date: "Saturday, December 4, 2027",
    location: "Toronto, Ontario — venue to be announced",
    capacity: "300–450 guests · black tie",
    description:
      "The founding season's finale — a black-tie Jalsa bringing together the founding partners, guests and talent of the first year. Excellence, Jalsa, impact, under one roof.",
    image: "/images/founding-gala.jpg",
    status: "Save the Date",
  },
];

export function Events() {
  // Staleness guard: an event disappears from "Upcoming" the day after it ends,
  // so a lapsed date can never sit here advertising itself as open.
  const today = new Date().toISOString().slice(0, 10);
  const upcomingEvents = ALL_UPCOMING.filter((e) => e.endsOn >= today).sort(
    (a, b) => a.endsOn.localeCompare(b.endsOn)
  );

  const pastEvents = [
    {
      title: "Luxury Lifestyle Gala 2025",
      date: "December 2025",
      highlights: "250+ attendees, 30+ luxury brands, $2M+ in deals",
      image: "/images/photo-1773745060497-4cc1df774c72.jpg",
    },
    {
      title: "Fashion Forward Showcase 2025",
      date: "October 2025",
      highlights: "15 designers, 500+ fashion enthusiasts, media coverage",
      image: "/images/photo-1769509456084-dacd3cde0e20.jpg",
    },
    {
      title: "Real Estate Excellence Awards",
      date: "September 2025",
      highlights: "200+ industry leaders, 25 awards, networking gala",
      image: "/images/photo-1762765685348-4bced247d12c.jpg",
    },
    {
      title: "VIP Networking Soirée",
      date: "July 2025",
      highlights: "100 HNI attendees, exclusive venue, curated experiences",
      image: "/images/photo-1764068866740-506ba4cf64e4.jpg",
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

          {upcomingEvents.length === 0 && (
            <p className="text-gray-400 text-lg">
              Our next season is being finalised.{" "}
              <Link to="/contact" className="underline hover:text-white">
                Register your interest
              </Link>{" "}
              and we'll let you know as soon as dates are confirmed.
            </p>
          )}

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
                    className={`w-full h-full object-cover ${event.imagePosition ?? ""}`}
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
                    {event.capacity && (
                      <div className="flex items-center gap-3 text-gray-400">
                        <Users size={20} />
                        <span>{event.capacity}</span>
                      </div>
                    )}
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

      {/* Past Events — shelved until we have events to showcase as a new
          business. Flip SHOW_PAST_EVENTS (top of file) to true to restore it. */}
      {SHOW_PAST_EVENTS && (
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
      )}

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
              Utkrisht Alliance creates and owns its event properties — each built
              around a distinct audience and a fixed point in the year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Utkrisht Real Estate & Senior Living Summit",
                description:
                  "Property and senior living across Dubai and India, each spring",
              },
              {
                name: "Utkrisht Luxury Expo",
                description:
                  "Beauty, spirits, education and lifestyle under one roof, each summer",
              },
              {
                name: "Utkrisht Couture",
                description:
                  "Designer-led bridal and occasion wear, ahead of the festive season",
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
