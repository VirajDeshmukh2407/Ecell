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

import React from "react"
import { motion } from "framer-motion"
import "../../css/globals.css"

const EventCard = ({ title, emoji, details }) => (
  <motion.div
    className="relative overflow-hidden rounded-lg bg-transparent p-4 border border-yellow-900/30 shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  // whileHover={{ scale: 1.01 }}
  >
    <div className="text-gray-300">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-500">{title}</h2>
      <p className="text-3xl sm:text-4xl mb-3">{emoji}</p>
      {details.map((detail, index) => (
        <p key={index} className="mb-1">
          {detail}
        </p>
      ))}
      <motion.button
        className="mt-3 px-4 py-2 bg-yellow-700 text-gray-200 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-200"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        Register Now
      </motion.button>
    </div>
  </motion.div>
)

const Events = () => {
  const events = [
    {
      title: "The Intraday Showdown",
      emoji: "📈",
      details: [
        "Virtual Stock Trading Competition",
        "Date: 11th February",
        "Market Time: 9:15 AM – 3:30 PM",
        "Perks: Refreshments included 🍴",
        "Registration Fee: ₹150/-",
        "Test your trading skills in this exciting virtual competition!",
      ],
    },
    {
      title: "Internship Fair",
      emoji: "🌟",
      details: [
        "Bridging Talent and Opportunity",
        "For Companies: Discover talented interns",
        "For Students: Land your dream internship",
        "Open doors to endless possibilities!",
      ],
    },
    {
      title: "Startup Expo",
      emoji: "🚀",
      details: [
        "Showcase Your Startup, Pitch to Investors",
        "Promote your venture at the college level",
        "Build awareness across Pune",
        "Connect with like-minded individuals!",
      ],
    },
    {
      title: "Keynote & Speaker Session",
      emoji: "💬",
      details: [
        "Meet Business Leaders & Influencers",
        "Engaging chats at the Cultural Centre (CC)",
        "Personal Q&A opportunities",
        "Gain valuable insights from experts!",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black py-8 px-3">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-2xl font-bold text-center mb-8 text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Magical Events
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
