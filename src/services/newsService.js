/**
 * Mock News Service
 * In a real app, this would fetch from a REST API or GraphQL endpoint.
 */

/**
 * News Service
 * Fetches real-time news from free public APIs.
 * Fallback to mock data if APIs are unavailable.
 */

const OK_SURF_API = "https://ok.surf/api/v1/cors/news-feed";
const SPACE_NEWS_API = "https://api.spaceflightnewsapi.net/v4/articles/";

// Fallback Mock Data
const MOCK_ARTICLES = [
  {
    id: "m1",
    slug: "future-of-web-development-2026",
    title: "The Future of Web Development in 2026",
    excerpt: "Explore the latest trends in web development, from AI-driven coding to the rise of edge computing.",
    content: "<p>Web development is evolving faster than ever. In 2026, we're seeing a massive shift towards AI-integrated workflows and edge-first architectures.</p>",
    author: "Jane Doe",
    date: new Date().toISOString(),
    category: "Technology",
    image: "https://picsum.photos/seed/tech/1200/630",
    tags: ["WebDev", "AI"],
  }
];

/**
 * Helper to generate a slug from a title
 */
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const newsService = {
  /**
   * Fetch articles from public APIs
   */
  async getArticles(category = null) {
    try {
      // Try ok.surf API first for general news
      const response = await fetch(OK_SURF_API);
      if (!response.ok) throw new Error("Network response was not ok");
      
      const data = await response.json();
      let allArticles = [];

      // Flatten the ok.surf categories into a single list
      Object.keys(data).forEach(cat => {
        data[cat].forEach(article => {
          allArticles.push({
            id: generateSlug(article.title).slice(0, 10) + Math.random().toString(36).substr(2, 5),
            slug: generateSlug(article.title),
            title: article.title,
            excerpt: `Latest update from ${article.source}. Stay informed with the most recent developments in ${cat}.`,
            content: `<p>This article was originally published by <strong>${article.source}</strong>.</p><p><a href="${article.link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold">Read full article on ${article.source} &rarr;</a></p>`,
            author: article.source,
            date: new Date().toISOString(), // API doesn't provide date, using current
            category: cat === "Business" ? "Finance" : (cat === "Entertainment" || cat === "Health" ? "Lifestyle" : "Technology"),
            image: article.og || `https://picsum.photos/seed/${generateSlug(article.source)}/1200/630`,
            tags: [cat, article.source],
            link: article.link
          });
        });
      });

      // Sort by "date" (though they are all current in this API)
      let filtered = allArticles;
      if (category) {
        filtered = allArticles.filter(a => a.category.toLowerCase() === category.toLowerCase());
      }

      // If we have no results for a specific category, try Spaceflight News for "Technology"
      if (filtered.length === 0 && (category === "technology" || !category)) {
        const spaceRes = await fetch(`${SPACE_NEWS_API}?limit=10`);
        const spaceData = await spaceRes.json();
        const spaceArticles = spaceData.results.map(item => ({
          id: item.id.toString(),
          slug: generateSlug(item.title),
          title: item.title,
          excerpt: item.summary,
          content: `<p class="text-lg text-gray-700 leading-relaxed mb-6">${item.summary}</p><p><a href="${item.url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold">Read full article on ${item.news_site} &rarr;</a></p>`,
          author: item.news_site,
          date: item.published_at,
          category: "Technology",
          image: item.image_url,
          tags: ["Space", "Technology"],
          link: item.url
        }));
        filtered = [...filtered, ...spaceArticles];
      }

      return filtered.length > 0 ? filtered : MOCK_ARTICLES;
    } catch (error) {
      console.error("News API Error:", error);
      return MOCK_ARTICLES;
    }
  },

  /**
   * Fetch a single article by slug
   * Since we don't have a backend, we'll fetch all and find the one
   */
  async getArticleBySlug(slug) {
    const articles = await this.getArticles();
    const article = articles.find(a => a.slug === slug);
    if (article) return article;
    
    // Check mock data as last resort
    const mock = MOCK_ARTICLES.find(a => a.slug === slug);
    if (mock) return mock;

    throw new Error("Article not found");
  },

  /**
   * Fetch related articles
   */
  async getRelatedArticles(currentSlug, category, limit = 3) {
    const articles = await this.getArticles(category);
    return articles
      .filter(a => a.slug !== currentSlug)
      .slice(0, limit);
  },

  /**
   * Search articles
   */
  async searchArticles(query) {
    const articles = await this.getArticles();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase())
    );
  },
};
