const ProductCard = ({ product, toggleStatus, deleteProduct }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded mb-2"
      />

      <h4 className="font-bold">{product.name}</h4>
      <p>₹ {product.price}</p>
      <p>Status: {product.active ? "Active" : "Inactive"}</p>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => toggleStatus(product._id || product.id)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Toggle
        </button>

        <button
          onClick={() => deleteProduct(product._id || product.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
