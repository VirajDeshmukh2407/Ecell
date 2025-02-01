// import React from 'react'
// import { GlareCard } from '../../components/GlareCard'

// const Events = () => {
//   return (
//     <div className='flex flex-row justify-between my-4 mx-10'>
//       <GlareCard>
//         <h2>The Intraday Showdown</h2>
//         <p>📈 <strong>Virtual Stock Trading Competition</strong></p>
//         <p><strong>Date:</strong> 11th February</p>
//         <p><strong>Market Time:</strong> 9:15 AM – 3:30 PM</p>
//         <p><strong>Perks:</strong> Refreshments included 🍴</p>
//         <p><strong>Registration Fee:</strong> ₹150/-</p>
//         <p>Think you have what it takes to thrive in the market? Test your trading skills in this exciting virtual competition and show everyone you’re the real stock market maestro!</p>
//       </GlareCard>

//       <GlareCard>
//         <h2>Internship Fair</h2>
//         <p>🌟 <strong>Bridging the Gap Between Talent and Opportunity</strong></p>
//         <p>Tired of limited connections within college? Here's your chance!</p>
//         <p><strong>For Companies:</strong> Discover talented interns across all fields.</p>
//         <p><strong>For Students:</strong> Land your dream internship right here.</p>
//         <p>Open doors to endless possibilities and give your career a head start!</p>
//       </GlareCard>

//       <GlareCard>
//         <h2>Startup Expo</h2>
//         <p>🚀 <strong>Showcase Your Startup, Pitch to Investors</strong></p>
//         <p>Promote your venture at the college level.</p>
//         <p>Build awareness across Pune.</p>
//         <p>Solve real-world problems by pitching in front of investors.</p>
//         <p>Let your entrepreneurial spirit shine and connect with like-minded individuals to take your startup to the next level!</p>
//       </GlareCard>

//       <GlareCard>
//         <h2>Keynote & Speaker Session</h2>
//         <p>💬 <strong>Meet Business Leaders & Influencers</strong></p>
//         <p>Engaging chats at the <strong>Cultural Centre (CC)</strong>.</p>
//         <p>Personal Q&A opportunities with inspiring professionals.</p>
//         <p>Don’t miss this chance to gain valuable insights and motivation directly from the experts themselves!</p>
//       </GlareCard>


//     </div>
//   )
// }

// export default Events

// import React from "react"
// import { motion } from "framer-motion"
// import "../../css/globals.css"

// const EventCard = ({ title, emoji, details }) => (
//   <motion.div
//     className="relative overflow-hidden rounded-lg bg-transparent p-6 border border-yellow-900/30 shadow-lg shadow-yellow-900/20"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     whileHover={{ scale: 1.02 }}
//   >
//     <div className="relative z-10 text-gray-300">
//       <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-yellow-500 text-shadow-glow">{title}</h2>
//       <p className="text-4xl sm:text-5xl mb-4">{emoji}</p>
//       {details.map((detail, index) => (
//         <p key={index} className="mb-2 text-shadow-soft">
//           {detail}
//         </p>
//       ))}
//       <motion.button
//         className="mt-4 px-6 py-2 bg-yellow-700 text-gray-200 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-300 shadow-glow"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Register Now
//       </motion.button>
//     </div>
//   </motion.div>
// )

// const Events = () => {
//   const events = [
//     {
//       title: "The Intraday Showdown",
//       emoji: "📈",
//       details: [
//         "Virtual Stock Trading Competition",
//         "Date: 11th February",
//         "Market Time: 9:15 AM – 3:30 PM",
//         "Perks: Refreshments included 🍴",
//         "Registration Fee: ₹150/-",
//         "Test your trading skills in this exciting virtual competition!",
//       ],
//     },
//     {
//       title: "Internship Fair",
//       emoji: "🌟",
//       details: [
//         "Bridging Talent and Opportunity",
//         "For Companies: Discover talented interns",
//         "For Students: Land your dream internship",
//         "Open doors to endless possibilities!",
//       ],
//     },
//     {
//       title: "Startup Expo",
//       emoji: "🚀",
//       details: [
//         "Showcase Your Startup, Pitch to Investors",
//         "Promote your venture at the college level",
//         "Build awareness across Pune",
//         "Connect with like-minded individuals!",
//       ],
//     },
//     {
//       title: "Keynote & Speaker Session",
//       emoji: "💬",
//       details: [
//         "Meet Business Leaders & Influencers",
//         "Engaging chats at the Cultural Centre (CC)",
//         "Personal Q&A opportunities",
//         "Gain valuable insights from experts!",
//       ],
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-black bg-cover bg-center bg-fixed py-12 px-4 sm:px-6 lg:px-8 gap-x-5">
//       <div className="max-w-5xl mx-auto">
//         <motion.h1
//           className="text-3xl font-bold text-center mb-12 text-yellow-400 text-shadow-glow"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Magical Events
//         </motion.h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
//           {events.map((event, index) => (
//             <EventCard key={index} {...event} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Events

