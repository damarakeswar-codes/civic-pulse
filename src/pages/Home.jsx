import { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { newsService } from "../services/newsService";
import ArticleCard from "../components/ArticleCard";
import { ArticleSkeleton } from "../components/Skeleton";
import Newsletter from "../components/Newsletter";
import SEO from "../seo/SEO";
import { motion } from "motion/react";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { calculateReadTime } from "../utils/readTime";

/**
 * Home Page - Displays a list of news articles with category filtering
 */
export default function Home() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await newsService.getArticles(category);
        setArticles(data);
        setCurrentPage(1); // Reset to page 1 on category change
      } catch (err) {
        setError("Failed to load articles. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  // The first article is the featured one (only on main home page and page 1)
  const featuredArticle = useMemo(() => {
    return !category && articles.length > 0 && currentPage === 1 ? articles[0] : null;
  }, [articles, category, currentPage]);

  const displayArticles = useMemo(() => {
    // If we're not filtering by category, the first article overall is featured *on page 1*.
    // However, the slicing needs to be consistent to not duplicate/lose articles.
    const baseArticles = (!category && articles.length > 0) ? articles.slice(1) : articles;
    return baseArticles;
  }, [articles, category]);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = displayArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(displayArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4">
      <SEO 
        title={category ? `${category.charAt(0).toUpperCase() + category.slice(1)} News` : "Home"} 
        description="Civic Pulse Media - Your source for the latest insights, trends, and news from around the globe."
        keywords="news, technology, lifestyle, finance, civic pulse media"
      />

      {/* Hero Section / Featured Article */}
      {!category && featuredArticle && !loading && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 group relative rounded-3xl overflow-hidden bg-gray-900 border border-transparent dark:border-gray-800 w-full flex items-end aspect-[4/5] sm:aspect-video lg:aspect-[21/9] min-h-[400px] sm:min-h-0"
        >
          <img
            src={featuredArticle.image}
            alt={featuredArticle.title}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent sm:via-gray-900/20"></div>
          
          <div className="relative z-10 p-6 sm:p-8 md:p-12 w-full max-w-3xl">
            <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full mb-3 mb-4 inline-block">
              Featured Story
            </span>
            <Link to={`/article/${featuredArticle.slug}`} className="block w-full">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-3 sm:mb-4 hover:text-blue-400 transition-colors leading-tight w-full break-words">
                {featuredArticle.title}
              </h2>
            </Link>
            <p className="font-body text-gray-300 text-base md:text-lg leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-2 w-full break-words">
              {featuredArticle.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <span className="font-medium text-white">{featuredArticle.author}</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{calculateReadTime(featuredArticle.content)}</span>
              </div>
              <Link 
                to={`/article/${featuredArticle.slug}`}
                className="flex items-center gap-1.5 sm:gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors sm:ml-2"
              >
                Read Full Story <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </motion.section>
      )}

      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight capitalize">
            {category ? `${category} News` : "Latest Stories"}
          </h2>
          {category && (
            <Link to="/" className="text-sm text-blue-600 dark:text-blue-400 font-bold hover:underline">
              View All
            </Link>
          )}
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg text-center mb-8 border border-red-100 dark:border-red-900/30">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 9 }).map((_, i) => <ArticleSkeleton key={i} />)
          ) : (
            currentArticles.map((article, index) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                priority={index < 3} 
              />
            ))
          )}
        </div>

        {/* Pagination UI */}
        {!loading && totalPages > 1 && (
          <div className="mt-12 flex flex-wrap justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-2 sm:px-4 py-2 h-9 sm:h-10 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-1" />
              <span className="hidden sm:inline text-sm sm:text-base">Previous</span>
            </button>
            <div className="flex flex-wrap justify-center gap-1 sm:space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Show at most 5 pages, centered around currentPage
                let pageNum = currentPage;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`min-w-[36px] sm:w-10 h-9 sm:h-10 px-2 flex items-center justify-center rounded-lg text-sm sm:text-base font-medium transition-colors ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center px-2 sm:px-4 py-2 h-9 sm:h-10 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span className="hidden sm:inline text-sm sm:text-base">Next</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 sm:ml-1" />
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <div className="my-20">
        <Newsletter />
      </div>
    </div>
  );
}
