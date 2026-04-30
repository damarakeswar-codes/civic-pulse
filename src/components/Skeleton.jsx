import { cn } from "../utils/cn";

/**
 * Skeleton Loader for Article Cards
 */
export function ArticleSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 animate-pulse">
      <div className="aspect-video bg-gray-200 dark:bg-gray-800"></div>
      <div className="p-6">
        <div className="h-3 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
        <div className="h-6 w-full bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
        <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>
    </div>
  );
}

/**
 * Skeleton Loader for Article Detail
 */
export function ArticleDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto animate-pulse">
      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
      <div className="h-12 w-full bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>
      <div className="h-4 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-8"></div>
      <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>
    </div>
  );
}