// import React, {useEffect} from "react";
// import { motion } from "framer-motion"
// import "../../css/globals.css"
// // import { events } from "@react-three/fiber";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const EventCard = ({ title, emoji, details, link }) => (
  
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
//       <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-500">{title}</h2>
//       <p className="text-3xl sm:text-4xl mb-3">{emoji}</p>
//       {details.map((detail, index) => (
//         <p key={index} className="mb-1">
//           {detail}
//         </p>
//       ))}
//       <a href={link} target="_blank">
//       <motion.button
//         className="mt-3 px-4 py-2 bg-yellow-700 text-gray-200 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-200"
//         whileHover={{ scale: 1.04 }}
//         whileTap={{ scale: 0.96 }}
//       >
//         Register Now
//       </motion.button>
//       </a>
//     </div>
//   </motion.div>
// );


// const Events = () => {
//   const events = [
//     {
//       title: <span className="font-bold text-3xl">The Intraday Showdown</span>,
//       emoji: "📈",
//       details: [
//         <span className="font-bold text-xl">Virtual Stock Trading Competition</span>,
//         "Date: 11th February",
//         "Market Time: 9:15 AM – 3:30 PM",
//         "Perks: Refreshments included 🍴",
//         "Registration Fee: ₹150/-",
//         "Test your trading skills in this exciting virtual competition!",
//       ],
//       link:""
//     },
//     {
//       title: <span className="font-bold text-3xl">Internship Fair</span>,
//       emoji: "🌟",
//       details: [
//         <span className="font-bold text-xl">Bridging Talent and Opportunity</span>,
//         "For Companies: Discover talented interns",
//         "For Students: Land your dream internship",
//         "Open doors to endless possibilities!",
//         "Network with top industry professionals and startups",
//         "Gain hands-on experience through real-world projects"
//       ],
//       link: "https://docs.google.com/forms/d/e/1FAIpQLSfdnQ7unxNIGy_i__lj6T7rBBfXo-isHmggn-OJ2FJGfWuwfw/viewform"
//     },
//     {
//       title: <span className="font-bold text-3xl">Startup Expo</span>,
//       emoji: "🚀",
//       details: [
//         <span className="font-bold text-xl">Showcase Your Startup, Pitch to Investors</span>,
//         "Get a chance to showcase your products to the masses and investors and promote your venture at the college level.",
//         "Connect with like-minded individuals!",
//       ],
//       link:"https://docs.google.com/forms/d/e/1FAIpQLSfdnQ7unxNIGy_i__lj6T7rBBfXo-isHmggn-OJ2FJGfWuwfw/viewform"
//     },
//     {
//       title: <span className="font-bold text-3xl">Keynote & Speaker Session</span>,
//       emoji: "💬",
//       details: [
//         <span className="font-bold text-xl">Meet Business Leaders & Influencers</span>,
//         "Engaging chats at the Cultural Centre (CC) and Personal Q&A opportunities",
//         "Gain valuable insights from experts!",
//       ],
//       link:""
//     },
//   ]

//   useEffect(() => {
//       AOS.init({
//         duration: 2500,
//         once: false,
//       });
//     }, []);

//   return (
//     <div id="events" className="min-h-screen bg-black py-8 px-3">
//       <div className="max-w-5xl mx-auto">
//         <motion.h1
//           className="text-2xl md:text-4
//           xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-200 font-serif text-center mb-20 mt-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           Magical Events
//         </motion.h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-4">
//           {events.map((event, index) => (
//             <div data-aos="fade-up">
//             <EventCard key={index} {...event} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//     </div>
//   )
// }

// export default Events



import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../css/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

const EventCard = ({ day, events }) => (
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
      {events.map(({ title, emoji, details, link }, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-400">{emoji} {title}</h3>
          {details.map((detail, i) => (
            <p key={i} className="mb-1">{detail}</p>
          ))}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="mt-3 px-4 py-2 bg-yellow-700 text-gray-200 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-200"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                
              >
                Register Now
              </motion.button>
            </a>
          )}
        </div>
      ))}
    </div>
  </motion.div>
);

const Events = () => {
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
          link: "/econclave2k25/day1",
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
          link: "/econclave2k25/showdown",
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
           link: "/econclave2k25/day2",
        },
      ],      
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2500, once: false });
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
              <EventCard {...eventDay} />
            </div>
          ))}
        </div>
      </div>
      
      <br /><br /><br />
    </div>
  );
};

export default Events;