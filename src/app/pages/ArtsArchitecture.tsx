import { motion } from "motion/react";
import {
  ScrollText,
  Users,
  Eye,
  Palette,
  Building2,
  Home,
  Frame,
  Sparkles,
  Handshake,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// This page pitches a curated art & design showcase to three audiences —
// painters, designers, and luxury-home brands. Like the Partner page, it makes
// no claim about our own past performance, because we have none yet. Every
// promise below is a commitment we can keep on a first event; the audience is
// described qualitatively (who it is, how it is protected) rather than with
// attendance we have not earned. If sourced market figures are ever added, they
// must follow Partner.tsx's AUDIENCE_STATS pattern with a real citation on each.

const INVITATION_POINTS = [
  "Curated, not open — every artist, studio, and brand is reviewed before a place is offered",
  "Placed with intent — your work is positioned, lit, and presented as it deserves",
  "A founding circle — a limited first season, chosen deliberately",
];

type Audience = {
  title: string;
  icon: LucideIcon;
  description: string;
  bullets: string[];
};

const AUDIENCES: Audience[] = [
  {
    title: "Painters & Fine Artists",
    icon: Palette,
    description:
      "For painters, sculptors, and fine artists whose work belongs on a considered wall — properly hung and properly lit, seen by people who came to look closely rather than scroll past.",
    bullets: [
      "A curated wall or dedicated hang",
      "Editorial and social coverage of your practice",
      "Consent-based introductions to collectors who ask about your work",
    ],
  },
  {
    title: "Designers & Design Studios",
    icon: Building2,
    description:
      "For interior, product, and architectural designers and studios — room to present a point of view, from models and materials to a finished set-piece, before clients considering their next commission.",
    bullets: [
      "A showcase space or design pavilion",
      "A platform to present a project or collection",
      "Consent-based introductions to prospective clients",
    ],
  },
  {
    title: "Luxury-Home & Design Brands",
    icon: Home,
    description:
      "For luxury-home developers, high-end real estate, and design-led brands — present exceptional residences and objects beside the art and design that share their buyer.",
    bullets: [
      "A branded showcase or pavilion",
      "Placement alongside curated art and design",
      "Editorial coverage and qualified, consent-based introductions",
    ],
  },
];

const ROOM_POINTS = [
  "HNI and NRI collectors, luxury-home buyers, and design-led households — people who acquire art, commission interiors, and buy exceptional homes",
  "Households holding capital across two or more countries, buying jointly and across generations",
  "An audience underserved by mainstream luxury art and design marketing",
  "Attendance by registration and review, not open sale — you will know the character of the room before you commit to it",
];

type Format = {
  title: string;
  icon: LucideIcon;
  description: string;
};

const FORMATS: Format[] = [
  {
    title: "The Wall",
    icon: Frame,
    description:
      "A curated hang for painters and fine artists — considered placement, gallery lighting, and a printed note on the work and its maker.",
  },
  {
    title: "The Design Pavilion",
    icon: Building2,
    description:
      "A showcase space for studios and designers — room to present a project, a collection, models, and materials in a setting built for close attention.",
  },
  {
    title: "The Showcase Suite",
    icon: Home,
    description:
      "A branded pavilion for luxury-home and design brands — present a property, a portfolio, or a collection alongside curated art and design.",
  },
];

const INCLUDED = [
  "Editorial coverage of your work and practice",
  "Social features across our channels",
  "Consent-based introductions to interested buyers and clients",
  "A printed presence in the event's curated guide",
];

const ELIGIBILITY =
  "Showings present work and living spaces; they are not investment offerings. Property is shown as presentation only, with any contracting completed by the appropriate licensed entity — we do not host fractional, tokenised or guaranteed-return products, and we do not permit yield or appreciation claims in any material. Every placement is reviewed before it is confirmed.";

type Commitment = {
  title: string;
  description: string;
};

const COMMITMENTS: Commitment[] = [
  {
    title: "A genuinely curated floor",
    description:
      "Every artist, studio, and brand is reviewed before a place is offered. We would rather show less, well, than fill a hall — the curation is the product.",
  },
  {
    title: "Introductions by consent, never lists",
    description:
      "We do not sell or share collector or buyer lists. You receive the details of people who ask to be introduced to you — the compliant approach under Canadian privacy law, and the only kind of introduction worth having.",
  },
  {
    title: "Coverage beyond the evening",
    description:
      "Every featured artist, studio, and brand is carried across our editorial and social channels through the season, so your work is seen well past the people in the room.",
  },
  {
    title: "An honest post-event account",
    description:
      "You receive a plain account of who attended, how the room responded, and the introductions you were given — reported as measured, including where it falls short of what we hoped.",
  },
];

type SectionHeadingProps = {
  eyebrow: string;
  icon: LucideIcon;
  heading: string;
  subcopy?: string;
};

// Centered section header: gold hairline + gold eyebrow + bordered icon circle,
// reusing the exact gold and icon-circle primitives from Home.tsx / Partner.tsx.
function SectionHeading({ eyebrow, icon: Icon, heading, subcopy }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="mx-auto mb-6 block h-px w-14 bg-[#c7a468]" />
      <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#c7a468] mb-6">
        {eyebrow}
      </p>
      <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border border-zinc-700 rounded-full">
        <Icon size={36} className="text-white" />
      </div>
      <h2 className="text-4xl md:text-6xl mb-4">{heading}</h2>
      {subcopy && (
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">{subcopy}</p>
      )}
    </motion.div>
  );
}

