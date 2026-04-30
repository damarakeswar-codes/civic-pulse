import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { cn } from "../utils/cn";

/**
 * Article Card Component with lazy loading and animations
 */
const ArticleCard = memo(({ article, priority = false }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible || priority ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
    >
      <Link to={`/article/${article.slug}`} className="block overflow-hidden aspect-video relative">
        <img
          src={article.image}
          alt={article.title}
          referrerPolicy="no-referrer"
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 dark:bg-blue-500 text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-md">
            {article.category}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span>{article.author}</span>
          <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
        <Link to={`/article/${article.slug}`}>
          <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="font-body text-base leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 max-w-3xl">
          {article.excerpt}
        </p>
        <Link 
          to={`/article/${article.slug}`}
          className="text-blue-600 dark:text-blue-400 text-sm font-bold hover:underline inline-flex items-center gap-1"
        >
          Read More
        </Link>
      </div>
    </motion.article>
  );
});

ArticleCard.displayName = "ArticleCard";

export default ArticleCard;
