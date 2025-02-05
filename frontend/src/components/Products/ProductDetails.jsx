import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { toast } from "sonner";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    } else if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select a Size and Color", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart.", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
      setQuantity(1);
      setSelectedColor("");
      setSelectedSize("");
    }, 2000);
  };

  useEffect(() => {
    if (assets.bestSeller?.images?.length > 0) {
      setMainImage(assets.bestSeller.images[0].url);
    }
  }, [assets.bestSeller]);
  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl rounded-lg bg-white p-8">
        <div className="flex flex-col md:flex-row">
          <div className="mr-6 hidden flex-col space-y-4 md:flex">
            {assets.bestSeller.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className={`h-20 w-20 cursor-pointer rounded-lg border object-cover ${mainImage === image.url ? "border-2 border-orange-500" : "b border-black"}`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="main Product"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="overscroll-x-scroll mb-4 flex space-x-4 md:hidden">
            {assets.bestSeller.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className={`h-20 w-20 cursor-pointer rounded-lg border object-cover ${mainImage === image.url ? "border-2 border-orange-500" : "b border-black"}`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          <div className="md:ml-10 md:w-1/2">
            <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
              {assets.bestSeller.name}
            </h1>
            <p className="mb-1 text-lg text-gray-600 line-through">
              {assets.bestSeller.originalprice &&
                `$${assets.bestSeller.originalprice}`}
            </p>
            <p className="mb-2 text-xl text-gray-500">
              {assets.bestSeller.price && `$${assets.bestSeller.price}`}
            </p>
            <p className="mb-4 text-gray-600">
              {assets.bestSeller.description}
            </p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="mt-2 flex gap-2">
                {assets.bestSeller.colors.map((color, index) => (
                  <button
                    onClick={() => setSelectedColor(color)}
                    key={index}
                    className={`h-8 w-8 rounded-full border ${selectedColor === color ? "border-4 border-orange-500" : "border-none"}`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="mt-2 flex gap-2">
                {assets.bestSeller.sizes.map((size) => (
                  <button
                    className={`rounded border px-4 py-2 ${selectedSize === size ? "bg-orange-500 text-white" : ""}`}
                    key={size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="mt-2 flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="rounded bg-gray-200 px-2 py-1 text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="rounded bg-gray-200 px-2 py-1 text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`mb-4 w-full rounded px-6 py-2 text-white ${isButtonDisabled ? "cursor-not-allowed bg-gray-500" : "bg-yellow-500"}`}
            >
              {isButtonDisabled ? "Adding..." : "Add to Cart"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="mb-4 text-xl font-bold">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{assets.bestSeller.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{assets.bestSeller.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
