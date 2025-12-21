import { useState, useEffect, useContext } from "react";
import Layout from "../components/common/Layout";
import ProductForm from "../components/products/ProductForm";
import ProductList from "../components/products/ProductList";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      fetchProducts();
    }
  }, [token]);

  const fetchProducts = async () => {
    try {
      const res = await api.get('/products');
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    try {
      const res = await api.post('/products', product);
      setProducts([...products, res.data]);
    } catch (err) {
      console.error("Failed to add product", err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Failed to delete product", err);
    }
  };

  const toggleStatus = async (id) => {
    // Backend apparently doesn't have an explicit toggle route in listed routes,
    // assuming update capability or just client-side for now if backend is limited.
    // Ideally:
    /*
    const product = products.find(p => p._id === id);
    try {
        await api.put(`/products/${id}`, { active: !product.active });
        setProducts(products.map(p => p._id === id ? { ...p, active: !p.active } : p));
    } catch(err) { console.error(err) }
    */
    // Fallback to local update for UI responsiveness if no specific route:
    setProducts(
      products.map((p) =>
        p._id === id ? { ...p, active: !p.active } : p
      )
    );
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">
        Product / Service Promotion
      </h2>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <>
          <ProductForm addProduct={addProduct} />
          <ProductList
            products={products}
            toggleStatus={toggleStatus}
            deleteProduct={deleteProduct}
          />
        </>
      )}
    </Layout>
  );
};

export default Products;
