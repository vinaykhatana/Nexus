import { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import ProductForm from "../components/products/ProductForm";
import ProductList from "../components/products/ProductList";

const Products = () => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("nexus_products");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("nexus_products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const toggleStatus = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, active: !p.active } : p
      )
    );
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">
        Product / Service Promotion
      </h2>

      <ProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        toggleStatus={toggleStatus}
        deleteProduct={deleteProduct}
      />
    </Layout>
  );
};

export default Products;
