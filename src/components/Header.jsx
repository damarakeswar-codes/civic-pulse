import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Activity, Moon, Sun } from "lucide-react";
import { cn } from "../utils/cn";
import { useTheme } from "../context/ThemeContext";

/**
 * Header Component with responsive navigation and search
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
          <Activity className="w-8 h-8" />
          <span className="dark:text-white">Civic Pulse Media</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/category/technology" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Technology</Link>
          <Link to="/category/lifestyle" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Lifestyle</Link>
          <Link to="/category/finance" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Finance</Link>
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex flex-wrap items-center gap-2 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 absolute w-full left-0 mt-3 sm:mt-5 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-4 gap-4 text-gray-600 dark:text-gray-300 font-medium">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/category/technology" onClick={() => setIsMenuOpen(false)}>Technology</Link>
            <Link to="/category/lifestyle" onClick={() => setIsMenuOpen(false)}>Lifestyle</Link>
            <Link to="/category/finance" onClick={() => setIsMenuOpen(false)}>Finance</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
