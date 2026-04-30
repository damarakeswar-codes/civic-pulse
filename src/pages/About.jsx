import React from "react";
import SEO from "../seo/SEO";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title="About Us - Civic Pulse Media" 
        description="Learn more about Civic Pulse Media and our mission to deliver accurate, timely, and insightful journalism." 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 tracking-tight">
          About Civic Pulse Media
        </h1>

        <div className="font-body text-base leading-relaxed prose prose-lg max-w-none prose-blue dark:prose-invert">
          <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
            Civic Pulse Media is a premier digital destination for forward-thinking individuals who want to stay informed on the rapidly evolving worlds of Technology, Finance, and Lifestyle.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            In an era of information overload, our mission is to cut through the noise. We believe in delivering news that is not just fast, but accurate, insightful, and actionable. Our dedicated team of editors and journalists works tirelessly to curate and create stories that matter most to our readers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-xl mb-3 text-blue-600 dark:text-blue-400">Technology</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">From AI breakthroughs to the latest consumer gadgets, we cover the tech that shapes our future.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-xl mb-3 text-blue-600 dark:text-blue-400">Finance</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Market trends, economic shifts, and personal finance insights to help you make informed decisions.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-xl mb-3 text-blue-600 dark:text-blue-400">Lifestyle</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Culture, health, design, and ideas that enrich your daily life and broaden your horizons.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Editorial Independence</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Civic Pulse Media operates with strict editorial independence. Our journalism is evidence-based and remains uninfluenced by advertisers or corporate parent entities. We strive to provide balanced perspectives, giving our readers the full picture.
          </p>

          <div className="mt-12 p-8 bg-blue-50 dark:bg-gray-800 rounded-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Join Our Community</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The best way to experience Civic Pulse Media is to become part of our daily conversation. Follow our latest updates and never miss a story.
            </p>
            <div className="flex gap-4">
              <Link to="/" className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                Read Latest News
              </Link>
              <Link to="/contact" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
