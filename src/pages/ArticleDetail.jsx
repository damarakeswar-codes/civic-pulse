import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { newsService } from "../services/newsService";
import ArticleCard from "../components/ArticleCard";
import { ArticleDetailSkeleton } from "../components/Skeleton";
import SEO from "../seo/SEO";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from "lucide-react";
import { calculateReadTime } from "../utils/readTime";

/**
 * Article Detail Page - Displays a single news article with reading progress and related content
 */
export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        setLoading(true);
        const data = await newsService.getArticleBySlug(slug);
        setArticle(data);
        
        // Fetch related articles
        const related = await newsService.getRelatedArticles(slug, data.category);
        setRelatedArticles(related);
      } catch (err) {
        setError("Article not found or failed to load.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4">
        <ArticleDetailSkeleton />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Article Not Found</h1>
        <Link to="/" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <article className="container mx-auto px-4">
        <SEO 
          title={article.title}
          description={article.excerpt}
          keywords={article.tags.join(", ")}
          ogImage={article.image}
          articleData={article}
        />

        <div className="flex items-center justify-between mb-8 max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
          <button className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Clock className="w-3 h-3" />
              <span>{calculateReadTime(article.content)}</span>
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium text-gray-900 dark:text-gray-200">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
          </div>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden aspect-video shadow-lg max-w-3xl mx-auto"
        >
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-body text-base leading-relaxed prose prose-lg max-w-3xl mx-auto prose-blue mb-12 dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <footer className="pt-8 border-t border-gray-100 dark:border-gray-800 mb-20 max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </footer>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mb-20">
            <h3 className="font-heading text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 tracking-tight">
              Related Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((item) => (
                <ArticleCard key={item.id} article={item} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
