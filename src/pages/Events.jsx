import React from "react";
import { ThreeDCardDemo } from "../sub-pages/Event-card";
import EConclavePage from "../sub-pages/EConclave";
const Events = () => {
  const eventsData = [
    {
      title: "E-Conclave",
      description:
        "Flagship event that brings together industry leaders, successful entrepreneurs, and innovators for insightful panel discussions, keynote speeches, and interactive sessions.",
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
    <div className="events-container bg-black min-h-screen py-10 px-4">
      <h1 className="text-white text-4xl font-bold text-center mb-6">
        What We Do?
      </h1>
      <h2 className="text-gray-300 text-2xl text-center mb-8">Events</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className={`${
              index === eventsData.length - 1
                ? "md:col-span-2 lg:col-span-2 place-self-center"
                : ""
            }`}
          >
            <ThreeDCardDemo event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

// import React from "react";
// import { ThreeDCardDemo } from "../sub-pages/Event-card";

// const Events = () => {
//   const eventsData = [
//     {
//       title: "E-Conclave",
//       description:
//         "flagship event that brings together industry leaders, successful entrepreneurs, and innovators for insightful panel discussions, keynote speeches, and interactive sessions.",
//     },
//     {
//       title: "Aarambh",
//       description:
//         "A dedicated event to ignite the entrepreneurial journey of students by providing a platform to ideate, innovate, and collaborate.",
//     },
//     {
//       title: "Startup Sutra",
//       description:
//         "An interactive event that combines fun, competition, and education, offering a unique entrepreneurial experience.",
//     },
//   ];

//   return (
//     <div className="events-container bg-black min-h-screen py-10 px-4">
//       <h1 className="text-white text-4xl font-bold text-center mb-6">
//         What We Do?
//       </h1>
//       <h2 className="text-gray-300 text-2xl text-center mb-8">Events</h2>

//       {/* Responsive Flex Layout */}
//       <div className="flex flex-col md:flex-row md:justify-center md:gap-6 px-4">
//         {eventsData.map((event, index) => (
//           <div key={index} className="mb-6 md:mb-0">
//             <ThreeDCardDemo event={event} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Events;
