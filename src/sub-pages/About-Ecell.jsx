import Navbar from "../components/Navbar";
import React from "react";
import CardSpotlight from "../components/Card-Spotlight";
import "../css/style.css";
export default function AboutEcell() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <LineBg /> */}
      <div className="flex-grow bg-black antialiased px-2">
        <div className="container relative mx-auto p-[2px] text-gray-300 overflow-hidden z-10 bg-transparent">
          <div className="absolute border-rotation  origin-center  bg-gray-50/[0.30] -z-10 "></div>

          <div className="bg-black z-30 py-20">
            <div className="">
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
                <h2 className="text-xl font-semibold mb-4">Networking</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                  saepe iure libero, atque quod ipsa impedit rem doloremque facere
                  recusandae nemo officia illo, esse nostrum eligendi earum
                  voluptatem odio blanditiis!
                </p>
              </CardSpotlight>

              {/* Card 2 */}
              <CardSpotlight>
                <h2 className="text-xl font-semibold mb-4">Networking</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                  saepe iure libero, atque quod ipsa impedit rem doloremque facere
                  recusandae nemo officia illo, esse nostrum eligendi earum
                  voluptatem odio blanditiis!
                </p>
              </CardSpotlight>

              {/* Card 3 */}
              <CardSpotlight>
                <h2 className="text-xl font-semibold mb-4">Entrepreneur Mindset</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                  saepe iure libero, atque quod ipsa impedit rem doloremque facere
                  recusandae nemo officia illo, esse nostrum eligendi earum
                  voluptatem odio blanditiis!
                </p>
              </CardSpotlight>

              {/* Card 4 */}
              <CardSpotlight>
                <h2 className="text-xl font-semibold mb-4">Personal Improvement</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                  saepe iure libero, atque quod ipsa impedit rem doloremque facere
                  recusandae nemo officia illo, esse nostrum eligendi earum
                  voluptatem odio blanditiis!
                </p>
              </CardSpotlight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
