import Image from "next/image";
import Link from "next/link";
import notFoundImage from "/public/images/404.png";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-bright h-screen">
      <div>
        <Image
          src={notFoundImage}
          width={400}
          height={350}
          alt="Not found error page"
        />
      </div>
      <div className="text-center text-gray-800">
        <h2 className="text-2xl font-bold pb-3">Looks like you&apos;re lost</h2>
        <p className="proggy text-xl">
          The page you are looking for is not available, come back tomorrow
        </p>
        <p className="mt-4 text-domain">
          <Link href="/">go back home</Link>
        </p>
      </div>
    </div>
  );
}
