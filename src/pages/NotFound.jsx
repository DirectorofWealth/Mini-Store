import { Link } from "react-router";

function NotFound() {
  return (
    <section className="py-20 text-center">
      <p className="text-6xl font-bold text-blue-600">
        404
      </p>

      <h1 className="mt-4 text-3xl font-bold text-slate-900">
        Page Not Found
      </h1>

      <p className="mt-3 text-slate-600">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
      >
        Go Home
      </Link>
    </section>
  );
}

export default NotFound;