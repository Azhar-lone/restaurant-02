import React from "react";
import Image from "next/image";
const Deals = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-secondary rounded-3xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Combo Deals</h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          Save more with our specially curated combo meals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offerData.map((combo, index) => (
          <div key={index} className="bg-background p-6 rounded-xl shadow-sm">
            <div className="mb-4 relative h-48 rounded-lg overflow-hidden">
              <Image
                src={combo.image || "/placeholder.svg"}
                alt={combo.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{combo.title}</h3>
            <ul className="mb-4 space-y-1">
              {combo.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-foreground/60 flex items-center gap-2"
                >
                  <span className="text-primary">•</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xl font-bold text-primary">
                  {combo.price}
                </span>
                <span className="text-gray-400 line-through ml-2">
                  {combo.originalPrice}
                </span>
              </div>
              <button className="bg-primary text-foreground px-4 py-2 rounded-full text-sm">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;

const offerData = [
  {
    title: "Family Feast",
    items: [
      "Chicken Biryani (4 servings)",
      "Seekh Kebab (8 pcs)",
      "Raita",
      "Kheer (4 servings)",
    ],
    price: "₨1999",
    originalPrice: "₨2500",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Couple Special",
    items: [
      "Chicken Karahi (2 servings)",
      "Naan (4 pcs)",
      "Salad",
      "Gulab Jamun (4 pcs)",
    ],
    price: "₨1299",
    originalPrice: "₨1600",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Breakfast Bundle",
    items: [
      "Halwa Puri (2 servings)",
      "Chana Masala",
      "Omelette",
      "Chai (2 cups)",
    ],
    price: "₨699",
    originalPrice: "₨900",
    image: "/placeholder.svg?height=300&width=300",
  },
];
