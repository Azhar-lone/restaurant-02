import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
interface MenuItem {
  name: string
  price: string
  rating: number
  reviews: number
  image: string
  description: string
  category: string
}

interface MenuItemsProps {
  menuItems: MenuItem[]
}

export function MenuItems({ menuItems }: MenuItemsProps) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-background p-6 rounded-xl shadow-sm border flex flex-col">
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
            <div className="flex items-center mb-4">
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
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">{item.price}</span>
              <Button className=" rounded-full">Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
