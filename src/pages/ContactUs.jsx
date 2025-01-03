import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
const ContactUs = () => {
    return (
        <div className="bg-black text-white py-20 px-8">
            <Navbar></Navbar>
            <div className="container mx-auto text-center space-y-10">
                <h1 className="text-4xl font-bold mt-8">
                    Contact <span className="text-yellow-400">Us</span>
                </h1>

                <p className="text-lg max-w-3xl mx-auto">
                    We're passionate about fostering entrepreneurship and innovation.
                    Whether you're looking to start a new venture, need guidance, or
                    want to connect with like-minded individuals, we're here to help.
                    Reach out to us and let's build something extraordinary together!
                </p>

                <div className="flex flex-col md:flex-row justify-between items-center p-16 space-y-8 md:space-y-0">
                    {/* Email */}
                    <div className="p-4 text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-yellow-400">Email</h2>
                        <p className="text-lg mt-2">
                            <a
                                href="mailto:contact@entrepreneurshiphub.com"
                                className="hover:text-yellow-300"
                            >
                                contact@entrepreneurshiphub.com
                            </a>
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="p-4 text-center">
                        <h2 className="text-2xl font-semibold text-yellow-400">Social Media</h2>
                        <div className="flex justify-center items-center space-x-6 mt-4">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/entrepreneurshiphub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-300 text-3xl"
                            >
                                <FaInstagram />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/entrepreneurshiphub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-300 text-3xl"
                            >
                                <FaLinkedin />
                            </a>

                            {/* Twitter */}
                            <a
                                href="https://www.twitter.com/entrepreneurshiphub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-yellow-300 text-3xl"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;
