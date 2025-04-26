import Image from "next/image"

interface Feature {
  title: string
  description: string
  icon: string
  bgColor: string
}

interface FeaturesProps {
  features: Feature[]
}

export function Features({ features }: FeaturesProps) {
  return (
    <section className="container mx-auto px-4 py-8 -mt-16">
      <div className="bg-foreground text-background rounded-xl shadow-lg p-6 flex flex-col md:flex-row justify-between">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center mb-4 md:mb-0">
            <div className={`${feature.bgColor} p-3 rounded-full mr-4`}>
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={40} height={40} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-background/60 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
