import { Link } from "react-router";

function Home() {
  return (
    <section className="py-16 text-center">
      <p className="mb-4 font-medium text-blue-600">
        Welcome to Mini Store
      </p>

      <h1 className="mx-auto max-w-2xl text-4xl font-bold text-slate-900">
        Find products you need at prices you can understand.
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-slate-600">
        Browse our collection of phones, laptops, earbuds, and speakers.
      </p>

      <Link
        to="/products"
        className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        View Products
      </Link>
    </section>
  );
}

export default Home;