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
              <h2 className="text-xl font-semibold mb-4">Vision</h2>
              <p>
              To create a dynamic entrepreneurial ecosystem at SKNCOE that nurtures innovation, empowers aspiring entrepreneurs, and fosters creativity, collaboration, and problem-solving, producing leaders who drive significant societal and economic transformations.
              </p>
            </CardSpotlight>

            {/* Card 2 */}
            <CardSpotlight>
              <h2 className="text-xl font-semibold mb-4">Mission</h2>
              <p>
              To inspire, educate, and empower students in entrepreneurship through workshops, mentorship, and partnerships, promoting inclusivity and supporting student-led startups with resources, guidance, and exposure for sustainable growth and impactful innovation.
              </p>
            </CardSpotlight>

            {/* Card 3 */}
            <CardSpotlight>
              <h2 className="text-xl font-semibold mb-4">Purpose</h2>
              <p>
              To act as a catalyst for entrepreneurial growth at SKNCOE, bridging the gap between ideation and execution, fostering leadership and innovation, and connecting students with networks to address real-world challenges through socially responsible entrepreneurship.
              </p>
            </CardSpotlight>

            {/* Card 4 */}
            <CardSpotlight>
              <h2 className="text-xl font-semibold mb-4">Promise</h2>
              <p>
              To provide an environment for personal and professional growth, offering resources, mentorship, and support, fostering creativity, and driving meaningful change by empowering students on their entrepreneurial journeys from ideas to impactful realities.
              </p>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </div>
  );
}
