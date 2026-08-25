import { Link } from "react-router";
import { products } from "../data/products";

function Products() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Our Products
        </h1>

        <p className="mt-2 text-slate-600">
          Browse all available products.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* PRODUCT IMAGE */}
            <img
              src={`https://picsum.photos/seed/${product.id}/400`}
              alt={product.name}
              className="h-48 w-full object-cover"
            />

            {/* PRODUCT INFORMATION */}
            <div className="p-5">
              <h2 className="text-xl font-bold text-slate-900">
                {product.name}
              </h2>

              <p className="mt-2 text-slate-600">
                {product.description}
              </p>

              <p className="mt-4 text-lg font-bold text-blue-600">
                ₦{product.price.toLocaleString()}
              </p>

              <p className="mt-4 font-medium text-blue-600">
                View Details →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;