import { motion } from "motion/react";
import {
  Sparkles,
  Users,
  Eye,
  Frame,
  Handshake,
  ScrollText,
  Shirt,
  Gem,
  Crown,
  Camera,
  Star,
  Wine,
  Martini,
  Megaphone,
  Globe,
  Award,
  Ticket,
  KeyRound,
  Landmark,
  Presentation,
  ShieldCheck,
  Building2,
  Home,
  Palette,
  Car,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// One renderer for the whole family of "Signature Experience" segment pages.
// Each page is pure data (see data/segments.ts); the markup here mirrors the
// bespoke Arts & Architecture page so all six pages read as one family. Like
// every client-facing page, it makes no claim about past performance — the copy
// lives in the data and is kept day-one honest there.

export type SegmentCard = {
  icon?: string;
  title: string;
  description?: string;
  bullets?: string[];
};

export type SegmentSection = {
  kind: "checklist" | "cards" | "split" | "commitments" | "note" | "cta";
  eyebrow?: string;
  icon?: string;
  heading: string;
  subcopy?: string;
  points?: string[];
  cards?: SegmentCard[];
  included?: { title: string; items: string[] };
  footnote?: string;
  body?: string;
  ctaLabel?: string;
  secondaryCtaLabel?: string;
};

export type SegmentContent = {
  slug: string; // route slug + Contact interest key
  heroImage: string;
  hero: {
    eyebrow?: string;
    headline: string;
    subcopy: string;
    footnote?: string;
  };
  sections: SegmentSection[];
};

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Users,
  Eye,
  Frame,
  Handshake,
  ScrollText,
  Shirt,
  Gem,
  Crown,
  Camera,
  Star,
  Wine,
  Martini,
  Megaphone,
  Globe,
  Award,
  Ticket,
  KeyRound,
  Landmark,
  Presentation,
  ShieldCheck,
  Building2,
  Home,
  Palette,
  Car,
};

function iconFor(name?: string): LucideIcon {
  return (name && ICONS[name]) || Sparkles;
}

