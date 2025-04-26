import Image from "next/image"
import { siteConfig } from "@/config/site"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16 bg-secondary rounded-3xl">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">{siteConfig.hero.title.part1}</span> and{" "}
            <span className="text-primary">{siteConfig.hero.title.part2}</span>
            <br />
            Food <span className="text-primary">{siteConfig.hero.title.part3}</span> with{" "}
            <span className="text-primary">a</span>
            <br />
            Dash of <span className="text-foreground">{siteConfig.hero.title.part4}</span>
          </h1>
          <div className="mt-8 space-y-4">
            <button className="bg-primary text-white px-6 py-3 rounded-full font-medium">
              {siteConfig.hero.primaryButton}
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-full font-medium ml-4">
              {siteConfig.hero.secondaryButton}
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/placeholder.svg?height=384&width=384"
              alt="Food Thali"
              width={384}
              height={384}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
