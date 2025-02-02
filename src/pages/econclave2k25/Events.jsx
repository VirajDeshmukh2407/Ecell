

// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import "../../css/globals.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const EventCard = ({ day, events }) => (
//   <motion.div
//     className="relative overflow-hidden rounded-lg bg-transparent p-4 border border-yellow-900/30 shadow-md"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4 }}
//     whileHover={{
//       scale: 1.05,
//       boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.6)",
//       transition: { duration: 0.3 },
//     }}
//   >
//     <div className="text-gray-300">
//       <h2 className="text-2xl font-extrabold mb-4 text-yellow-500">{day}</h2>
//       {events.map(({ title, emoji, details, link }, index) => (
//         <div key={index} className="mb-6">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-400">{emoji} {title}</h3>
//           {details.map((detail, i) => (
//             <p key={i} className="mb-1">{detail}</p>
//           ))}
//           {link && (
//             <a href={link} target="_blank" rel="noopener noreferrer">
//               <motion.button
//                 className="mt-3 px-4 py-2 bg-yellow-700 text-gray-200 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-200"
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.96 }}

//               >
//                 Register Now
//               </motion.button>
//             </a>
//           )}
//         </div>
//       ))}
//     </div>
//   </motion.div>
// );

// const Events = () => {
//   const eventDays = [
//     {
//       day: "Day 1 - 11th February",
//       events: [
//         {
//           title: "Keynote & Speaker Session",
//           emoji: "💬",
//           details: [
//             "🕘 Time: 10:00 AM - 12:00 PM",
//             "📍 Venue: SIOM Hall",
//             "💡 Meet industry leaders and influencers",
//             "🎤 Engaging Q&A opportunities",
//           ],
//           link: "/econclave2k25/day1",
//         },
//         {
//           title: "The Intraday Showdown",
//           emoji: "📈",
//           details: [
//             "🕘 Market Time: 9:15 AM – 3:30 PM",
//             "📍 Venue: Will be announced soon!",
//             "💰 Virtual Stock Trading Competition",
//             "🍴 Perks: Refreshments included",
//             "💵 Registration Fee: ₹150/-",
//           ],
//           link: "/econclave2k25/showdown",
//         },
//       ],
//     },
//     {
//       day: "Day 2 - 12th February",
//       events: [
//         {
//           title: "Startup Expo",
//           emoji: "🚀",
//           details: [
//             "🕒 Time: 09:00 AM - 4:00 PM",
//             "📍 Venue: Culture Centre",
//             "💡 Explore groundbreaking startups, network with innovators, and get inspired to build your own venture in the future!",
//           ],
//         },
//         {
//           title: "Internship Fair",
//           emoji: "🌟",
//           details: [
//             "🕒 Time: 09:00 AM - 4:00 PM",
//             "📍 Venue: Culture Centre",
//             "🎯 Discover exciting internship opportunities, connect with top companies, and take the first step toward your dream career!",
//           ],
//         },
//         {
//           title: "Speaker Session",
//           emoji: "🎤",
//           details: [
//             "🕒 Time: 4:00 PM - 7:00 PM",
//             "📍 Venue: Culture Centre",
//             "💬 Meet top business leaders & influencers, engage in insightful chats at CC, and seize the chance for a personal Q&A!",
//           ],
//           link: "/econclave2k25/day2",
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 2500, once: false });
//   }, []);

//   return (
//     <div id="events" className="min-h-screen bg-black py-8 px-3">
//       <div className="max-w-5xl mx-auto">
//         <motion.h1
//           className="text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-200 font-serif text-center mb-20 mt-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           Magical Events
//         </motion.h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-4">
//           {eventDays.map((eventDay, index) => (
//             <div key={index} data-aos="fade-up">
//               <EventCard {...eventDay} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <br /><br /><br />
//     </div>
//   );
// };

// export default Events;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import "../../css/globals.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Day1 from "./Day1";
// import Day2 from "./Day2";
// import Showdown from "./Showdown";

