import React from "react";
import { MdDelete } from "react-icons/md";

const CartContents = () => {
  const products = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 40,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Sneakers",
      size: "10",
      color: "White",
      quantity: 1,
      price: 60,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Hoodie",
      size: "XL",
      color: "Black",
      quantity: 1,
      price: 50,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productId: 5,
      name: "Cap",
      size: "One Size",
      color: "Green",
      quantity: 1,
      price: 20,
      image: "https://picsum.photos/200?random=5",
    },
    {
      productId: 6,
      name: "Watch",
      size: "Adjustable",
      color: "Silver",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200?random=6",
    },
    {
      productId: 7,
      name: "Backpack",
      size: "Large",
      color: "Grey",
      quantity: 1,
      price: 70,
      image: "https://picsum.photos/200?random=7",
    },
    {
      productId: 8,
      name: "Sunglasses",
      size: "Medium",
      color: "Black",
      quantity: 1,
      price: 30,
      image: "https://picsum.photos/200?random=8",
    },
    {
      productId: 9,
      name: "Jacket",
      size: "L",
      color: "Brown",
      quantity: 1,
      price: 90,
      image: "https://picsum.photos/200?random=9",
    },
    {
      productId: 10,
      name: "Gloves",
      size: "M",
      color: "Dark Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=10",
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between border-b py-4"
        >
          <div className="flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="mr-4 h-24 w-20 rounded object-cover"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="mt-2 flex items-center">
                <button className="rounded border px-2 text-lg font-medium hover:bg-orange-500">
                  +
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="rounded border px-2 text-lg font-medium hover:bg-orange-500">
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-medium">${product.price.toLocaleString()}</p>
            <button>
              <MdDelete className="mt-2 h-5 w-5 text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
