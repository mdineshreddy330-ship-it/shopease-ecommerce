const products = [
  /* ELECTRONICS */

  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    rating: 4.5,
    discount: "20% OFF",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },

  {
  id: 2,
  name: "Bluetooth Earbuds",
  category: "Electronics",
  rating: 4.3,
  discount: "15% OFF",
  price: 2499,
  image:
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
  },

  {
  id: 3,
  name: "Smart Home Hub",
  category: "Electronics",
  rating: 4.4,
  discount: "10% OFF",
  price: 5999,
  image:
    "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500",
  },

  {
    id: 4,
    name: "VR Headset",
    category: "Electronics",
    rating: 4.6,
    discount: "18% OFF",
    price: 12999,
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500",
  },

  /* WEARABLES */

  {
    id: 5,
    name: "Smart Watch",
    category: "Wearables",
    rating: 4.2,
    discount: "15% OFF",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },

  {
    id: 6,
    name: "Fitness Band",
    category: "Wearables",
    rating: 4.1,
    discount: "12% OFF",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
  },

  {
    id: 7,
    name: "AR Glasses",
    category: "Wearables",
    rating: 4.3,
    discount: "10% OFF",
    price: 15999,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
  },

  {
    id: 8,
    name: "Luxury Smartwatch",
    category: "Wearables",
    rating: 4.8,
    discount: "25% OFF",
    price: 18999,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
  },

  /* COMPUTERS */

  {
    id: 9,
    name: "Gaming Laptop",
    category: "Computers",
    rating: 4.8,
    discount: "10% OFF",
    price: 79999,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },

  {
    id: 10,
    name: "Mechanical Keyboard",
    category: "Computers",
    rating: 4.5,
    discount: "22% OFF",
    price: 4499,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
  },

  {
    id: 11,
    name: "Gaming Mouse",
    category: "Computers",
    rating: 4.4,
    discount: "20% OFF",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
  },

  {
    id: 12,
    name: "UltraWide Monitor",
    category: "Computers",
    rating: 4.7,
    discount: "15% OFF",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
  },

  /* MOBILES */

  {
    id: 13,
    name: "iPhone 15 Pro",
    category: "Mobiles",
    rating: 4.9,
    discount: "5% OFF",
    price: 129999,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },

  {
    id: 14,
    name: "Samsung Galaxy Ultra",
    category: "Mobiles",
    rating: 4.8,
    discount: "10% OFF",
    price: 99999,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
  },

  {
    id: 15,
    name: "OnePlus Pro",
    category: "Mobiles",
    rating: 4.5,
    discount: "18% OFF",
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
  },

  {
    id: 16,
    name: "Google Pixel",
    category: "Mobiles",
    rating: 4.6,
    discount: "12% OFF",
    price: 74999,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
  },

  /* SPEAKERS */

  {
    id: 17,
    name: "Bluetooth Speaker",
    category: "Speakers",
    rating: 4.4,
    discount: "25% OFF",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
  },

  {
    id: 18,
    name: "Home Theater Speaker",
    category: "Speakers",
    rating: 4.7,
    discount: "20% OFF",
    price: 15999,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
  },

  {
  id: 19,
  name: "Portable Speaker",
  category: "Speakers",
  rating: 4.3,
  discount: "15% OFF",
  price: 4999,
  image:
    "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
 },

  {
    id: 20,
    name: "Studio Speaker",
    category: "Speakers",
    rating: 4.8,
    discount: "18% OFF",
    price: 18999,
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500",
  },

  /* CAMERAS */

  {
    id: 21,
    name: "DSLR Camera",
    category: "Camera",
    rating: 4.7,
    discount: "18% OFF",
    price: 55999,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },

  {
    id: 22,
    name: "Mirrorless Camera",
    category: "Camera",
    rating: 4.8,
    discount: "12% OFF",
    price: 85999,
    image:
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500",
  },

  {
    id: 23,
    name: "Action Camera",
    category: "Camera",
    rating: 4.5,
    discount: "20% OFF",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=500",
  },

  {
    id: 24,
    name: "Cinema Camera",
    category: "Camera",
    rating: 4.9,
    discount: "8% OFF",
    price: 199999,
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
  },
];

export default products;