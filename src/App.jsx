import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/layout";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="productdetails" element={<Pro />} />
      <Route path="notfound" element={<Home />} />
    </Route>
    
</Routes>
);
