import React, {useEffect} from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const Queries = () => {

    useEffect(() => {
        AOS.init({
          duration: 2500,
          once: false,
        });
      }, []);

  return (
    <div className="max-w-2xl md:mx-auto p-6 bg-black-900 text-white rounded-lg shadow-lg border border-yellow-900/30 shadow-md mb-20 m-4" style={{ boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.6)" }} data-aos="fade-up">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Have Any Queries?</h2>
      <p className="mb-4">If you have any questions regarding the event, feel free to reach out!</p>

      <div className="bg-gray p-4 rounded-lg border border-yellow-900/30 shadow-md">
        <p className="text-lg">
          <span className="font-bold flex items-center">
            <FaPhoneAlt className="text-yellow-400 h-7 w-7 p-1 mr-2" />
            Contact:
          </span> 
          Rohit Vaidya, General Secretary
          <br />
          <a href="tel:+919561606622" className="text-yellow-700">+91 9561606622</a>
          <br />
          Ajinkya Gavali, Technical Lead
          <br />
          <a href="tel:+917058532404" className="text-yellow-700">+91 7058532404</a>
        </p>
        <br />
        <p className="text-lg" mail-to>
          <span className="font-bold flex items-center">
            <FaEnvelope className="text-yellow-400 h-7 w-8 p-1 mr-2" />
            Email:
          </span> 
          <a href="mailto:ecellskncoe.mail@gmail.com" className="text-yellow-700">ecellskncoe.mail@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Queries;
