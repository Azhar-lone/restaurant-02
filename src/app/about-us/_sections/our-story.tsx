import React from "react";
import Image from "next/image";

const OurStory = ({ author }: { author: string }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-foreground/70 mb-4">
            Founded in 2020 by {author}, Food Dash started with a
            simple mission: to deliver authentic Pakistani cuisine to food
            lovers across the country without compromising on quality or taste.
          </p>
          <p className="text-foreground/70 mb-4">
            What began as a small operation in Karachi has now grown into one of
            Pakistan's most loved food delivery platforms, serving thousands of
            customers daily across multiple cities.
          </p>
          <p className="text-foreground/70">
            We partner with the best restaurants and chefs to ensure that every
            meal delivered is a delightful experience, bringing the rich flavors
            of Pakistani cuisine right to your doorstep.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Our Story"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
