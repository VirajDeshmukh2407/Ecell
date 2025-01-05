import React from "react";
import CardSpotlight from "../components/Card-Spotlight";
import AK from "../assets/Adesh_Kolhe.png";
import VK from "../assets/VK_SIR.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Alumini = () => {
  return (
    <div className="bg-black text-white py-11 px-11">
      <h3 className="text-center text-4xl font-bold mb-8">
        <span className="text-yellow-500">Alumni</span> Who Started Their Own{" "}
        <span className="text-yellow-500">Startup</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <CardSpotlight className="rounded-lg h-auto p-6 flex justify-between items-center">
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <img
                src={AK}
                alt="Adesh Kolhe"
                className="w-40 h-40 object-cover rounded-full"
              />
              <h1 className="text-xl font-semibold">
                Adesh Kolhe
              </h1>
            </div>
            <div className="mt-4">
    <p>
        Adesh Kolhe is a visionary entrepreneur and the co-founder of {" "}
        <span className="text-yellow-500">BoomPanda</span>, India's coolest student community. 
    </p>
    <br />
    <h2 className="text-xl font-bold">Journey with Ecell SKNCOE:</h2>
    <ul>
        <li>
            <strong>2018:</strong> Adesh joined Ecell SKNCOE as an enthusiastic member, eager to 
            contribute to its mission of promoting entrepreneurship among students.
        </li>
        <li>
            <strong>2019:</strong> His exceptional leadership and communication skills earned him the 
            role of Public Relations Head. During this time, Adesh was instrumental in building strong 
            relationships, organizing impactful events, and significantly boosting Ecell SKNCOE's 
            visibility on and off-campus.
        </li>
    </ul>
    <br />
    <p>BoomPanda was founded in 2020 by Adesh Kolhe and Rudra Ghodke. As of November 2024, BoomPanda has not 
      raised any external funding and operates as a <strong>bootstrapped</strong> company.
    </p>
</div>
          </div>
          <div className="flex items-start space-x-4 mt-3">
            <a
              href="https://www.linkedin.com/in/adeshkolhe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
            <a
              href="mailto:adesh.kolhe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </a>
          </div>
        </CardSpotlight>

        {/* Card 2 */}
        <CardSpotlight className="rounded-lg h-auto p-6 flex justify-between items-center">
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <img
                src={VK}
                alt="Vikash Chaudhary"
                className="w-40 h-40 object-cover rounded-full"
              />
              <h1 className="text-xl font-semibold">Vikash Chaudhary</h1>
            </div>
            <div className="mt-4">
    <p>
        Vikash Chaudhary is the Founder and CEO of <span className="text-yellow-500">HackersEra</span>, a pioneering cybersecurity service provider established in 2015.
    </p>
    <br />
    <h2 className="text-xl font-bold">Courses Developed by Vikash:</h2>
    <ul>
        <li>"Offensive Approach to Hunt Bugs"</li>
        <li>"Offensive Bug Bounty – Hunter 2.0"</li>
        <li>"SDR Exploitation"</li>
    </ul>
    <br />
    <p>
        Beyond entrepreneurship, Vikash is dedicated to cybersecurity awareness, helping individuals and organizations safeguard against digital threats. As of November 2024, HackersEra remains a <strong>bootstrapped</strong> company, reporting an annual revenue of <strong>₹2.29 crore (~$286,000)</strong> for the fiscal year ending March 31, 2023.
    </p>
</div>

          </div>
          <div className="flex items-center space-x-4 mt-3">
            <a
              href="https://www.linkedin.com/in/vikashchaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
            <a
              href="mailto:vikash.chaudhary@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </a>
          </div>
        </CardSpotlight>
      </div>
    </div>
  );
};

export default Alumini;




// import React from "react";
// import CardSpotlight from "../components/Card-Spotlight";
// import AK from "../assets/Adesh_Kolhe.png";
// import VK from "../assets/VK_SIR.png";

// const Alumini = () => {
//   return (
//     <div className="bg-black text-white py-10 px-12">
//       <h3 className="text-center text-2xl font-bold mb-8">
//         <span className="text-yellow-500">Alumini</span> Who Started Their Own{" "}
//         <span className="text-yellow-500">Startup</span>
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Card 1 */}
//         <CardSpotlight className="rounded-lg h-auto p-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={AK}
//               alt="Adesh Kolhe"
//               className="w-22 h-20 object-cover rounded-full"
//             />
//             <h1 className="text-xl font-semibold">
//               Adesh Kolhe
//             </h1>
//           </div>
//           <p className="mt-4">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure
//             error harum libero hic. Harum perspiciatis laboriosam amet accusamus
//             autem nobis quo minima fugiat, possimus rerum, expedita mollitia rem
//             obcaecati?
//           </p>
//         </CardSpotlight>

//         {/* Card 2 */}
//         <CardSpotlight className="rounded-lg h-auto p-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={VK}
//               alt="Vikash Chaudhary"
//               className="w-20 h-20 object-cover rounded-full"
//             />
//             <h1 className="text-xl font-semibold">Vikash Chaudhary</h1>
//           </div>
//           <p className="mt-4">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure
//             error harum libero hic. Harum perspiciatis laboriosam amet accusamus
//             autem nobis quo minima fugiat, possimus rerum, expedita mollitia rem
//             obcaecati?
//           </p>
//         </CardSpotlight>
//       </div>
//     </div>
//   );
// };

// export default Alumini;
