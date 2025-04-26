import { Truck, Clock, CreditCard } from "lucide-react";
import React from "react";
const Services = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-background p-6 rounded-xl shadow-sm text-center"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-foreground/70">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

const services = [
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Fast Delivery",
    description:
      "We deliver your food within 30 minutes of ordering, ensuring it arrives hot and fresh at your doorstep.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "24/7 Service",
    description:
      "Our service is available round the clock, so you can satisfy your cravings anytime, day or night.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Secure Payments",
    description:
      "Multiple payment options available with secure transaction processing for your peace of mind.",
  },
];
