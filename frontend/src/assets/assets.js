import hero from "./hero.jpg";
import logo from "./logo.png";
import nimko from "./nimko.webp";
import dryfruit from "./dryfruit.jpg";
import login from "./login.webp";

const newArrivals = [
  {
    _id: "1",
    name: "Peanuts",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Peanuts",
      },
    ],
  },
  {
    _id: "2",
    name: "Almonds",
    price: 850,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Almonds",
      },
    ],
  },
  {
    _id: "3",
    name: "Cashews",
    price: 950,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Cashews",
      },
    ],
  },
  {
    _id: "4",
    name: "Walnuts",
    price: 1100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Walnuts",
      },
    ],
  },
  {
    _id: "5",
    name: "Pistachios",
    price: 1200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Pistachios",
      },
    ],
  },
  {
    _id: "6",
    name: "Raisins",
    price: 450,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Raisins",
      },
    ],
  },
  {
    _id: "7",
    name: "Dried Figs",
    price: 1350,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Dried Figs",
      },
    ],
  },
  {
    _id: "8",
    name: "Dates",
    price: 800,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Dates",
      },
    ],
  },
  {
    _id: "9",
    name: "Chia Seeds",
    price: 600,
    images: [
      {
        url: "https://picsum.photos/500/500?random=9",
        altText: "Chia Seeds",
      },
    ],
  },
  {
    _id: "10",
    name: "Sunflower Seeds",
    price: 500,
    images: [
      {
        url: "https://picsum.photos/500/500?random=10",
        altText: "Sunflower Seeds",
      },
    ],
  },
];
const topCollection = [
  {
    _id: "1",
    name: "Peanuts",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Peanuts",
      },
    ],
  },
  {
    _id: "2",
    name: "Almonds",
    price: 850,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Almonds",
      },
    ],
  },
  {
    _id: "3",
    name: "Cashews",
    price: 950,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Cashews",
      },
    ],
  },
  {
    _id: "4",
    name: "Walnuts",
    price: 1100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Walnuts",
      },
    ],
  },
  {
    _id: "5",
    name: "Pistachios",
    price: 1200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Pistachios",
      },
    ],
  },
  {
    _id: "6",
    name: "Raisins",
    price: 450,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Raisins",
      },
    ],
  },
  {
    _id: "7",
    name: "Dried Figs",
    price: 1350,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Dried Figs",
      },
    ],
  },
  {
    _id: "8",
    name: "Dates",
    price: 800,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Dates",
      },
    ],
  },
];
const similarProducts = [
  {
    _id: "1",
    name: "Peanuts",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Peanuts",
      },
    ],
  },
  {
    _id: "2",
    name: "Almonds",
    price: 850,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Almonds",
      },
    ],
  },
  {
    _id: "3",
    name: "Cashews",
    price: 950,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Cashews",
      },
    ],
  },
  {
    _id: "4",
    name: "Walnuts",
    price: 1100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Walnuts",
      },
    ],
  },
];

const bestSeller = {
  name: "Spicy Nimko",
  price: 120,
  originalprice: 150,
  description: "This is the spiciest nimko you have had",
  brand: "Jaan",
  material: "Nimko",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=9",
      altText: "Stylish Nimko",
    },
    {
      url: "https://picsum.photos/500/500?random=8",
      altText: "Stylish Nimko 2",
    },
  ],
};

export const assets = {
  hero,
  logo,
  nimko,
  dryfruit,
  newArrivals,
  bestSeller,
  similarProducts,
  topCollection,
  login,
};
