import React, { useRef, useState, useEffect } from 'react';
import "../../css/style.css";
const Line1 = () => {
    const svgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (svgRef.current) {
            observer.observe(svgRef.current);
        }
        return () => {
            if (svgRef.current) observer.unobserve(svgRef.current);
        };
    }, []);

    return (
        <svg
            ref={svgRef}
            className={`animated-svg ${isVisible ? 'visible' : ''}`}
            viewBox="0 0 363 171"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M242 0V74C241.5 79.1667 237.4 88.7 225 85.5H131.5C131.5 85.5 117.5 85.5 117.5 96V171"
                stroke="white"
                strokeWidth="2"
            />
        </svg>
    );
};

export default Line1;
