import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-secondary rounded-3xl mt-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Discover how Food Dash makes your dining experience convenient,
          reliable, and delightful
        </p>
      </div>
    </section>
  );
};

export default Hero;
