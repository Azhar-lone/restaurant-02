import Image from "next/image"
import { siteConfig } from "@/config/site"

interface Dish {
  name: string
  image: string
}

interface BestDishesProps {
  dishes: Dish[]
}

export function BestDishes({ dishes }: BestDishesProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Our <span className="text-primary">Best Delivered</span>
            <br />
            {siteConfig.bestDishesTitle}
          </h2>
        </div>
        <p className="text-gray-500 max-w-md mt-4 md:mt-0">{siteConfig.bestDishesDescription}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dishes.map((dish, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-48 h-48 rounded-full border-2 border-dashed border-primary p-2">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="font-bold text-center">{dish.name}</h3>
            <button className="text-primary mt-2 font-medium">Order Now →</button>
          </div>
        ))}
      </div>
    </section>
  )
}
