import Navbar from "../components/Navbar";
import React from "react";
import CardSpotlight from "../components/Card-Spotlight";
import "../css/style.css";
export default function AboutEcell() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <LineBg /> */}
      <div className="flex-grow bg-black antialiased">
        <div className="container mx-auto p-6 text-gray-300">
          <div className="mt-11 spinning-border-container">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">
              What is IIC ECELL SKNCOE?
            </h2>
            <p className="mb-6 text-justify">
              At SKNCOE'S IIC E-Cell, we help students learn about
              entrepreneurship and provide guidance to turn their ideas into real
              businesses. Our goal is to inspire and support future entrepreneurs
              by offering workshops, seminars, and events where students can gain
              practical skills and connect with successful business leaders. We
              believe in giving students the tools they need to explore their
              entrepreneurial potential, whether it's through hands-on learning,
              networking opportunities, or mentoring. Our events are designed to
              help students develop their ideas, build confidence, and become the
              next generation of entrepreneurs.
            </p><br />
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">
              Why Join Us?
            </h2><br />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Card 1 */}
            <CardSpotlight>
              <h2 className="text-xl font-semibold mb-4">VISION</h2>
              <p>
              To build a strong entrepreneurial ecosystem at SKNCOE by nurturing innovation, 
              empowering entrepreneurs, and fostering creativity, collaboration, and problem-solving, 
              with the vision of producing future-ready leaders who drive positive societal impact.
              </p>
            </CardSpotlight>

            {/* Card 2 */}
            <CardSpotlight>
              <h2 className="text-xl font-semibold mb-4">MISSION</h2>
              <p>
              To inspire and educate students, empower innovators, promote inclusivity, support startups, 
              and foster growth through workshops, mentorship, partnerships, and resources, creating an 
              entrepreneurial ecosystem that nurtures diverse ideas and drives innovation at SKNCOE.
              </p>
            </CardSpotlight>

            {/* Card 3 */}
            <CardSpotlight>
              <h2 className="text-xl font-semibold mb-4">Purpose</h2>
              <p>
              The Ecell club at SKNCOE fosters entrepreneurial growth by educating students, 
              guiding ideas to execution, building networks, nurturing leadership and innovation, 
              and promoting socially responsible entrepreneurship to address real-world challenges 
              and contribute to societal development.
              </p>
            </CardSpotlight>

            {/* Card 4 */}
            <CardSpotlight>
              <h2 className="text-xl font-semibold mb-4">Promise</h2>
              <p>
              The Ecell club at SKNCOE promises to encourage personal and professional growth, 
              provide essential resources, foster creativity, offer unwavering support, and drive
              meaningful change by empowering students to turn entrepreneurial aspirations into impactful 
              achievements.
              </p>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </div>
  );
}
