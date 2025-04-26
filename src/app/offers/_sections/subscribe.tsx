import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Subscribe = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-primary text-white p-8 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">
          Subscribe for Exclusive Offers
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Be the first to know about our special promotions, new menu items, and
          exclusive deals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full  text-foreground flex-grow"
          />
          <Button variant={"ghost"} className="bg-white text-primary px-6 py-3 rounded-full font-bold">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
