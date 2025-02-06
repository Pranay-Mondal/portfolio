import React, { createContext, useState } from "react";

// Create the context
export const MouseContext = createContext();

// Create the provider component
export const MouseProvider = ({ children }) => {
    const [circleSize, setCircleSize] = useState(20);
    const [circleColor, setCircleColor] = useState('rgba(0, 157, 255,0.9)'); // Default color

    const increaseSize = () => setCircleSize(60);
    const resetSize = () => setCircleSize(20);

    const changeColor = (color) => setCircleColor(color); // Function to change circle color
    const resetColor = () => setCircleColor('rgba(0, 157, 255,0.9)'); // Reset to default color

    return (
        <MouseContext.Provider value={{ circleSize, circleColor, increaseSize, resetSize, changeColor, resetColor }}>
            {children}
        </MouseContext.Provider>
    );
};
