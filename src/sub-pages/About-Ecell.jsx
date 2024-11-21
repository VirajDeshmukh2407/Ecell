// import React from "react";
// import BgBeamsCollision from "../components/BgBeamsCollision";
// import CardSpotlight from "../components/Card-Spotlight";

// export default function AboutEcell() {
//   return (
//     <BgBeamsCollision className="p-4 w-full">
//       <div className="text-gray-300 p-2 mt-11">
//         <h2 className="text-2xl lg:text-4xl font-bold mb-6">
//           What is IIC ECELL SKNCOE?
//         </h2>
//         <p className="mb-6">
//           At SKNCOE'S IIC E-Cell, we help students learn about entrepreneurship
//           and provide guidance to turn their ideas into real businesses. Our
//           goal is to inspire and support future entrepreneurs by offering
//           workshops, seminars, and events where students can gain practical
//           skills and connect with successful business leaders. We believe in
//           giving students the tools they need to explore their entrepreneurial
//           potential, whether it's through hands-on learning, networking
//           opportunities, or mentoring. Our events are designed to help students
//           develop their ideas, build confidence, and become the next generation
//           of entrepreneurs.
//         </p>
//         <h2 className="text-2xl lg:text-4xl font-bold mb-6">Why Join Us?</h2>

//         {/* Grid Container for Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
//           {/* Card 1 */}
//           <CardSpotlight>
//             <h2 className="text-xl font-semibold mb-4">Networking</h2>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
//               saepe iure libero, atque quod ipsa impedit rem doloremque facere
//               recusandae nemo officia illo, esse nostrum eligendi earum
//               voluptatem odio blanditiis!
//             </p>
//           </CardSpotlight>

//           {/* Card 2 */}
//           <CardSpotlight>
//             <h2 className="text-xl font-semibold mb-4">Networking</h2>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
//               saepe iure libero, atque quod ipsa impedit rem doloremque facere
//               recusandae nemo officia illo, esse nostrum eligendi earum
//               voluptatem odio blanditiis!
//             </p>
//           </CardSpotlight>

//           {/* Card 3 */}
//           <CardSpotlight>
//             <h2 className="text-xl font-semibold mb-4">Entrepreneur Mindset</h2>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
//               saepe iure libero, atque quod ipsa impedit rem doloremque facere
//               recusandae nemo officia illo, esse nostrum eligendi earum
//               voluptatem odio blanditiis!
//             </p>
//           </CardSpotlight>

//           {/* Card 4 */}
//           <CardSpotlight>
//             <h2 className="text-xl font-semibold mb-4">Personal Improvement</h2>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
//               saepe iure libero, atque quod ipsa impedit rem doloremque facere
//               recusandae nemo officia illo, esse nostrum eligendi earum
//               voluptatem odio blanditiis!
//             </p>
//           </CardSpotlight>
//         </div>
//       </div>
//     </BgBeamsCollision>
//   );
// }

import React from "react";
import BgBeamsCollision from "../components/BgBeamsCollision";
import CardSpotlight from "../components/Card-Spotlight";

export default function AboutEcell() {
  return (
    <BgBeamsCollision className="p-4 w-full h-screen">
      <div className="text-gray-300 p-4 mt-11 overflow-y-auto ">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6">
          What is IIC ECELL SKNCOE?
        </h2>
        <p className="mb-6">
          At SKNCOE'S IIC E-Cell, we help students learn about entrepreneurship
          and provide guidance to turn their ideas into real businesses. Our
          goal is to inspire and support future entrepreneurs by offering
          workshops, seminars, and events where students can gain practical
          skills and connect with successful business leaders. We believe in
          giving students the tools they need to explore their entrepreneurial
          potential, whether it's through hands-on learning, networking
          opportunities, or mentoring. Our events are designed to help students
          develop their ideas, build confidence, and become the next generation
          of entrepreneurs.
        </p>
        <h2 className="text-2xl lg:text-4xl font-bold mb-6">Why Join Us?</h2>

        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <CardSpotlight>
            <h2 className="text-xl font-semibold mb-4">Networking</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              saepe iure libero, atque quod ipsa impedit rem doloremque facere
              recusandae nemo officia illo, esse nostrum eligendi earum
              voluptatem odio blanditiis!
            </p>
          </CardSpotlight>

          {/* Card 2 */}
          <CardSpotlight>
            <h2 className="text-xl font-semibold mb-4">Networking</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              saepe iure libero, atque quod ipsa impedit rem doloremque facere
              recusandae nemo officia illo, esse nostrum eligendi earum
              voluptatem odio blanditiis!
            </p>
          </CardSpotlight>

          {/* Card 3 */}
          <CardSpotlight>
            <h2 className="text-xl font-semibold mb-4">Entrepreneur Mindset</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              saepe iure libero, atque quod ipsa impedit rem doloremque facere
              recusandae nemo officia illo, esse nostrum eligendi earum
              voluptatem odio blanditiis!
            </p>
          </CardSpotlight>

          {/* Card 4 */}
          <CardSpotlight>
            <h2 className="text-xl font-semibold mb-4">Personal Improvement</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              saepe iure libero, atque quod ipsa impedit rem doloremque facere
              recusandae nemo officia illo, esse nostrum eligendi earum
              voluptatem odio blanditiis!
            </p>
          </CardSpotlight>
        </div>
      </div>
    </BgBeamsCollision>
  );
}
