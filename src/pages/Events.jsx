import React, { useEffect } from "react";
import { ThreeDCardDemo } from "../sub-pages/Event-card";
// import EConclavePage from "../sub-pages/EConclave";
import AOS from "aos";
import "aos/dist/aos.css";
const Events = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
    });
  }, []);

  const eventsData = [
    {
      title: "E-Conclave",
      description:
        "Flagship event that brings together industry leaders, successful entrepreneurs, and innovators for insightful panel discussions, keynote speeches, and interactive sessions.",
      link: "/econclave",
      thumnail: './thumbnail/Thumbnail1.jpg'
    },
    {
      title: "Aarambh",
      description:
        "A dedicated event to ignite the entrepreneurial journey of students by providing a platform to ideate, innovate, and collaborate.",
      link: "/aarambh",
      thumnail: './thumbnail/Thumbnail3.jpg'

    },
    {
      title: "Startup Sutra",
      description:
        "An interactive event that combines fun, competition, and education, offering a unique entrepreneurial experience.",
      link: "/startupsutra",
      thumnail: './thumbnail/Thumbnail2.jpg'

    },
  ];

  return (
    <div className="events-container bg-black min-h-screen py-10 px-4">
      <h1 className="text-white text-4xl font-bold text-center mb-6">
        What We Do?
      </h1>
      <h2 className="text-gray-300 text-2xl text-center mb-8">Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className={`${index === eventsData.length - 1
              ? "md:col-span-2 lg:col-span-2 place-self-center"
              : ""
              }`}
            data-aos="fade-up"
          >
            <ThreeDCardDemo event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
