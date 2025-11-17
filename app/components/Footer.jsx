import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-2 justify-between items-center text-gray-500">
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-gray-900">About Us</Link>
          <Link href="#" className="hover:text-gray-900">Contact</Link>
          <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
        </div>
        <p className="mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} News Today. All rights reserved.
        </p>
      </div>
    </footer>
  );
}