import Link from 'next/link';

export default function ArticleCard({ article }) {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (e) {
      return '';
    }
  };
  
  const slug = article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  return (
    <Link
      href={`/article/${slug}`}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl"
    >
      <div className="shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={article.urlToImage || '/placeholder-image.jpg'}
          alt={article.title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-600">
            {article.source?.name || 'News'}
          </p>
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 line-clamp-3">
              {article.title}
            </p>
            <p className="mt-3 text-base text-gray-500 line-clamp-2">
              {article.description}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="text-sm text-gray-500">
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
}