// const EventCard = ({ day, events, onEventClick }) => (
//   <motion.div
//     className="relative overflow-hidden rounded-lg bg-transparent p-4 border border-yellow-900/30 shadow-md"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4 }}
//     whileHover={{
//       scale: 1.05,
//       boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.6)",
//       transition: { duration: 0.3 },
//     }}
//   >
//     <div className="text-gray-300">
//       <h2 className="text-2xl font-extrabold mb-4 text-yellow-500">{day}</h2>
//       {events.map(({ title, emoji, details, link, component }, index) => (
//         <div key={index} className="mb-6">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-400">
//             {emoji} {title}
//           </h3>
//           {details.map((detail, i) => (
//             <p key={i} className="mb-1">{detail}</p>
//           ))}
//           {component && (
//             <motion.button
//               className="mt-3 px-4 py-2 bg-yellow-700 text-gray-200 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-200"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.96 }}
//               onClick={() => onEventClick(component)}
//             >
//               Register Now
//             </motion.button>
//           )}
//         </div>
//       ))}
//     </div>
//   </motion.div>
// );

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const closeModal = () => setSelectedEvent(null);

//   const handleOutsideClick = (e) => {
//     if (e.target.id === "modal-overlay") closeModal();
//   };

//   const eventDays = [
//     {
//       day: "Day 1 - 11th February",
//       events: [
//         {
//           title: "Keynote & Speaker Session",
//           emoji: "💬",
//           details: [
//             "🕘 Time: 10:00 AM - 12:00 PM",
//             "📍 Venue: SIOM Hall",
//             "💡 Meet industry leaders and influencers",
//             "🎤 Engaging Q&A opportunities",
//           ],
//           component: <Day1 />,
//         },
//         {
//           title: "The Intraday Showdown",
//           emoji: "📈",
//           details: [
//             "🕘 Market Time: 9:15 AM – 3:30 PM",
//             "📍 Venue: Will be announced soon!",
//             "💰 Virtual Stock Trading Competition",
//             "🍴 Perks: Refreshments included",
//             "💵 Registration Fee: ₹150/-",
//           ],
//           component: <Showdown />,
//         },
//       ],
//     },
//     {
//       day: "Day 2 - 12th February",
//       events: [
//         {
//           title: "Startup Expo",
//           emoji: "🚀",
//           details: [
//             "🕒 Time: 09:00 AM - 4:00 PM",
//             "📍 Venue: Culture Centre",
//             "💡 Explore groundbreaking startups, network with innovators, and get inspired to build your own venture in the future!",
//           ],
//         },
//         {
//           title: "Internship Fair",
//           emoji: "🌟",
//           details: [
//             "🕒 Time: 09:00 AM - 4:00 PM",
//             "📍 Venue: Culture Centre",
//             "🎯 Discover exciting internship opportunities, connect with top companies, and take the first step toward your dream career!",
//           ],
//         },
//         {
//           title: "Speaker Session",
//           emoji: "🎤",
//           details: [
//             "🕒 Time: 4:00 PM - 7:00 PM",
//             "📍 Venue: Culture Centre",
//             "💬 Meet top business leaders & influencers, engage in insightful chats at CC, and seize the chance for a personal Q&A!",
//           ],
//           component: <Day2 />,
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 2500, once: false });
//   }, []);

//   return (
//     <div id="events" className="min-h-screen bg-black py-8 px-3">
//       <div className="max-w-5xl mx-auto">
//         <motion.h1
//           className="text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-200 font-serif text-center mb-20 mt-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           Magical Events
//         </motion.h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-4">
//           {eventDays.map((eventDay, index) => (
//             <div key={index} data-aos="fade-up">
//               <EventCard {...eventDay} onEventClick={setSelectedEvent} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4 z-50">
//           <motion.div
//             className="bg-black text-gray-300 p-6 rounded-lg border border-gray-700 shadow-lg relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-400 hover:text-gray-100 text-2xl"
//               onClick={closeModal}
//             >
//               ✖
//             </button>

//             {selectedEvent && <div className="w-full h-full">{selectedEvent}</div>}
//           </motion.div>
//         </div>
//       )}

//       <br /><br /><br />
//     </div>
//   );
// };

// export default Events;



// --------------------------------  with modal --------------------------------------------------



// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "../../css/globals.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Day1 from "./Day1";
// import Day2 from "./Day2";
// import Showdown from "./Showdown";

