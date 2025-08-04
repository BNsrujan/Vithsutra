import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-company-white p-6 text-center">
      <h1 className="text-6xl font-bold text-company-primary-royalBlue">404</h1>
      <p className="mt-4 text-2xl font-semibold text-company-primary-royalBlue">
        Page not found
      </p>
      <p className="mt-2 text-gray-600 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-6 py-4 font-bold text-white bg-company-primary-royalBlue rounded-md hover:bg-company-primary-royalBlue transition-colors"
      >
        <ArrowLeft className="w-icon-width h-icon-height text-white" color='white'  strokeWidth={2.5}/>
        Go back home
      </Link>
    </div>
  );
}
