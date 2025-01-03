import React from "react";
import "../css/style.css";
const LineBackground = () => {
    const lines = Array.from({ length: 20 });

    return (
        <div className="line-bg">
            {lines.map((_, index) => (
                <div
                    key={index}
                    className="line"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default LineBackground;
