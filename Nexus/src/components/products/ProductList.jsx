import ProductCard from "./ProductCard";

const ProductList = ({ products, toggleStatus, deleteProduct }) => {
  if (products.length === 0) {
    return <p className="text-gray-500">No products added yet.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          toggleStatus={toggleStatus}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
