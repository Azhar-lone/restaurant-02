import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
const Coupons = () => {
  return (
       <section className="container mx-auto px-4 py-12 ">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {couponsData.map((offer, index) => (
             <div
               key={index}
               className={`${offer.bgColor} ${offer.textColor} p-6 rounded-xl shadow-sm flex flex-col md:flex-row items-center gap-6`}
             >
               <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                 <Image
                   src={offer.image || "/placeholder.svg"}
                   alt={offer.title}
                   width={128}
                   height={128}
                   className="w-full h-full object-cover"
                 />
               </div>
               <div>
                 <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                 <p className="mb-2">{offer.description}</p>
                 <div className="flex items-center gap-2 mb-2">
                   <span className="font-bold">Code:</span>
                   <span className="bg-foreground text-background bg-opacity-20 px-2 py-1 rounded">
                     {offer.code}
                   </span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Clock className="h-4 w-4" />
                   <span>{offer.expiry}</span>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </section>
  );
};

export default Coupons;

const couponsData=[
    {
      title: "WELCOME50",
      description: "50% OFF on your first order (up to ₨500)",
      code: "WELCOME50",
      expiry: "No expiry",
      image: "/placeholder.svg?height=200&width=200",
      bgColor: "bg-primary",
      textColor: "text-foreground",
    },
    {
      title: "WEEKEND25",
      description: "25% OFF on all orders during weekends",
      code: "WEEKEND25",
      expiry: "Valid every Saturday and Sunday",
      image: "/placeholder.svg?height=200&width=200",
      bgColor: "bg-secondary",
      textColor: "text-primary",
    },
    {
      title: "FREEDEL",
      description: "Free delivery on orders above ₨1000",
      code: "FREEDEL",
      expiry: "Valid until 31st December 2023",
      image: "/placeholder.svg?height=200&width=200",
      bgColor: "bg-green-100",
      textColor: "text-black",
    },
    {
      title: "COMBO20",
      description: "20% OFF on all combo meals",
      code: "COMBO20",
      expiry: "Valid until 15th November 2023",
      image: "/placeholder.svg?height=200&width=200",
      bgColor: "bg-yellow-100",
      textColor: "text-black",
    },
  ]
