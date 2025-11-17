export const dynamic = 'force-dynamic';

import ArticleCard from "./components/ArticleCard";
import CategoryFilters from "./components/CategoryFilters";
import Header from "./components/Header";
import Footer from "./components/Footer";

async function fetchNews(category, searchTerm) {
  const params = new URLSearchParams({
    country: 'us',
    apiKey: process.env.NEWS_API_KEY,
    category: category || 'general',
  });

  if (searchTerm) {
    params.append('q', searchTerm);
  }

  const URL = `https://newsapi.org/v2/top-headlines?${params.toString()}`;
  console.log("Fetching URL:", URL);

  try {
    const res = await fetch(URL, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      const errorBody = await res.json();
      throw new Error(`API Error (${res.status}): ${errorBody.message}`);
    }

    const data = await res.json();
    if (data.status === 'error') throw new Error(data.message);
    return data.articles || [];

  } catch (error) {
    console.error(error);
    throw new Error(error.message || 'Failed to fetch news');
  }
}

export default async function Home({ searchParams }) {
  console.log("Received searchParams:", searchParams);
  const category = searchParams?.category;
  const searchTerm = searchParams?.q;

  const articles = await fetchNews(category, searchTerm);

  const heroArticle = articles.length > 0 ? articles[0] : null;
  const recentArticles = articles.length > 1 ? articles.slice(1) : [];

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-20">

        <div className="flex flex-col justify-center px-2 w-full">
          <div className="w-full">
            <form method="GET" action="/" className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                id="search"
                name="q"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </form>
          </div>
        </div>
        
        <CategoryFilters />

        {/* Hero Section */}
        {heroArticle && (
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden my-8">
            <img
              src={heroArticle.urlToImage || '/placeholder-image.jpg'}
              alt={heroArticle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="text-white text-3xl md:text-4xl font-bold max-w-2xl">
                {heroArticle.title}
              </h1>
              <p className="text-gray-200 mt-2 max-w-2xl">
                {heroArticle.description}
              </p>
              <a
                href={heroArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold mt-4 hover:bg-blue-700 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        )}

        {/* Recent Articles Grid */}
        <h2 className="text-2xl font-bold my-6">Recent Articles</h2>
        
        {recentArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <ArticleCard key={article.url || index} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No articles found.</p>
        )}
      </main>
      <Footer />
    </>
  );
}