import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-8">
      <span className="text-5xl">📭 Page not found</span>
      <Link
        to="/"
        className="rounded-full bg-blue-500 text-white px-4 py-2 text-lg"
      >
        Go to home
      </Link>
    </div>
  );
}

export default NotFound;
