
import React from "react";
import Navbar from "../components/Navbar";
import ParallaxScroll from "../components/ui/parallax-scroll";
import Footer from "../pages/Footer";
const EConclavePage = () => {
  const images = [
    "/images/EConclave/i1.JPG",
    "/images/EConclave/i2.JPG",
    "/images/EConclave/i3.JPG",
    "/images/EConclave/i4.JPG",
    "/images/EConclave/i5.JPG",
    "/images/EConclave/i6.JPG",
    "/images/EConclave/i7.JPG",
    "/images/EConclave/i8.JPG",
    "/images/EConclave/i9.JPG",
    "/images/EConclave/i10.JPG",
    "/images/EConclave/i11.JPG",
    "/images/EConclave/i12.JPG",
    "/images/EConclave/i13.JPG",
  ];
  return (
    <div className="bg-black min-h-screen min-w-full">
      <Navbar /><br /><br /><br />
      <div className="my-12 p-6">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          E-Conclave
        </h1>
        <div className="flex flex-col items-center">
          <img
            src="./thumbnail/Thumbnail1.jpg"
            alt="Startup-Sutra-Image"
            className="w-1/2 lg:w-1/4 object-cover max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
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

          <ParallaxScroll images={images} className="mt-10" />

        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default EConclavePage;
