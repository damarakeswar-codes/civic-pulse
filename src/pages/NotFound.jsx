import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import SEO from "../seo/SEO";

/**
 * 404 Page
 */
export default function NotFound() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <SEO title="404 - Not Found" description="Page not found" />
      <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Oops! Page not found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900/20"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
}
