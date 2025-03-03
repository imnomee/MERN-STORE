import { Link } from "react-router-dom";

const ProductsGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <Link key={index} to={`/products/${product._id}`} className="block">
          <div className="rounded-lg bg-white p-4">
            <div className="mb-4 h-96 w-full">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex justify-between px-8">
              <h3 className="mb-2 text-sm">{product.name}</h3>
              <p className="text-sm font-medium tracking-tighter text-gray-500">
                ${product.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsGrid;
