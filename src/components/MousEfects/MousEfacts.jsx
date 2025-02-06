import React, { useEffect, useState,useContext } from "react";
import  {MouseContext}  from "../MouseContext/MouseContext"
import "./MousEfacts.css";

const MouseCircle = () => {
    const { circleSize, circleColor } = useContext(MouseContext); // Access circle color from context
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="mouse-circle"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                backgroundColor: circleColor, // Dynamic background color
            }}
        />
    );
};

export default MouseCircle;