function gridCols(n: number): string {
  if (n <= 2) return "grid-cols-1 md:grid-cols-2";
  if (n === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  return "grid-cols-1 md:grid-cols-3";
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// Centered section header: gold hairline + gold eyebrow + bordered icon circle.
function SectionHeading({
  eyebrow,
  icon,
  heading,
  subcopy,
}: {
  eyebrow?: string;
  icon?: string;
  heading: string;
  subcopy?: string;
}) {
  const Icon = iconFor(icon);
  return (
    <motion.div {...fadeUp} className="text-center mb-16">
      <span className="mx-auto mb-6 block h-px w-14 bg-[#c7a468]" />
      {eyebrow && (
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#c7a468] mb-6">
          {eyebrow}
        </p>
      )}
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

function CardGrid({ cards }: { cards: SegmentCard[] }) {
  return (
    <div className={`grid ${gridCols(cards.length)} gap-8`}>
      {cards.map((card, index) => {
        const Icon = iconFor(card.icon);
        const hasBullets = !!card.bullets?.length;
        return (
          <motion.div
            key={card.title}
            {...fadeUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 border border-zinc-800 hover:border-zinc-600 transition-colors flex flex-col"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-zinc-700 rounded-full">
              <Icon size={26} className="text-white" />
            </div>
            <h3 className={`${hasBullets ? "text-2xl" : "text-xl"} mb-3`}>
              {card.title}
            </h3>
            {card.description && (
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {card.description}
              </p>
            )}
            {hasBullets && (
              <div className="space-y-3 mt-auto">
                {card.bullets!.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <Check size={16} className="text-white mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{bullet}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

function Section({
  section,
  index,
  contactHref,
}: {
  section: SegmentSection;
  index: number;
  contactHref: string;
}) {
  const zinc = index % 2 === 1;
  const pad = section.kind === "note" ? "py-16" : "py-24";
  const bg = zinc ? " bg-zinc-950" : "";

  let inner: React.ReactNode = null;

  if (section.kind === "checklist") {
    inner = (
      <>
        <SectionHeading
          eyebrow={section.eyebrow}
          icon={section.icon}
          heading={section.heading}
          subcopy={section.subcopy}
        />
        {section.points && (
          <motion.div {...fadeUp} className="max-w-2xl mx-auto space-y-4">
            {section.points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <Check size={20} className="text-white mt-1 flex-shrink-0" />
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </motion.div>
        )}
      </>
    );
  } else if (section.kind === "cards") {
    inner = (
      <>
        <SectionHeading
          eyebrow={section.eyebrow}
          icon={section.icon}
          heading={section.heading}
          subcopy={section.subcopy}
        />
        {section.cards && <CardGrid cards={section.cards} />}
        {section.included && (
          <motion.div
            {...fadeUp}
            className="border border-zinc-800 p-8 mt-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={20} className="text-white flex-shrink-0" />
              <h3 className="text-xl">{section.included.title}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.included.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-white mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        {section.footnote && (
          <p className="text-gray-500 text-sm text-center mt-8 max-w-2xl mx-auto">
            {section.footnote}
          </p>
        )}
        {section.ctaLabel && (
          <div className="text-center mt-12">
            <Link
              to={contactHref}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider border-b border-zinc-600 pb-1 hover:text-gray-300 transition-colors"
            >
              {section.ctaLabel}
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </>
    );
  } else if (section.kind === "split") {
    const Icon = iconFor(section.icon);
    inner = (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 block h-px w-14 bg-[#c7a468]" />
          {section.eyebrow && (
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#c7a468] mb-6">
              {section.eyebrow}
            </p>
          )}
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border border-zinc-700 rounded-full">
            <Icon size={36} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">{section.heading}</h2>
          {section.subcopy && (
            <p className="text-gray-300 text-lg leading-relaxed">
              {section.subcopy}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-zinc-800 p-8 space-y-5"
        >
          {section.points?.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <Check size={20} className="text-white mt-1 flex-shrink-0" />
              <span className="text-gray-300">{point}</span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  } else if (section.kind === "commitments") {
    inner = (
      <>
        <SectionHeading
          eyebrow={section.eyebrow}
          icon={section.icon}
          heading={section.heading}
          subcopy={section.subcopy}
        />
        <div className={`grid ${gridCols(section.cards?.length ?? 3)} gap-8`}>
          {section.cards?.map((card, index) => (
            <motion.div
              key={card.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-zinc-800"
            >
              <h3 className="text-xl mb-3">{card.title}</h3>
              {card.description && (
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </>
    );
  } else if (section.kind === "note") {
    inner = (
      <motion.div
        {...fadeUp}
        className="max-w-3xl mx-auto border-l-2 border-zinc-700 pl-6 py-2"
      >
        <h3 className="text-sm uppercase tracking-wider mb-3">
          {section.heading}
        </h3>
        {section.body && (
          <p className="text-gray-400 text-sm leading-relaxed">{section.body}</p>
        )}
      </motion.div>
    );
  } else if (section.kind === "cta") {
    inner = (
      <motion.div {...fadeUp} className="text-center">
        <span className="mx-auto mb-6 block h-px w-14 bg-[#c7a468]" />
        {section.eyebrow && (
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#c7a468] mb-6">
            {section.eyebrow}
          </p>
        )}
        <h2 className="text-4xl md:text-5xl mb-6">{section.heading}</h2>
        {section.subcopy && (
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            {section.subcopy}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={contactHref}
            className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            {section.ctaLabel || "Request an invitation"}
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/partner"
            className="px-12 py-5 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center"
          >
            {section.secondaryCtaLabel || "Our approach"}
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <section className={`${pad}${bg}`}>
      <div className="container mx-auto px-6">{inner}</div>
    </section>
  );
}

export function SegmentPage({ content }: { content: SegmentContent }) {
  const contactHref = `/contact?interest=${content.slug}`;

  return (
    <div className="min-h-screen">
      {/* Hero — the card's photograph anchors the page */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
        <div className="absolute inset-0">
          <ImageWithFallback
            src={content.heroImage}
            alt={content.hero.headline}
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
            {content.hero.eyebrow && (
              <span className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#c7a468]">
                {content.hero.eyebrow}
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight max-w-4xl mx-auto"
          >
            {content.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {content.hero.subcopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to={contactHref}
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

          {content.hero.footnote && (
            <p className="text-gray-500 text-sm mt-6">{content.hero.footnote}</p>
          )}
        </div>
      </section>

      {content.sections.map((section, index) => (
        <Section
          key={`${section.kind}-${index}`}
          section={section}
          index={index}
          contactHref={contactHref}
        />
      ))}
    </div>
  );
}
