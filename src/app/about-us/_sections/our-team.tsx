import React from "react";
import Image from "next/image";
const OurTeam = () => {
  return (
    <section className="container mx-auto px-4 py-12 mb-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          The passionate individuals working behind the scenes to bring
          delicious food to your doorstep
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <div className="mb-4 mx-auto w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-foreground/70">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;

const team = [
  {
    name: "Azhar Lone",
    position: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Someone Khan",
    position: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Ali Hassan",
    position: "Chief Technology Officer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Hassan Malik",
    position: "Customer Relations Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
];
