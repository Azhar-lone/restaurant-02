import React from "react";
import Image from "next/image";

const How = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-secondary rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="How It Works"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default How;

const steps = [
  {
    step: "1",
    title: "Browse Menu",
    description:
      "Explore our wide range of Pakistani dishes from various restaurants",
  },
  {
    step: "2",
    title: "Place Your Order",
    description: "Select your favorite items and add them to your cart",
  },
  {
    step: "3",
    title: "Track Delivery",
    description: "Follow your order in real-time as it makes its way to you",
  },
  {
    step: "4",
    title: "Enjoy Your Meal",
    description: "Receive your food and enjoy a delicious dining experience",
  },
];
