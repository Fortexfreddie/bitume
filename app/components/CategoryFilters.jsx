'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const categories = ['general', 'business', 'technology', 'entertainment', 'sports', 'health', 'science'];

export default function CategoryFilters() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'general';
  const currentSearch = searchParams.get('q');

  const createQueryString = (category) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', category);
    
    if (currentSearch) {
      params.set('q', currentSearch);
    } else {
      params.delete('q');
    }
    return params.toString();
  };

  return (
    <nav className="my-8 border-b border-gray-200">
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/?${createQueryString(category)}`}
            className={`capitalize whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${currentCategory === category
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}