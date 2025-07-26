import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-company-white p-6 text-center">
      <h1 className="text-6xl font-bold text-company-primary-royalBlue">404</h1>
      <p className="mt-4 text-2xl font-semibold text-company-primary-royalBlue">
        Page not found
      </p>
      <p className="mt-2 text-gray-600">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center px-6 py-4  font-semibold bg bg-company-primary-royalBlue text-white rounded-md hover:bg-company-primary-royalBlue transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2 font-semibold" />
        Go back home
      </Link>
    </div>
  );
}
