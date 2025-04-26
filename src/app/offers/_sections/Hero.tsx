import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-secondary rounded-3xl mt-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Special <span className="text-primary">Offers</span> & Deals
        </h1>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          Discover our latest promotions, discounts, and special deals to enjoy
          your favorite Pakistani dishes for less
        </p>
      </div>
    </section>
  );
};

export default Hero;
