interface RegionTabsProps {
  regions: string[]
}

export function RegionTabs({ regions }: RegionTabsProps) {
  return (
    <section className="container mx-auto px-4 py-4">
      <div className="flex flex-wrap justify-center gap-4">
        {regions.map((region, index) => (
          <button key={index} className="flex items-center px-4 py-2 border border-gray-200 rounded-full">
            <span className="mr-2">+</span>
            {region}
          </button>
        ))}
      </div>
    </section>
  )
}
