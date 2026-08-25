

import "./index.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route index element={<Home />} />

          <Route
            path="products"
            element={<Products />}
          />

          <Route
            path="products/:id"
            element={<ProductDetail />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
