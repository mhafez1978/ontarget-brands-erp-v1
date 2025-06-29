import Link from "next/link";
import Image from "next/image";
import { Link2 } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-evenley pt-[20vh] bg-white">
      <div className="w-full max-w-md text-center mb-8">
        <Image
          src="/on-target-error-img.jpg"
          alt="404 Not Found"
          width={800}
          height={400}
          className="mx-auto mb-6 -mr-20 object-cover rounded-lg"
        />
      </div>
      <div className="w-full max-w-4xl mb-8">
        <h1 className="text-7xl text-center font-bold mb-4">404</h1>
        <p className="flex flex-row items-center justify-center  gap-2 text-xl text-gray-600 mb-4">
          Oops! Page not found, did you loose your way?
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            <span className="flex flex-row items-center gap-4 space-x-2">
              <Link2 /> Return to Home
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
