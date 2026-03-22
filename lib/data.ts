import { ProductSchema, type Product } from "./schemas";

// Sample products data - types are automatically inferred
export const sampleProducts = [
  {
    id: "tshirt-1",
    name: "Classic White T-Shirt",
    price: 25.0,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 124,
    category: "tshirts",
    badge: "Essential"
  },
  {
    id: "tshirt-2",
    name: "Navy Blue Cotton Tee",
    price: 28.0,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 89,
    category: "tshirts"
  },
  {
    id: "handbag-1",
    name: "Leather Tote Bag",
    price: 150.0,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 156,
    category: "handbags",
    badge: "Premium"
  },
  {
    id: "handbag-2",
    name: "Quilted Crossbody Bag",
    price: 120.0,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 203,
    category: "handbags"
  },
  {
    id: "cap-1",
    name: "Baseball Cap",
    price: 25.0,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 67,
    category: "caps"
  },
  {
    id: "cap-2",
    name: "Wool Beanie",
    price: 30.0,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d06c9fe?q=80&w=800&auto=format&fit=crop",
    rating: 4.4,
    reviews: 45,
    category: "caps",
    badge: "Winter"
  },
  {
    id: "shoes-1",
    name: "Sleek Running Shoes",
    price: 110.0,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 312,
    category: "shoes",
    badge: "Performance"
  },
  {
    id: "shoes-2",
    name: "Leather Loafers",
    price: 140.0,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 128,
    category: "shoes"
  },
  {
    id: "watch-1",
    name: "Luxury Chronograph",
    price: 450.0,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 54,
    category: "watches",
    badge: "Luxury"
  },
  {
    id: "watch-2",
    name: "Minimalist Analog Watch",
    price: 180.0,
    image: "https://images.unsplash.com/photo-1508685096489-7aac29a23fce?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 92,
    category: "watches"
  },
  {
    id: "sunglasses-1",
    name: "Classic Aviator Sunglasses",
    price: 120.0,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 175,
    category: "sunglasses",
    badge: "Classic"
  },
  {
    id: "sunglasses-2",
    name: "Wayfarer Style Frames",
    price: 95.0,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 210,
    category: "sunglasses"
  }
] as const;


// Validate and export products with proper typing
export const products: Product[] = sampleProducts.map((product) => ProductSchema.parse(product));

// Categories data with inferred types
export const categories = [
  {
    name: "T-shirts",
    href: "/products?category=tshirts",
    count: "50+ items"
  },
  {
    name: "Hand bags",
    href: "/products?category=handbags",
    count: "40+ items"
  },
  {
    name: "Caps",
    href: "/products?category=caps",
    count: "30+ items"
  },
  {
    name: "Shoes",
    href: "/products?category=shoes",
    count: "60+ items"
  },
  {
    name: "Watches",
    href: "/products?category=watches",
    count: "25+ items"
  },
  {
    name: "Sun glasses",
    href: "/products?category=sunglasses",
    count: "35+ items"
  }
] as const;

// Testimonials data with inferred types
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Designer",
    content:
      "Amazing quality products and exceptional customer service. I've been shopping here for over a year and never been disappointed.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Developer",
    content:
      "Fast shipping, great prices, and the products always exceed my expectations. Highly recommend this store to everyone.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Manager",
    content:
      "The attention to detail in both products and packaging is incredible. This is my go-to store for premium tech accessories.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60"
  }
] as const;

// Export inferred types
export type Category = (typeof categories)[number];
export type Testimonial = (typeof testimonials)[number];
