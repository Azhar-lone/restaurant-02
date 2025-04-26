import { MapPin } from "lucide-react";
import React from "react";

const Areas = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          We currently deliver to the following cities across Pakistan
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cities.map((city, index) => (
          <div key={index} className="bg-secondary p-4 rounded-xl text-center">
            <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
            <h3 className="font-bold">{city}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Areas;

const cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
];
