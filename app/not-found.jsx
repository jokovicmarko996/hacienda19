// import Link from "next/link";

// const NotFound = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
//       <h1 className="text-6xl font-bold text-gray-900">404</h1>
//       <p className="mt-4 text-lg text-gray-600">
//         Oops! The page you’re looking for doesn’t exist.
//       </p>
//       <Link href="/">
//         <button className="mt-6 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-lg font-medium">
//           Go Back Home
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default NotFound;

import Image from "next/image";
import Link from "next/link";
import pnf from "/public/page-not-found.jpg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-indigo-600">404</h1>
        <p className="mt-4 text-2xl text-gray-700 font-medium">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="mt-2 text-lg text-gray-500">
          It might have been moved or deleted.
        </p>
        <Link href="/">
          <button className="mt-6 inline-block px-8 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Go Back Home
          </button>
        </Link>
      </div>
      <div className="mt-10 w-3/4 max-w-lg relative">
        {/* <Image
          //   <Image
          //   src={pnf}
          //   fill
          //   placeholder="blur"
          //   quality={80}
          //   className="object-cover object-top"
          //   alt="Mountains and forests with two cabins"
          // />
          fill
          src="/public/page-not-found.jpg"
          alt="Page not found illustration"
          className="w-full h-auto"
        /> */}
      </div>
    </div>
  );
};

export default NotFound;
