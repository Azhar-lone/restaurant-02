"use client"

import { useState } from "react"

interface MenuCategoriesProps {
  categories: string[]
}

export function MenuCategories({ categories }: MenuCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === category ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 "
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}
