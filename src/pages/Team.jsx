
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import teamData from "../team.json";
// import CardDemo from "../sub-pages/Team-Card";
// import Faculty from "./Faculty";
// import Navbar from "../components/Navbar";
// import Footer from "./Footer"
// const CoreTeam = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 2500,
//       once: false,
//     });
//   }, []);

//   return (
//     <div>
//       <Navbar></Navbar>
//       <Faculty></Faculty>
//       <section className="py-16 bg-black">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center text-white mb-12">
//             Meet The <span className="text-yellow-400">Core Team</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
//             {teamData.map((member, index) => (
//               <div key={index} data-aos="fade-in" className="justify-center items-center">
//                 <CardDemo
//                   name={member.name}
//                   position={member.position}
//                   image={member.image}
//                   email={member.email}
//                   linkedin={member.linkedin}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default CoreTeam;




import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import teamData from "../team.json";
import CardDemo from "../sub-pages/Team-Card";
import Faculty from "./Faculty";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer"
const CoreTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
    });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Faculty></Faculty>
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Meet The <span className="text-yellow-400">Core Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div key={index} data-aos="fade-in">
                <CardDemo
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  email={member.email}
                  linkedin={member.linkedin}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default CoreTeam;