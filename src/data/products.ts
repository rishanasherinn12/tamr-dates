import ajwa from "@/assets/product-ajwa.jpg";
import medjool from "@/assets/product-medjool.jpg";
import sukkari from "@/assets/product-sukkari.jpg";
import mabroom from "@/assets/product-mabroom.jpg";
import safawi from "@/assets/product-safawi.jpg";
import giftbox from "@/assets/product-giftbox.jpg";
import stuffed from "@/assets/product-stuffed.jpg";

export type Product = {
  slug: string;
  name: string;
  origin: string;
  shortDesc: string;
  description: string;
  taste: string;
  benefits: string[];
  price: number;     // INR per pack
  weight: string;
  image: string;
  category: "premium" | "classic" | "gift" | "specialty";
  featured?: boolean;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "ajwa-premium",
    name: "Ajwa Al Madinah",
    origin: "Madinah, Saudi Arabia",
    shortDesc: "The king of dates — soft, dark and prized",
    description:
      "Hand-picked from the sacred groves of Madinah, our Ajwa dates are revered for their soft texture, fine wrinkled skin and a delicate caramel-prune flavour. A timeless classic, treasured for centuries.",
    taste: "Soft, mildly sweet with notes of caramel and prune.",
    benefits: ["Rich in antioxidants", "Heart-friendly", "Natural energy boost", "Iron & magnesium"],
    price: 1499,
    weight: "500 g",
    image: ajwa,
    category: "premium",
    featured: true,
    badge: "Bestseller",
  },
  {
    slug: "medjool-jumbo",
    name: "Medjool Jumbo",
    origin: "Jordan Valley",
    shortDesc: "Large, plump and luxuriously soft",
    description:
      "Often called the queen of dates, our Jumbo Medjool dates are unusually large, with a soft fudgy interior and a glossy caramel skin. Indulgent on their own or stuffed with nuts.",
    taste: "Rich, honey-like sweetness with a buttery finish.",
    benefits: ["High in fibre", "Potassium-rich", "Natural sweetener", "Slow-release energy"],
    price: 999,
    weight: "500 g",
    image: medjool,
    category: "premium",
    featured: true,
    badge: "Premium",
  },
  {
    slug: "sukkari-royal",
    name: "Sukkari Royal",
    origin: "Al Qassim, Saudi Arabia",
    shortDesc: "Golden, melt-in-your-mouth indulgence",
    description:
      "Sukkari — meaning 'sugary' in Arabic — is loved for its golden hue and crystalline sweetness. A favourite across the Gulf, it pairs beautifully with Arabic coffee.",
    taste: "Crisp outside, soft inside with intense honeyed sweetness.",
    benefits: ["Quick energy", "Rich in calcium", "Digestive support"],
    price: 849,
    weight: "500 g",
    image: sukkari,
    category: "classic",
    featured: true,
  },
  {
    slug: "mabroom-special",
    name: "Mabroom Special",
    origin: "Madinah, Saudi Arabia",
    shortDesc: "Long, firm and chewy with deep flavour",
    description:
      "Mabroom dates are slender and elegant, with a firmer chew and a long, lingering sweetness. A connoisseur's choice for those who love structure with their flavour.",
    taste: "Chewy, with deep molasses and toffee notes.",
    benefits: ["Rich in fibre", "Vitamin B6", "Sustained energy"],
    price: 749,
    weight: "500 g",
    image: mabroom,
    category: "classic",
  },
  {
    slug: "safawi-classic",
    name: "Safawi Classic",
    origin: "Madinah, Saudi Arabia",
    shortDesc: "Smooth, dark and gently sweet",
    description:
      "Often considered Ajwa's sibling, Safawi offers a smoother skin and a milder, less sugary flavour — a wonderful everyday luxury.",
    taste: "Smooth, mild and balanced.",
    benefits: ["Low glycemic load", "Iron-rich", "Antioxidants"],
    price: 599,
    weight: "500 g",
    image: safawi,
    category: "classic",
  },
  {
    slug: "stuffed-luxe",
    name: "Stuffed Luxe Dates",
    origin: "House Blend",
    shortDesc: "Premium dates filled with whole almonds & pistachios",
    description:
      "Hand-stuffed in small batches with roasted whole almonds and Iranian pistachios. The perfect bite-sized indulgence — and an unforgettable gift.",
    taste: "Sweet, nutty, buttery — all in one bite.",
    benefits: ["Protein & healthy fats", "Magnesium", "Indulgent yet wholesome"],
    price: 1299,
    weight: "400 g",
    image: stuffed,
    category: "specialty",
    featured: true,
    badge: "New",
  },
  {
    slug: "ramadan-gift-box",
    name: "Ramadan Signature Gift Box",
    origin: "Curated Selection",
    shortDesc: "An assortment of our finest dates in a luxury box",
    description:
      "Our signature Ramadan gift box brings together Ajwa, Medjool, Sukkari and Mabroom in a beautifully crafted cream-and-gold case. The perfect gesture for family, friends and clients.",
    taste: "A guided journey through our most-loved varieties.",
    benefits: ["Curated by our buyers", "Gift-ready packaging", "Includes greeting card"],
    price: 2499,
    weight: "1.2 kg",
    image: giftbox,
    category: "gift",
    badge: "Limited",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const featured = products.filter((p) => p.featured);
