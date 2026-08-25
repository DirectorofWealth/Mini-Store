import { Link, useNavigate, useParams } from "react-router";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Product Not Found
        </h1>

        <p className="mt-3 text-slate-600">
          The product you are looking for does not exist.
        </p>

        <Link
          to="/products"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
        >
          Back to Products
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-3xl">

      <button
        onClick={() => navigate(-1)}
        className="text-slate-500 transition hover:text-blue-600"
      >
        ← Back
      </button>

      <div className="mt-6 grid overflow-hidden rounded-xl bg-white shadow-lg md:grid-cols-2">

        <img
          src={`https://picsum.photos/seed/${product.id}/600`}
          alt={product.name}
          className="h-full min-h-80 w-full object-cover"
        />


        <div className="p-8">
          <p className="font-medium text-blue-600">
            Product #{product.id}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            {product.name}
          </h1>

          <p className="mt-5 leading-7 text-slate-600">
            {product.description}
          </p>

          <p className="mt-8 text-2xl font-bold text-blue-600">
            ₦{product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ProductDetail;