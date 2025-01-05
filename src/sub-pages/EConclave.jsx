// import React from "react";
// import Navbar from "../components/Navbar";
// const EConclavePage = () => {
//   return (
//     <div className="bg-black min-h-screen min-w-full">
//       <Navbar></Navbar><br /><br /><br />
//       <div className="my-10 p-4">
//         <h1 className="text-3xl font-bold text-center mb-4 p-4">E-Conclave</h1>
//         <img
//           src="/path-to-event-image.jpg"
//           alt="E-Conclave Event"
//           className="w-full max-w-lg mx-auto rounded shadow-md mb-6"
//         />
//         <p className="text-lg text-gray-700 text-center mb-6">
//           E-Conclave is our flagship event that brings together industry experts,
//           entrepreneurs, and students to foster innovation and collaboration.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default EConclavePage;


import React from "react";
import Navbar from "../components/Navbar";

const EConclavePage = () => {
  return (
    <div className="bg-black min-h-screen min-w-full">
      <Navbar /><br /><br /><br />
      <div className="my-10 p-6">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          E-Conclave
        </h1>
        <div className="flex flex-col items-center">
          <img
            src="/images/econclave-event.jpg"
            alt="E-Conclave Event"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
          />
          <p className="text-lg text-gray-300 text-left mb-6 max-w-3xl">
            E-Conclave is a premier event that bridges the gap between students,
            entrepreneurs, and industry leaders. It serves as a platform to foster
            collaboration and exchange innovative ideas. With keynote speakers,
            interactive workshops, and networking sessions, it promises an enriching
            experience for all attendees. Be part of the change and explore new horizons
            of innovation.
          </p>
          <button
            className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
            onClick={() => {
              window.open("/brochures/econclave-brochure.pdf", "_blank");
            }}
          >
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default EConclavePage;
