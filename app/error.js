'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center my-20 p-8 bg-red-100 border border-red-400 text-red-700 rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-4">{error.message || "Failed to load news."}</p>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={
          // Attempt to rerender the route
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}