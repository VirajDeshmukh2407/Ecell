import React from "react";
import teamData from "../Faculty.json";
import CardDemo from "../sub-pages/Faculty-Card";

const Faculty = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container p-4 mx-auto mt-7">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          <span className="text-yellow-400 pr-2">IIC ECELL</span>Team
        </h1>
        <h2 className="text-4xl font-bold text-center text-white mb-12 ">
          Under The <span className="text-yellow-400">Guidance</span> Of
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-10 place-items-center">
          {teamData.map((member, index) => (
            <div key={index} data-aos="fade-in" className="flex justify-center items-center"
            >
              <CardDemo
                name={member.name}
                position={member.position}
                image={member.image}
                email={member.email}
              />
            </div>
          ))

          }
        </div>
      </div>
    </section>
  );
};

export default Faculty;