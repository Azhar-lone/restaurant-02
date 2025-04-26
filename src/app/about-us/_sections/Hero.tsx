import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-secondary rounded-3xl mt-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-primary">Food Dash</span>
        </h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Learn more about our journey, mission, and the team behind Pakistan's
          favorite food delivery service
        </p>
      </div>
    </section>
  );
};

export default Hero;
