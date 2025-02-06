
// import React, { useState, useEffect, useRef } from "react";
// import './Portfolio.css';

// const Portfolio = () => {
//     const [items, setItems] = useState([
//         { title: "Shay Hi", 
//             image: "/assets/images/shiportfolio.png", 
//             name: "Real-time Messaging App", 
//             des: "A real-time messaging app where users can create profiles, add friends, and chat seamlessly." },

//         { title: "Spotify Clone", 
//             image: "/assets/images/sptfyportfolio.png", 
//             name: "Music Streaming Website", 
//             des: "A Spotify-inspired web app that allows users to play music and explore albums." },

//         { title: "Tic Tac Toe", 
//             image: "/assets/images/tttportfolio.png", 
//             name: "Multiplayer Tic Tac Toe", 
//             des: "A feature-rich Tic Tac Toe game with options to play against friends, an easy AI, or a hard AI, complete with sound effects." }
//     ]);

//     const [isAnimating, setIsAnimating] = useState(false);
//     const runningTime = 3000; // Animation duration
//     const timeAutoNext = 7000; // Auto-slide duration
//     const animationRef = useRef(null);

//     const resetTimeAnimation = () => {
//         if (animationRef.current) {
//             animationRef.current.style.animation = 'none';
//             void animationRef.current.offsetHeight; // Trigger reflow
//             animationRef.current.style.animation = `runningTime ${timeAutoNext / 1000}s linear infinite`;
//         }
//     };

//     const showSlider = (type) => {
//         if (isAnimating) return; // Prevent overlap in animations
//         setIsAnimating(true);

//         if (type === 'next') {
//             setItems((prevItems) => {
//                 const [first, ...rest] = prevItems;
//                 return [...rest, first];
//             });
//         } else {
//             setItems((prevItems) => {
//                 const last = prevItems[prevItems.length -1];
//                 return [last, ...prevItems.slice(0, -1)];
//             });
//         }

//         setTimeout(() => {
//             setIsAnimating(false);
//         }, runningTime);
//     };

//     useEffect(() => {
//         resetTimeAnimation(); // Start initial animation
//         const autoNext = setInterval(() => {
//             showSlider('next');
//         }, timeAutoNext);

//         return () => clearInterval(autoNext); // Cleanup interval on component unmount
//     }, []);

//     return (
//         <section className="portfolioContainer" id="Portfolio">
//             <h2>
//                 My <span>Portfolio</span>
//             </h2>
//             <div className="carousel">
//                 <div className="list">
//                     {items.map((item, index) => (
//                         <div
//                             key={index}
//                             className="item"
//                             style={{
//                                 backgroundImage: `url(${item.image})`,
//                             }}
//                         >
//                             <div className="content">
//                                 <div className="title">{item.title}</div>
//                                 <div className="name">{item.name}</div>
//                                 <div className="des">{item.des}</div>
//                                 <div className="btn">
//                                     <button>button1</button>
//                                     <button>button2</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="arrows">
//                     <button className="prev" onClick={() => showSlider('prev')}>
//                         {"<"}
//                     </button>
//                     <button className="next" onClick={() => showSlider('next')}>
//                         {">"}
//                     </button>
//                 </div>
//                 <div className="timeRunning" ref={animationRef}></div>
//             </div>
//         </section>
//     );
// };

// export default Portfolio;

import React, { useState, useEffect, useRef,useContext } from "react";
import  {MouseContext}  from "../MouseContext/MouseContext"
import './Portfolio.css';

const Portfolio = () => {
    const { increaseSize, resetSize, changeColor, resetColor } = useContext(MouseContext);
                    const handleMouseEnter = () => {
                        increaseSize(); 
                        changeColor('rgba(0, 157, 255, 0.4)'); // Change the circle color
                    };
                    const handleMouseLeave = () => {
                        resetSize();
                        resetColor(); // Reset the circle color
                    };
    return(
        <section className="portfolioContainer" id="Portfolio">
            <h2>
                 My <span>Portfolio</span>
            </h2>
            <h4>My recent projects</h4>
            <div className="projectsContainer">
                <article className="portfolioItems" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src="/assets/images/sptfyportfolio.png" alt="" />
                    <h3>Spotify Clone</h3>
                    <p>A Spotify-inspired web app that allows users to play music and explore albums.</p>
                    <div className="hvr">
                        <a href=""><img src="../assets/images/githubw.png" alt="" /></a>
                    </div>
                </article>

                <article className="portfolioItems" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src="/assets/images/shiportfolio.png" alt="" />
                    <h3>Shay Hi</h3>
                    <p>A real-time messaging app where users can create profiles, add friends, and chat seamlessly.</p>
                    <div className="hvr">
                        <a href=""><img src="../assets/images/githubw.png" alt="" /></a>
                    </div>
                </article>

                <article className="portfolioItems" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src="/assets/images/tttportfolio.png" alt="" />
                    <h3>Tic Tac Toe Game</h3>
                    <p>A feature-rich Tic Tac Toe game with options to play against friends, an easy AI, or a hard AI, complete with sound effects.</p>
                    <div className="hvr">
                        <a href=""><img src="../assets/images/githubw.png" alt="" /></a>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Portfolio;