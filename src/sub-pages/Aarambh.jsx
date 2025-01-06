
import React from "react";
import Navbar from "../components/Navbar";
import ParallaxScroll from "../components/ui/parallax-scroll";
import Footer from "../pages/Footer";
const AarambhPage = () => {
    const images = [
        "/images/Aarambh/i2.jpg",
        "/images/Aarambh/i3.jpg",
        "/images/Aarambh/i4.jpg",
        "/images/Aarambh/i5.jpg",
        "/images/Aarambh/i6.jpg",
        "/images/Aarambh/i7.jpg",
        "/images/Aarambh/i8.jpg",
        "/images/Aarambh/i9.jpg",
        "/images/Aarambh/i10.jpg",
        "/images/Aarambh/i11.jpeg",
    ];
    return (
        <div className="bg-black min-h-screen min-w-full">
            <Navbar /><br /><br /><br />
            <div className="my-12 py-10">
                <h1 className="text-4xl font-bold text-white text-center mb-10">
                    Aarambh
                </h1>
                <div className="flex flex-col items-center">
                    <img
                        src="/images/Aarambh/i1.jpg"
                        alt="Aarambh Event"
                        className="w-1/4 object-cover max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
                    />
                    <p className="text-lg text-gray-300 text-left mb-6 max-w-3xl">
                        Aarambh is the beginning of the entrepreneurial journey, designed to inspire and ignite the entrepreneurial spirit in students. As the launchpad for the E-Cell, it provides a platform for aspiring innovators to come together, brainstorm, and collaborate on ideas that could shape the future. Through interactive sessions, mentorship opportunities, and hands-on activities, Aarambh empowers students to take the first step toward their entrepreneurial goals. <br /> Join us to kickstart your journey, learn from experts, and be part of the vibrant ecosystem that fosters creativity and innovation.
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
export default AarambhPage;
