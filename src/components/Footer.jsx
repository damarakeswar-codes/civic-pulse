import { Link } from "react-router-dom";
import { Activity, Github, Twitter, Linkedin } from "lucide-react";

/**
 * Footer Component
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800 text-gray-400 py-12 mt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
            <Activity className="w-8 h-8 text-blue-500" />
            <span>Civic Pulse Media</span>
          </Link>
          <p className="max-w-sm mb-6">
            Providing the latest insights, trends, and news from around the globe. Stay informed with Civic Pulse Media.
          </p>
          <div className="flex gap-4">
            <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/category/technology" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Technology</Link></li>
            <li><Link to="/category/lifestyle" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Lifestyle</Link></li>
            <li><Link to="/category/finance" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Finance</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div> 
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        <p>© 2026 Civic Pulse Media. All rights reserved.</p>
      </div>
    </footer>
  );
}
