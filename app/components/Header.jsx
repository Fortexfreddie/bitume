'use client'; 

import Link from 'next/link';
import { Newspaper } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function Header() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'general';

  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="shrink-0">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold text-gray-900"
          >
            <Newspaper className="w-6 h-6 mr-2 text-blue-600" />
            NewsToday
          </Link>
        </div>

        <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
          <div className="max-w-lg w-full lg:max-w-xs">
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
                defaultValue={searchParams.get('q') || ''}
              />
              {/* This hidden input will now always have a value */}
              <input type="hidden" name="category" value={currentCategory} />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}