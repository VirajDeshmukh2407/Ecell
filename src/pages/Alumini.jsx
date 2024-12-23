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
      <h3 className="text-center text-2xl font-bold mb-8">
        <span className="text-yellow-500">Alumini</span> Who Started Their Own{" "}
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
                className="w-20 h-20 object-cover rounded-full"
              />
              <h1 className="text-xl font-semibold">
                Adesh Kolhe
              </h1>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              iure error harum libero hic. Harum perspiciatis laboriosam amet
              accusamus autem nobis quo minima fugiat, possimus rerum, expedita
              mollitia rem obcaecati?
            </p>
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
                className="w-20 h-20 object-cover rounded-full"
              />
              <h1 className="text-xl font-semibold">Vikash Chaudhary</h1>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              iure error harum libero hic. Harum perspiciatis laboriosam amet
              accusamus autem nobis quo minima fugiat, possimus rerum, expedita
              mollitia rem obcaecati?
            </p>
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
