import Image from "next/image"
import { siteConfig } from "@/config/site"

export function CouponSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-dashed border-primary rounded-xl p-6 flex flex-col items-center">
          <h3 className="text-primary font-bold mb-4">{siteConfig.coupon.title}</h3>
          <div className="bg-primary bg-opacity-10 px-8 py-4 rounded-lg mb-4">
            <span className="text-primary font-bold text-xl">{siteConfig.coupon.discount}</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="w-8 h-8">
              <Image src="/placeholder.svg?height=32&width=32" alt="Scissors" width={32} height={32} />
            </div>
            <span className="text-gray-500">{siteConfig.coupon.code}</span>
            <div className="w-8 h-8">
              <Image src="/placeholder.svg?height=32&width=32" alt="Scissors" width={32} height={32} />
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-bold mb-2">{siteConfig.specialOffer.title}</h3>
            <p className="text-white text-sm mb-4">{siteConfig.specialOffer.description}</p>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-white bg-opacity-20 p-2 rounded-md text-white text-center text-xs">
                  {siteConfig.specialOffer.discount}
                </div>
              ))}
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-white text-primary px-4 py-2 rounded-full text-sm font-bold">ORDER NOW</button>
            <span className="text-white">{siteConfig.specialOffer.phone}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
