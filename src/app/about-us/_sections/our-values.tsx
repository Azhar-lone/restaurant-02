import React from "react";
import { Users, Award, Clock, MapPin } from "lucide-react";

const OurValues = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-secondary rounded-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          The principles that guide us in delivering exceptional food and
          service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-background p-6 rounded-xl shadow-sm">
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
            <p className="text-foreground/70">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;

const values = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Customer First",
    description:
      "We prioritize our customers' satisfaction above everything else",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Quality Assurance",
    description:
      "We never compromise on the quality of food and service we provide",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Timely Delivery",
    description: "We understand the value of time and ensure prompt delivery",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Local Support",
    description: "We support local restaurants and promote Pakistani cuisine",
  },
];