// const EventCard = ({ day, events, onEventClick }) => (
//   <motion.div
//     className="relative overflow-hidden rounded-lg bg-transparent p-4 border border-yellow-900/30 shadow-md"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4 }}
//     whileHover={{
//       scale: 1.05,
//       boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.6)",
//       transition: { duration: 0.3 },
//     }}
//   >
//     <div className="text-gray-300">
//       <h2 className="text-2xl font-extrabold mb-4 text-yellow-500">{day}</h2>
//       {events.map(({ title, emoji, details, link, component }, index) => (
//         <div key={index} className="mb-6">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-400">
//             {emoji} {title}
//           </h3>
//           {details.map((detail, i) => (
//             <p key={i} className="mb-1 text-sm sm:text-base">{detail}</p>
//           ))}
//           {component && (
//             <motion.button
//               className="mt-3 px-4 py-2 bg-yellow-700 text-gray-200 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-200"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.96 }}
//               onClick={() => onEventClick(component)}
//             >
//               Register Now
//             </motion.button>
//           )}
//         </div>
//       ))}
//     </div>
//   </motion.div>
// );

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const closeModal = () => setSelectedEvent(null);

//   const handleOutsideClick = (e) => {
//     if (e.target.id === "modal-overlay") closeModal();
//   };

//   const eventDays = [
//     {
//       day: "Day 1 - 11th February",
//       events: [
//         {
//           title: "Keynote & Speaker Session",
//           emoji: "💬",
//           details: [
//             "🕘 Time: 10:00 AM - 12:00 PM",
//             "📍 Venue: SIOM Hall",
//             "💡 Meet industry leaders and influencers",
//             "🎤 Engaging Q&A opportunities",
//           ],
//           component: <Day1 />,
//         },
//         {
//           title: "The Intraday Showdown",
//           emoji: "📈",
//           details: [
//             "🕘 Market Time: 9:15 AM – 3:30 PM",
//             "📍 Venue: Will be announced soon!",
//             "💰 Virtual Stock Trading Competition",
//             "🍴 Perks: Refreshments included",
//             "💵 Registration Fee: ₹150/-",
//           ],
//           component: <Showdown />,
//         },
//       ],
//     },
//     {
//       day: "Day 2 - 12th February",
//       events: [
//         {
//           title: "Startup Expo",
//           emoji: "🚀",
//           details: [
//             "🕒 Time: 09:00 AM - 4:00 PM",
//             "📍 Venue: Culture Centre",
//             "💡 Explore groundbreaking startups, network with innovators, and get inspired to build your own venture in the future!",
//           ],
//         },
//         {
//           title: "Internship Fair",
//           emoji: "🌟",
//           details: [
//             "🕒 Time: 09:00 AM - 4:00 PM",
//             "📍 Venue: Culture Centre",
//             "🎯 Discover exciting internship opportunities, connect with top companies, and take the first step toward your dream career!",
//           ],
//         },
//         {
//           title: "Speaker Session",
//           emoji: "🎤",
//           details: [
//             "🕒 Time: 4:00 PM - 7:00 PM",
//             "📍 Venue: Culture Centre",
//             "💬 Meet top business leaders & influencers, engage in insightful chats at CC, and seize the chance for a personal Q&A!",
//           ],
//           component: <Day2 />,
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 2500, once: false });
//   }, []);

//   return (
//     <div id="events" className="min-h-screen bg-black py-8 px-3">
//       <div className="max-w-5xl mx-auto">
//         <motion.h1
//           className="text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-200 font-serif text-center mb-20 mt-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           Magical Events
//         </motion.h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-4">
//           {eventDays.map((eventDay, index) => (
//             <div key={index} data-aos="fade-up">
//               <EventCard {...eventDay} onEventClick={setSelectedEvent} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedEvent && (
//           <motion.div
//             id="modal-overlay"
//             className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={handleOutsideClick}
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm" />
//             <motion.div
//               className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-black text-gray-300 rounded-xl border border-yellow-900/30 shadow-2xl"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 20 }}
//             >
//               <button
//                 className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-gray-400 hover:text-gray-100 hover:bg-zinc-700 transition-colors z-50"
//                 onClick={closeModal}
//               >
//                 <span className="sr-only">Close</span>
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//               <div className="max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-900 scrollbar-track-zinc-800">
//                 <div className="p-4 sm:p-6">
//                   <div className="w-full">
//                     {selectedEvent}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <br /><br /><br />
//     </div>
//   );
// };

