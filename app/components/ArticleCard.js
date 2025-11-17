import ArticleCard from "./components/ArticleCard";
import CategoryFilters from "./components/CategoryFilters";

async function fetchNews(category, searchTerm) {
    const categoryParam = category ? `&category=${category}` : '&category=general';
    
    const searchParam = searchTerm ? `&q=${encodeURIComponent(searchTerm)}` : '';
    
    const countryParam = '&country=us';

    const URL = `https://newsapi.org/v2/top-headlines?${countryParam}${categoryParam}${searchParam}&apiKey=${process.env.NEWS_API_KEY}`;

    try {
        const res = await fetch(URL);

        if (!res.ok) {
        throw new Error(`Failed to fetch news: ${res.status}`);
        }

        const data = await res.json();

        if (data.status === 'error') {
        throw new Error(data.message || 'Error from NewsAPI');
        }

        return data.articles || [];
    } catch (error) {
        console.error(error);
        throw new Error(error.message || 'Failed to fetch news');
    }
    }

    export default async function Home({ searchParams }) {
    const category = searchParams?.category;
    const searchTerm = searchParams?.q;

    const articles = await fetchNews(category, searchTerm);

    const heroArticle = articles.length > 0 ? articles[0] : null;
    const recentArticles = articles.length > 1 ? articles.slice(1) : [];

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <CategoryFilters />

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

        <h2 className="text-2xl font-bold my-6">Recent Articles</h2>
        
        {recentArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
                <ArticleCard key={article.url || index} article={article} />
            ))}
            </div>
        ) : (
            <p>No recent articles found.</p>
        )}

        </main>
    );
}