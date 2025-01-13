// import React, { useEffect, useState } from "react";
// import InfiniteMovingCards from "../components/Infinite.jsx";

// const Sponsers = () => {
//     return (
//         <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
//             <InfiniteMovingCards
//                 items={testimonials}
//                 direction="right"
//                 speed="slow"
//             />
//         </div>
//     );
// }

// export default Sponsers;


import React from "react";
import InfiniteMovingCards from "../components/Infinite.jsx";

const testimonials = [
    { "name": "True Elements", "image": "./images/Sponsors/i1.jpg" },
    { "name": "HackersEra", "image": "./images/Sponsors/i2.jpg" },
    { "name": "Stockgro", "image": "./images/Sponsors/i3.jpg" },
    { "name": "TaxiWars", "image": "./images/Sponsors/i4.jpg" },
    { "name": "Big Bunn Storyy", "image": "./images/Sponsors/i5.jpg" },
    { "name": "YAMAHA Ayush Motors", "image": "./images/Sponsors/i6.jpg" },
    { "name": "Phoenix Infotech", "image": "./images/Sponsors/i7.jpg" },
    { "name": "CyberKing Capitals", "image": "./images/Sponsors/i8.jpg" },
    { "name": "Harbhole", "image": "./images/Sponsors/i9.jpg" },
    { "name": "KD's Blackwood Cafe", "image": "./images/Sponsors/i10.jpg" },
    { "name": "Paradox Entertainment", "image": "./images/Sponsors/i11.jpg" },
    { "name": "Brahma Pure Veg", "image": "./images/Sponsors/i12.jpg" },
    { "name": "Bisleri", "image": "./images/Sponsors/i13.jpg" },
    { "name": "Glint Logic", "image": "./images/Sponsors/i14.jpg" },
    { "name": "Bee Armour", "image": "./images/Sponsors/i15.jpg" },
    { "name": "Uber Eats", "image": "./images/Sponsors/i16.jpg" }
];

const Sponsers = () => {
    return (
        <div className="h-[340px] w-full flex flex-col items-center justify-center text-white bg-black relative overflow-hidden">
            <div className="text-center text-4xl font-bold mb-10 flex"><h2>Previous</h2><span className="text-yellow-400 pl-2">Sponsors</span></div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                renderItem={(item) => (
                    <div className="flex flex-col items-center mx-4">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 object-cover rounded-full"
                        />
                        <p className="mt-2 text-sm text-center text-white">
                            {item.name}
                        </p>
                    </div>
                )}
            />
        </div>
    );
};

export default Sponsers;
