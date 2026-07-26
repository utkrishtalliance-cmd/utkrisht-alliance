import { motion } from "motion/react";
import { Building2, Award, TrendingUp, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";

export function Partner() {
  const brandBenefits = [
    "Access to HNI/UHNI audiences",
    "Premium brand positioning",
    "Comprehensive media coverage",
    "Lead generation opportunities",
    "Networking with industry leaders",
    "Custom activation experiences",
  ];

  const sponsorshipTiers = [
    {
      tier: "Platinum",
      description: "Maximum visibility and exclusive benefits",
      features: [
        "Top-tier branding across all event touchpoints",
        "Speaking opportunities at keynotes",
        "VIP hospitality suite",
        "Dedicated brand activation space",
        "Pre and post-event media coverage",
        "Access to attendee database",
      ],
    },
    {
      tier: "Gold",
      description: "Premium positioning and engagement",
      features: [
        "Prominent logo placement",
        "Exhibition booth in prime location",
        "Panelist opportunities",
        "VIP event access",
        "Social media promotion",
        "Event photography rights",
      ],
    },
    {
      tier: "Silver",
      description: "Solid brand presence and value",
      features: [
        "Logo placement on event materials",
        "Standard exhibition booth",
        "Access to networking sessions",
        "Event attendee list",
        "Digital promotion",
        "Event recap inclusion",
      ],
    },
  ];

  const exhibitorOptions = [
    {
      title: "Premium Booth",
      size: "6m x 6m",
      features: [
        "Corner location",
        "Custom build-out",
        "Premium lighting",
        "Storage facilities",
        "Dedicated power supply",
      ],
    },
    {
      title: "Standard Booth",
      size: "3m x 3m",
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
      size: "2m x 2m",
      features: [
        "Display area",
        "Branded backdrop",
        "Table & chairs",
        "Promotional materials",
        "Power access",
      ],
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
            <h1 className="text-5xl md:text-7xl mb-8">Partner With Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Collaborate with Utkrisht Alliance to connect with premium audiences,
              elevate your brand, and drive meaningful business outcomes
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Brands */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border border-zinc-700 rounded-full">
                <Building2 size={36} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">For Brands</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Partner with us to showcase your brand to a carefully curated
                audience of high-net-worth individuals and decision-makers who
                align with your values and aspirations.
              </p>
              
              <div className="space-y-3 mb-8">
                {brandBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-white mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900 p-12 border border-zinc-800"
            >
              <h3 className="text-2xl mb-6">Partnership ROI</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-400">Brand Awareness</span>
                    <span className="text-2xl">250%</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2">
                    <div className="bg-white h-2 w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-400">Lead Quality</span>
                    <span className="text-2xl">High</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2">
                    <div className="bg-white h-2 w-4/5" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-400">Network Growth</span>
                    <span className="text-2xl">500+</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2">
                    <div className="bg-white h-2 w-3/4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
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
            <h2 className="text-4xl md:text-6xl mb-4">Sponsorship Tiers</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Choose the sponsorship level that aligns with your brand objectives
              and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-zinc-800 p-8 hover:border-zinc-600 transition-colors"
              >
                <h3 className="text-2xl mb-2">{tier.tier}</h3>
                <p className="text-gray-400 text-sm mb-8">{tier.description}</p>
                
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-white mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Exhibitors */}
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
              <TrendingUp size={36} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl mb-4">For Exhibitors</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Showcase your products and services to a targeted audience of
              decision-makers and potential clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {exhibitorOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-zinc-800 overflow-hidden"
              >
                <div className="bg-zinc-900 p-6 border-b border-zinc-800">
                  <h3 className="text-xl mb-2">{option.title}</h3>
                  <p className="text-gray-400">{option.size}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check size={16} className="text-white mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-8">
              All exhibitor packages include: Wi-Fi access, event listing,
              marketing support, and attendee insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4">Why Partner With Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Targeted Reach",
                description:
                  "Connect with HNI/UHNI audiences who are actively seeking premium products and services",
              },
              {
                title: "Media Exposure",
                description:
                  "Benefit from comprehensive media coverage including PR, social media, and event photography",
              },
              {
                title: "Measurable Results",
                description:
                  "Track your ROI with detailed analytics, lead capture, and post-event reporting",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
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
              Ready to Become a Partner?
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Let's discuss how a partnership with Utkrisht Alliance can help you
              achieve your business goals
            </p>
            <Link
              to="/contact"
              className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Become a Partner
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
