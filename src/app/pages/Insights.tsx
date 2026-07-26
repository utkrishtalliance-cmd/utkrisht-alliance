import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Insights() {
  const articles = [
    {
      title: "The Future of Luxury Events: 2026 Trends",
      excerpt:
        "Explore the emerging trends shaping the luxury events industry, from immersive experiences to sustainability-focused celebrations.",
      author: "Utkrisht Alliance Team",
      date: "March 15, 2026",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHZlbnVlfGVufDF8fHx8MTc3NDA3MTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: true,
    },
    {
      title: "Real Estate Investment Opportunities in Canada",
      excerpt:
        "An analysis of the Canadian luxury real estate market and key investment opportunities for HNI investors in 2026.",
      author: "Market Analysis Team",
      date: "March 10, 2026",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1660486615549-d50a6564e865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmVhbCUyMGVzdGF0ZSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzc0MDcxMTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Creating Memorable Brand Experiences",
      excerpt:
        "How premium brands can leverage experiential marketing to create lasting connections with their target audience.",
      author: "Brand Strategy Team",
      date: "March 5, 2026",
      category: "Brand Strategy",
      image: "https://images.unsplash.com/photo-1769509456084-dacd3cde0e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMHNob3djYXNlfGVufDF8fHx8MTc3NDA3MTEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Fashion Week 2025: Key Takeaways",
      excerpt:
        "Insights from the most influential fashion weeks around the world and what they mean for luxury brands.",
      author: "Fashion Desk",
      date: "February 28, 2026",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1768913640595-104e0170dfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGZhc2hpb24lMjBzaG93fGVufDF8fHx8MTc3NDA3MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "The Power of Networking: Building Business Relationships",
      excerpt:
        "Why face-to-face networking events remain crucial in the digital age and how to maximize their value.",
      author: "Events Team",
      date: "February 20, 2026",
      category: "Networking",
      image: "https://images.unsplash.com/photo-1768508948485-a7adc1f3427f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjByZWNlcHRpb258ZW58MXx8fHwxNzc0MDcxMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Event Production Best Practices",
      excerpt:
        "Professional insights into planning and executing flawless luxury events from concept to completion.",
      author: "Production Team",
      date: "February 15, 2026",
      category: "Event Planning",
      image: "https://images.unsplash.com/photo-1762765685348-4bced247d12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHNldHVwfGVufDF8fHx8MTc3Mzk3MTQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const categories = [
    "All",
    "Industry Trends",
    "Real Estate",
    "Fashion",
    "Brand Strategy",
    "Event Planning",
    "Networking",
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
            <h1 className="text-5xl md:text-7xl mb-8">Insights</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Industry perspectives, market analysis, and thought leadership from
              the Utkrisht Alliance team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-zinc-800 sticky top-[88px] bg-black/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 border border-zinc-700 text-sm uppercase tracking-wider whitespace-nowrap hover:border-white hover:bg-white hover:text-black transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {articles[0].featured && (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 text-sm uppercase tracking-wider">
                  Featured
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                  {articles[0].category}
                </div>
                <h2 className="text-4xl mb-6">{articles[0].title}</h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                
                <div className="flex items-center gap-6 mb-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{articles[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{articles[0].date}</span>
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider">
                  Read Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                  {article.category}
                </div>
                
                <h3 className="text-2xl mb-4 group-hover:text-gray-300 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center border border-zinc-800 p-12"
          >
            <h2 className="text-4xl mb-6">Stay Informed</h2>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe to our newsletter for the latest insights, event updates,
              and industry news
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border border-zinc-700 focus:border-white outline-none transition-colors"
              />
              <button className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
