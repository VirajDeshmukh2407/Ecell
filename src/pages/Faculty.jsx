import React from "react";
import teamData from "../Faculty.json";
import CardDemo from "../sub-pages/Faculty-Card";

const Faculty = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Faculty
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <CardDemo
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              email={member.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;