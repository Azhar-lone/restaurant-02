import Image from "next/image"
import { Star } from "lucide-react"
import { siteConfig } from "@/config/site"

interface MenuItem {
  name: string
  price: string
  rating: number
  reviews: number
  image: string
}

interface RegularMenuProps {
  menuItems: MenuItem[]
}

export function RegularMenu({ menuItems }: RegularMenuProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Our <span className="text-primary">Regular</span> Menu
        </h2>
        <button className="bg-primary text-white px-4 py-2 rounded-full">See All</button>
      </div>
      <p className="text-gray-500 mb-8">{siteConfig.regularMenuDescription}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-48 h-48 rounded-full border-2 border-dashed border-primary p-2">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="font-bold text-center">{item.name}</h3>
            <div className="flex items-center mt-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${i < Math.floor(item.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              <span className="text-gray-500 text-sm ml-1">({item.reviews})</span>
            </div>
            <div className="flex items-center mt-2 gap-4">
              <span className="font-bold">{item.price}</span>
              <button className="bg-primary text-white text-sm px-3 py-1 rounded-full">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