export function ArtsArchitecture() {
  return (
    <div className="min-h-screen">
      {/* Hero — the one permitted photograph anchors the page */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/arts-architecture.jpg"
            alt="A curated interior with a large fine-art canvas"
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
              Arts &amp; Architecture · Founding Season 2026–27
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight max-w-4xl mx-auto"
          >
            Showcasing painters, designers, and the world's most exceptional
            homes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Utkrisht Alliance is assembling a curated showcase of fine art,
            design, and luxury living — placed before a reviewed room of
            collectors and luxury-home buyers, carried by editorial coverage and
            consent-based introductions that outlast the evening. For our
            founding season, we are inviting a small first circle of artists,
            studios, and brands to be featured. This is an invitation, not an
            open call.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact?interest=arts-architecture"
              className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
            >
              Request an invitation
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/partner"
              className="px-12 py-5 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center"
            >
              Our approach
            </Link>
          </motion.div>

          <p className="text-gray-500 text-sm mt-6">
            A limited number of founding positions for the 2026–27 season.
          </p>
        </div>
      </section>

      {/* The Invitation */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="The Invitation"
            icon={ScrollText}
            heading="A curated stage, not a crowded fair"
            subcopy="Most fairs sell space to anyone who will pay for it. We are building something quieter and more deliberate — a showcase where each wall, each room, and each piece is chosen, and where the work is met by an audience that came to look closely. For the founding season we are selecting a small number of painters, designers, and luxury-home brands to be featured across our events. You are not renting a booth in a hall; you are being placed, with intent, before people who can appreciate — and acquire — what you make."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-4"
          >
            {INVITATION_POINTS.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <Check size={20} className="text-white mt-1 flex-shrink-0" />
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We're Inviting */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Who We're Inviting"
            icon={Users}
            heading="Three invitations, one room"
            subcopy="We are curating across three disciplines, side by side — because the collector who buys a canvas commissions the interior and, in time, the home. Each is chosen for a room that values craft, provenance, and design."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AUDIENCES.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-zinc-800 hover:border-zinc-600 transition-colors flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-zinc-700 rounded-full">
                  <audience.icon size={26} className="text-white" />
                </div>
                <h3 className="text-2xl mb-3">{audience.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {audience.description}
                </p>
                <div className="space-y-3 mt-auto">
                  {audience.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <Check size={16} className="text-white mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact?interest=arts-architecture"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider border-b border-zinc-600 pb-1 hover:text-gray-300 transition-colors"
            >
              Enquire about featuring
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* The Room */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-6 block h-px w-14 bg-[#c7a468]" />
              <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#c7a468] mb-6">
                The Room
              </p>
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border border-zinc-700 rounded-full">
                <Eye size={36} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                Quality of the room over quantity
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We are a new platform, so we will not quote you attendance we
                have not yet earned. What we will tell you is who we are building
                the room for, and how we protect it — because for work like
                yours, the character of the room matters more than its size.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-zinc-800 p-8 space-y-5"
            >
              {ROOM_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <Check size={20} className="text-white mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Showcase */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="The Showcase"
            icon={Frame}
            heading="How we present your work"
            subcopy="Space is curated to the work, not sold by the square metre. We match the format to what you make — and every placement carries the same coverage and introductions well past the evening itself."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {FORMATS.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-zinc-800 hover:border-zinc-600 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-zinc-700 rounded-full">
                  <format.icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl mb-3">{format.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {format.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-zinc-800 p-8 mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={20} className="text-white flex-shrink-0" />
              <h3 className="text-xl">Included with every placement</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUDED.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-white mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <p className="text-gray-500 text-sm text-center mb-12 max-w-2xl mx-auto">
            Rates are set per event and per category, and sent on enquiry.
          </p>

          <div className="max-w-3xl mx-auto border-l-2 border-zinc-700 pl-6 py-2">
            <h3 className="text-sm uppercase tracking-wider mb-3">
              Curation &amp; eligibility
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{ELIGIBILITY}</p>
          </div>
        </div>
      </section>

      {/* What We Commit To */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="What We Commit To"
            icon={Handshake}
            heading="What we can promise on a first event"
            subcopy="We are new, and we build the way we would want to be treated — honestly, and with care for the room. Four things we can promise now, and will be held to."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMMITMENTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-zinc-800"
              >
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
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
            <span className="mx-auto mb-6 block h-px w-14 bg-[#c7a468]" />
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#c7a468] mb-6">
              Founding Season · 2026–27
            </p>
            <h2 className="text-4xl md:text-5xl mb-6">Request an invitation</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Founding-season places are limited and offered by review. Tell us
              about your work — a portfolio, a project, or a collection — and we
              will be in touch about being featured. We reply within one business
              day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?interest=arts-architecture"
                className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
              >
                Request an invitation
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/partner"
                className="px-12 py-5 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center"
              >
                Our approach
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
