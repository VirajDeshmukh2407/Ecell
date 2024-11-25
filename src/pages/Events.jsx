import React from "react";
import { ThreeDCardDemo } from "../sub-pages/Event-card";
import { title } from "framer-motion/client";

const Events = () => {
  const eventsData = [
    {
      title: "E-Conclave",
      description:
        "flagship event that brings together industry leaders, successful entrepreneurs, and innovators for insightful panel discussions, keynote speeches, and interactive sessions.",
    },
    {
      title: "Aarambh",
      description:
        "A dedicated event to ignite the entrepreneurial journey of students by providing a platform to ideate, innovate, and collaborate.",
    },
    {
      title: "Startup Sutra",
      description:
        "An interactive event that combines fun, competition, and education, offering a unique entrepreneurial experience.",
    },
  ];

  return (
    <div className="events-container bg-black min-h-screen py-10">
      <h1 className="text-white text-4xl font-bold text-center mb-6">What We Do?</h1>
      <h2 className="text-gray-300 text-2xl text-center mb-8">Events</h2>

      {/* Render each event dynamically using ThreeDCardDemo */}
      <div className="cards-container flex justify-center gap-6">
        {eventsData.map((event, index) => (
          <ThreeDCardDemo key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
