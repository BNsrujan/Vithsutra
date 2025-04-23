// import React from "react";

// function NotFound() {
//   return (
//     <div className="flex contain-content text-center h-screen  ">
//       <div></div>
//       <div>
//         <h1 className="text-company-black openfield-text"> Page Not Found</h1>
//         <p className="text-company-text-gray h-screen">
//           The page you are searching isn't available{" "}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default NotFound;


import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-6xl font-bold text-company-primary-royalBlue">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Page not found
      </p>
      <p className="mt-2 text-gray-600">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center px-4 py-2 bg bg-company-primary-royalBlue text-white rounded-md hover:bg-blue-700 transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go back home
      </Link>
    </div>
  );
}