// export default Events;


// ----------------------- without modal ------------------------------------------

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Showdown from "./Showdown";

const EventCard = ({ day, events, onEventClick }) => (
  <motion.div
    className="relative overflow-hidden rounded-lg bg-transparent p-4 border border-yellow-900/30 shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.6)",
      transition: { duration: 0.3 },
    }}
  >
    <div className="text-gray-300">
      <h2 className="text-2xl font-extrabold mb-4 text-yellow-500">{day}</h2>
      {events.map(({ title, emoji, details, link, component }, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-400">
            {emoji} {title}
          </h3>
          {details.map((detail, i) => (
            <p key={i} className="mb-1 text-sm sm:text-base">{detail}</p>
          ))}
          {component && (
            <motion.button
              className="mt-3 px-4 py-2 bg-yellow-700 text-gray-200 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onEventClick(title)}
            >
              Register Now
            </motion.button>
          )}
        </div>
      ))}
    </div>
  </motion.div>
);

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const closeModal = () => setSelectedEvent(null);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  };

  const getEventComponent = (title) => {
    switch (title) {
      case "Keynote & Speaker Session":
        return <Day1 />;
      case "Speaker Session":
        return <Day2 />;
      case "The Intraday Showdown":
        return <Showdown />;
      default:
        return null;
    }
  };

  const eventDays = [
    {
      day: "Day 1 - 11th February",
      events: [
        {
          title: "Keynote & Speaker Session",
          emoji: "💬",
          details: [
            "🕘 Time: 10:00 AM - 12:00 PM",
            "📍 Venue: SIOM Hall",
            "💡 Meet industry leaders and influencers",
            "🎤 Engaging Q&A opportunities",
          ],
          component: true,
        },
        {
          title: "The Intraday Showdown",
          emoji: "📈",
          details: [
            "🕘 Market Time: 9:15 AM – 3:30 PM",
            "📍 Venue: Will be announced soon!",
            "💰 Virtual Stock Trading Competition",
            "🍴 Perks: Refreshments included",
            "💵 Registration Fee: ₹150/-",
          ],
          component: true,
        },
      ],
    },
    {
      day: "Day 2 - 12th February",
      events: [
        {
          title: "Startup Expo",
          emoji: "🚀",
          details: [
            "🕒 Time: 09:00 AM - 4:00 PM",
            "📍 Venue: Culture Centre",
            "💡 Explore groundbreaking startups, network with innovators, and get inspired to build your own venture in the future!",
          ],
        },
        {
          title: "Internship Fair",
          emoji: "🌟",
          details: [
            "🕒 Time: 09:00 AM - 4:00 PM",
            "📍 Venue: Culture Centre",
            "🎯 Discover exciting internship opportunities, connect with top companies, and take the first step toward your dream career!",
          ],
        },
        {
          title: "Speaker Session",
          emoji: "🎤",
          details: [
            "🕒 Time: 4:00 PM - 7:00 PM",
            "📍 Venue: Culture Centre",
            "💬 Meet top business leaders & influencers, engage in insightful chats at CC, and seize the chance for a personal Q&A!",
          ],
          component: true,
        },
      ],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <div id="events" className="min-h-screen bg-black py-8 px-3">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-200 font-serif text-center mb-20 mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Magical Events
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-4">
          {eventDays.map((eventDay, index) => (
            <div key={index} data-aos="fade-up">
              <EventCard {...eventDay} onEventClick={setSelectedEvent} />
            </div>
          ))}
        </div>
      </div>

      {/* Direct Modal Display with Fixed Close Button */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            id="modal-overlay"
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm" />
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl">
              <div className="relative">
                <motion.div
                  className="w-full max-h-[80vh]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  <div className="rounded-2xl ">
                    {getEventComponent(selectedEvent)}
                  </div>                </motion.div>
                <button
                  className="absolute top-2 right-10 w-12 h-10 flex items-center justify-center rounded-full text-white z-50"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <br /><br /><br />
    </div>
  );
};

export default Events;