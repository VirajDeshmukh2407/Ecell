
import React from "react";
import Navbar from "../components/Navbar";
import ParallaxScroll from "../components/ui/parallax-scroll";
import Footer from "../pages/Footer";
const StartupSutra = () => {
    const images = [
        "/images/Startup-Sutra/i1.jpg",
        "/images/Startup-Sutra/i2.jpg",
        "/images/Startup-Sutra/i4.jpg",
        "/images/Startup-Sutra/i5.jpg",
        "/images/Startup-Sutra/i6.jpg",
        "/images/Startup-Sutra/i7.jpg",
        "/images/Startup-Sutra/i8.jpeg",
        "/images/Startup-Sutra/i9.jpeg",
        "/images/Startup-Sutra/i10.jpeg",
        "/images/Startup-Sutra/i11.jpeg",
        "/images/Startup-Sutra/i12.jpeg",
        "/images/Startup-Sutra/i13.jpeg",
        "/images/Startup-Sutra/i14.jpeg",
        "/images/Startup-Sutra/i15.jpeg",
        "/images/Startup-Sutra/i16.jpeg",
        "/images/Startup-Sutra/i17.jpeg",
        "/images/Startup-Sutra/i18.jpeg",

    ];
    return (
        <div className="bg-black min-h-screen min-w-full">
            <Navbar /><br /><br /><br />
            <div className="my-12 p-6">
                <h1 className="text-4xl font-bold text-white text-center mb-10">
                    <span className="text-yellow-500">Startup</span> Sutra
                </h1>
                <div className="flex flex-col items-center">
                    <img
                        src="/images/Startup-Sutra/i3.jpg"
                        alt="Startup-Sutra-Image"
                        className="w-1/2 lg:w-1/4 object-cover max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
                    />
                    <p className="text-lg text-gray-300 text-left mb-6 max-w-3xl">
                        Startup Sutra is a dynamic event that combines education with innovation, offering aspiring entrepreneurs an engaging platform to enhance their entrepreneurial skills. Focused on providing great education for future founders, it blends learning with real-world challenges, making it the perfect environment for growth. Through thought-provoking workshops, expert-led talks, and interactive competitions, Startup Sutra equips students with the knowledge, tools, and mindset to navigate the entrepreneurial landscape. <br />Join us to gain valuable insights, connect with industry leaders, and take your entrepreneurial aspirations to the next level in this immersive educational experience.
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
export default StartupSutra;
