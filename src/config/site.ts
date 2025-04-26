import {
  InstagramIcon,
  FacebookIcon,
  TwitchIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Food Dash",
  author: "Azhar Lone",
  description: "Order delicious Pakistani food with fast delivery",

  mainNav: [
    { title: "Home", href: "/", active: true },
    { title: "Menu", href: "/menu", active: false },
    { title: "Offers", href: "/offers", active: false },
    { title: "Service", href: "/service", active: false },
    { title: "About Us", href: "/about-us", active: false },
  ],

  hero: {
    title: {
      part1: "Quick",
      part2: "Tasty",
      part3: "Delivered",
      part4: "Speed",
    },
    primaryButton: "Order Now",
    secondaryButton: "Track Order",
  },

  features: [
    {
      title: "Fast Delivery",
      description: "Delivery Within 30 Mins",
      icon: "/placeholder.svg?height=40&width=40",
      bgColor: "bg-red-100",
    },
    {
      title: "Fresh Food",
      description: "100% Fresh To Your Home",
      icon: "/placeholder.svg?height=40&width=40",
      bgColor: "bg-green-100",
    },
    {
      title: "Free Delivery",
      description: "Absolutely Free, No Cost Just Eat",
      icon: "/placeholder.svg?height=40&width=40",
      bgColor: "bg-yellow-100",
    },
  ],

  bestDishesTitle: "Pakistani Dish",
  bestDishesDescription:
    "It's Not Just About Bringing You Good Food From Restaurants, We Deliver You Experience",

  bestDishes: [
    {
      name: "Pakistani Vegetable Biryani",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Lahori Chicken Karahi",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sindhi Biryani",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],

  regions: [
    "Sindh",
    "Punjab",
    "Balochistan",
    "Khyber Pakhtunkhwa",
    "Gilgit-Baltistan",
  ],

  regularMenuDescription:
    "These Are Our Regular Dishes, You Can Order Anything You Like",

  regularMenu: [
    {
      name: "Pakistani Dessert Kheer",
      price: "₨250",
      rating: 5,
      reviews: 100,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Pakistani Tea Time Snacks",
      price: "₨250",
      rating: 4.5,
      reviews: 80,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Pakistani Chai Pakora",
      price: "₨200",
      rating: 4.8,
      reviews: 90,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Lahori Chargha",
      price: "₨450",
      rating: 4.7,
      reviews: 120,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Karachi Haleem",
      price: "₨250",
      rating: 4.6,
      reviews: 90,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Peshawar Chapli Kabab",
      price: "₨350",
      rating: 4.9,
      reviews: 150,
      image: "/placeholder.svg?height=200&width=200",
    },
  ],

  menuCategories: [
    "All",
    "Biryani",
    "Karahi",
    "BBQ",
    "Desserts",
    "Breakfast",
    "Street Food",
    "Beverages",
  ],

  fullMenu: [
    {
      name: "Chicken Biryani",
      price: "₨300",
      rating: 4.8,
      reviews: 230,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices",
      category: "Biryani",
    },
    {
      name: "Mutton Biryani",
      price: "₨450",
      rating: 4.9,
      reviews: 180,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Basmati rice layered with tender mutton pieces and traditional Pakistani spices",
      category: "Biryani",
    },
    {
      name: "Chicken Karahi",
      price: "₨550",
      rating: 4.7,
      reviews: 210,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Tender chicken cooked with tomatoes, green chilies and karahi masala",
      category: "Karahi",
    },
    {
      name: "Seekh Kebab",
      price: "₨350",
      rating: 4.6,
      reviews: 150,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Minced meat mixed with herbs and spices, skewered and grilled to perfection",
      category: "BBQ",
    },
    {
      name: "Gulab Jamun",
      price: "₨150",
      rating: 4.8,
      reviews: 120,
      image: "/placeholder.svg?height=300&width=300",
      description: "Soft milk solids balls soaked in rose-flavored sugar syrup",
      category: "Desserts",
    },
    {
      name: "Halwa Puri",
      price: "₨200",
      rating: 4.7,
      reviews: 95,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Traditional Pakistani breakfast with semolina halwa, chickpea curry and deep-fried bread",
      category: "Breakfast",
    },
    {
      name: "Gol Gappay",
      price: "₨120",
      rating: 4.5,
      reviews: 85,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Crispy hollow puris filled with spicy tamarind water, chickpeas and potatoes",
      category: "Street Food",
    },
    {
      name: "Kashmiri Chai",
      price: "₨100",
      rating: 4.6,
      reviews: 75,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Pink tea made with special tea leaves, milk, and topped with crushed nuts",
      category: "Beverages",
    },
    {
      name: "Beef Nihari",
      price: "₨400",
      rating: 4.9,
      reviews: 200,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Slow-cooked beef stew with rich spices, traditionally eaten for breakfast",
      category: "Breakfast",
    },
    {
      name: "Malai Boti",
      price: "₨380",
      rating: 4.7,
      reviews: 110,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Tender chicken pieces marinated in cream and spices, then grilled to perfection",
      category: "BBQ",
    },
    {
      name: "Mutton Karahi",
      price: "₨650",
      rating: 4.8,
      reviews: 160,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Tender mutton cooked with tomatoes, green chilies and karahi masala",
      category: "Karahi",
    },
    {
      name: "Kheer",
      price: "₨180",
      rating: 4.5,
      reviews: 90,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Creamy rice pudding flavored with cardamom and topped with nuts",
      category: "Desserts",
    },
  ],

  coupon: {
    title: "PAKISTANI COUPON CODE",
    discount: "50% OFF",
    code: "FOODDASH50",
  },

  specialOffer: {
    title: "SPECIAL OFFER",
    description: "GET FLAT 25% OFF ON YOUR FIRST ORDER",
    discount: "25% OFF",
    phone: "+92-123-456-7890",
  },

  socialMedia: [
    {
      text: "Instagram",
      Icon: InstagramIcon,
    },
    {
      text: "Facebook",
      Icon: FacebookIcon,
    },

    {
      text: "Twitter",
      Icon: TwitchIcon,
    },

    {
      text: "YouTube",
      Icon: YoutubeIcon,
    },
    {
      text: "LinkedIn",
      Icon: LinkedinIcon,
    },
  ],

  footerLinks: {
    menu: [
      { title: "Home", href: "/" },
      { title: "Menu", href: "/menu" },
      { title: "Offers", href: "/offers" },
      { title: "Service", href: "/service" },
      { title: "About Us", href: "/about-us" },
    ],
    information: [
      { title: "Menu", href: "/menu" },
      { title: "Quality", href: "#" },
      { title: "Make A Choice", href: "#" },
      { title: "Fast Delivery", href: "/service" },
    ],
  },

  contact: [
    "+92123456789",
    "Example",
    "info@fooddash.com",
    "15, Gilgit, Pakistan",
  ],
};
