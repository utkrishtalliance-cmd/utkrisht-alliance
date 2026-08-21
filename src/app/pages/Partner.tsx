import { motion } from "motion/react";
import { Building2, Award, Store, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";

// This page sells a first season. It deliberately makes no claims about our own
// past performance, because we don't have any yet — every number below is
// third-party market data a sponsor's team can verify independently. Sourced
// audience data beats invented first-party results: one is checkable, the other
// is the fastest way to lose a room like this.

type Stat = {
  value: string;
  label: string;
  source: string;
};

const AUDIENCE_STATS: Stat[] = [
  {
    value: "1.2M",
    label:
      "South Asian Canadians in the Greater Toronto Area — 19% of the region",
    source: "Statistics Canada, 2021 Census",
  },
  {
    value: "20.6%",
    label:
      "Share of Dubai's international property buyers who were Indian nationals in H1 2026 — the largest single cohort",
    source: "Harbor Real Estate analysis of DXBinteract data, July 2026",
  },
  {
    value: "₹1 lakh cr",
    label:
      "Projected size of India's senior living market by 2030, from ₹30,000 crore today at 1.3% penetration",
    source: "Colliers India, August 2026",
  },
  {
    value: "+22%",
    label:
      "Growth in Indian single malt sales in 2025, to 500,000 nine-litre cases",
    source: "Confederation of Indian Alcoholic Beverage Companies",
  },
];

const AUDIENCE_NOTES = [
  "Households holding capital in two or more countries",
  "Buying decisions made jointly across generations",
  "Underserved by mainstream Canadian luxury marketing",
  "No established premium event platform currently serving them",
];

// Founding positions are genuinely limited — the scarcity is a contractual fact,
// not a marketing device. Keep these counts accurate as positions are sold.
const FOUNDING_TIERS = [
  {
    tier: "Founding Partner",
    positions: "Three positions per event",
    description:
      "Permanent association with the launch of the property, and year-one rates locked for three seasons.",
    features: [
      "Named as a Founding Partner in perpetuity",
      "Category exclusivity for the first season",
      "Keynote or fireside speaking position",
      "Dedicated activation space and hospitality suite",
      "Pre- and post-event editorial coverage",
      "Opt-in lead capture at your stand",
      "Year-one rates held for three seasons",
    ],
  },
  {
    tier: "Season Partner",
    positions: "Six positions per event",
    description:
      "Prominent placement across the season with a stand in a primary position.",
    features: [
      "Prominent identity across event touchpoints",
      "Exhibition stand in a primary position",
      "Panel participation",
      "Hospitality allocation for your guests",
      "Social and newsletter inclusion",
      "Opt-in lead capture at your stand",
    ],
  },
  {
    tier: "Supporting Partner",
    positions: "Open",
    description:
      "A considered presence for brands testing the audience before committing to a season.",
    features: [
      "Identity on event materials",
      "Standard exhibition stand",
      "Access to networking sessions",
      "Digital promotion",
      "Post-event report",
    ],
  },
];

const EXHIBITOR_OPTIONS = [
  {
    title: "Premium Stand",
    size: "6m × 6m",
    features: [
      "Corner location",
      "Custom build-out",
      "Premium lighting",
      "Storage facilities",
      "Dedicated power supply",
    ],
  },
  {
    title: "Standard Stand",
    size: "3m × 3m",
    features: [
      "Standard location",
      "Shell scheme",
      "Basic lighting",
      "Storage access",
      "Power outlet",
    ],
  },
  {
    title: "Showcase Pod",
    size: "2m × 2m",
    features: [
      "Display area",
      "Branded backdrop",
      "Table and chairs",
      "Promotional materials",
      "Power access",
    ],
  },
];

// What we will actually do — each of these is a commitment we can keep on a
// first event. Nothing here depends on attendance we cannot yet evidence.
const COMMITMENTS = [
  {
    title: "A curated room",
    description:
      "Attendance is by registration and review, not open sale. You will know who is in the room before you commit to it.",
  },
  {
    title: "Consent-based leads",
    description:
      "We do not sell or share attendee lists. You receive the contacts of people who opt in at your stand — which is both the compliant approach under Canadian privacy law and the only kind of lead worth having.",
  },
  {
    title: "An honest post-event report",
    description:
      "Verified attendance, registration source, session participation and your own lead volume — reported as measured, including where numbers fall short of projection.",
  },
];

export function Partner() {
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
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6">
              Founding Season · 2027
            </p>
            <h1 className="text-5xl md:text-7xl mb-8">Partner With Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are building the first premium event platform for Canada's
              South Asian and NRI luxury audience. Founding positions for the
              2027 season are open now.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The audience — sourced, verifiable market data */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border border-zinc-700 rounded-full">
                <Building2 size={36} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">The Audience</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                This is a new platform, so we will not show you performance
                figures we have not earned. What we can show you is the market
                — and every figure on this page is public, sourced and
                independently checkable.
              </p>

              <div className="space-y-3">
                {AUDIENCE_NOTES.map((note) => (
                  <div key={note} className="flex items-start gap-3">
                    <Check size={20} className="text-white mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{note}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-zinc-800 divide-y divide-zinc-800"
            >
              {AUDIENCE_STATS.map((stat) => (
                <div key={stat.value} className="p-8">
                  <div className="text-3xl mb-3">{stat.value}</div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {stat.label}
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">
                    {stat.source}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding positions */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border border-zinc-700 rounded-full">
              <Award size={36} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl mb-4">Founding Positions</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Founding Partner positions exist only in the first season. They are
              limited by contract, not by convention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOUNDING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 border flex flex-col ${
                  index === 0
                    ? "border-white bg-zinc-900"
                    : "border-zinc-800 hover:border-zinc-600 transition-colors"
                }`}
              >
                <h3 className="text-2xl mb-1">{tier.tier}</h3>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                  {tier.positions}
                </p>
                <p className="text-gray-400 text-sm mb-8">{tier.description}</p>
                <div className="space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={16} className="text-white mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact?interest=founding-partnership"
                  className="mt-8 pt-6 border-t border-zinc-800 inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  Request the rate card
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-500 text-sm text-center mt-12 max-w-2xl mx-auto">
            Rates are set per event and per category. We will send the current
            rate card and availability within one business day.
          </p>
        </div>
      </section>

      {/* Exhibiting */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border border-zinc-700 rounded-full">
              <Store size={36} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl mb-4">Exhibiting</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Show your work to a room of decision-makers who came to buy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {EXHIBITOR_OPTIONS.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-zinc-800 hover:border-zinc-600 transition-colors"
              >
                <h3 className="text-xl mb-2">{option.title}</h3>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">
                  {option.size}
                </p>
                <div className="space-y-3">
                  {option.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={16} className="text-white mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-400 text-sm text-center">
              All stands include Wi-Fi, event listing, marketing support and a
              post-event report.
            </p>

            {/* Eligibility is curation and compliance in the same sentence:
                fractional and guaranteed-return property products are securities
                in Ontario, and we will not have them on the floor. */}
            <div className="border-l-2 border-zinc-700 pl-6 py-2">
              <h3 className="text-sm uppercase tracking-wider mb-3">
                Exhibitor eligibility
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our property events are educational. Exhibitors present
                developments and take enquiries; contracting is completed
                offshore by the appropriate licensed entity. We do not accept
                fractional, tokenised, pooled or guaranteed-return offerings, and
                we do not permit yield guarantees or appreciation projections in
                any exhibitor material. Applications are reviewed before a stand
                is confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we commit to */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4">What We Commit To</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Three things we can promise on a first event, and will be held to
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Request the 2027 rate card
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Tell us which event and which category interests you, and we will
              send current rates and availability within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?interest=founding-partnership"
                className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
              >
                Partnership enquiry
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact?interest=exhibiting"
                className="px-12 py-5 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider inline-flex items-center justify-center"
              >
                Exhibitor enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
