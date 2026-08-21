import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { insights } from "../data/insights";

export function InsightArticle() {
  const { slug } = useParams();
  const article = insights.find((a) => a.slug === slug);

  // Unknown slug → send readers back to the Insights index.
  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="min-h-screen pt-24">
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10"
            >
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                {article.category}
              </div>
              <h1 className="text-4xl md:text-6xl leading-tight mb-6">
                {article.title}
              </h1>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-10">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.div>

            <div className="relative aspect-[16/9] overflow-hidden mb-12">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              {article.content.map((block, i) =>
                block.type === "h2" ? (
                  <h2 key={i} className="text-2xl md:text-3xl mt-12 mb-4">
                    {block.text}
                  </h2>
                ) : (
                  <p
                    key={i}
                    className="text-gray-300 text-lg leading-relaxed mb-6"
                  >
                    {block.text}
                  </p>
                )
              )}
            </div>

            <div className="mt-16 pt-10 border-t border-zinc-800 text-center">
              <p className="text-gray-400 mb-6">
                Ready to bring an idea like this to life?
              </p>
              <Link
                to="/partner"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-sm uppercase tracking-wider"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
