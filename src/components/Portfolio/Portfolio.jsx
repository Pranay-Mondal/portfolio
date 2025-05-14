
// import React, { useState, useEffect, useRef,useContext } from "react";
// import  {MouseContext}  from "../MouseContext/MouseContext"
// import './Portfolio.css';

// const Portfolio = () => {
//     const { increaseSize, resetSize, changeColor, resetColor } = useContext(MouseContext);
//                     const handleMouseEnter = () => {
//                         increaseSize(); 
//                         changeColor('rgba(0, 157, 255, 0.4)'); // Change the circle color
//                     };
//                     const handleMouseLeave = () => {
//                         resetSize();
//                         resetColor(); // Reset the circle color
//                     };
//     return(
//         <section className="portfolioContainer" id="Portfolio">
//             <h2>
//                  My <span>Portfolio</span>
//             </h2>
//             <h4>My recent projects</h4>
//             <div className="projectsContainer">
//                 <article className="portfolioItems" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                     <img src="/portfolio/assets/images/sptfyportfolio.png" alt="" />
//                     <h3>Spotify Clone</h3>
//                     <p>A Spotify-inspired web app that allows users to play music and explore albums.</p>
//                     <div className="hvr">
//                         <a href=""><img src="../portfolio/assets/images/githubw.png" alt="" /></a>
//                     </div>
//                 </article>

//                 <article className="portfolioItems" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                     <img src="/portfolio/assets/images/shiportfolio.png" alt="" />
//                     <h3>Shay Hi</h3>
//                     <p>A real-time messaging app where users can create profiles, add friends, and chat seamlessly.</p>
//                     <div className="hvr">
//                         <a href=""><img src="../portfolio/assets/images/githubw.png" alt="" /></a>
//                     </div>
//                 </article>

//                 <article className="portfolioItems" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                     <img src="/portfolio/assets/images/tttportfolio.png" alt="" />
//                     <h3>Tic Tac Toe Game</h3>
//                     <p>A feature-rich Tic Tac Toe game with options to play against friends, an easy AI, or a hard AI, complete with sound effects.</p>
//                     <div className="hvr">
//                         <a href=""><img src="../portfolio/assets/images/githubw.png" alt="" /></a>
//                     </div>
//                 </article>
//             </div>
//         </section>
//     )
// }
// export default Portfolio;

import React, { useRef, useContext } from "react";
import { MouseContext } from "../MouseContext/MouseContext";
import { projects } from "../../utils/projectsdata";
import styles from './portfolio.module.scss';
// import './Portfolio.css';
import { useScroll } from "framer-motion";
import ProjectCard from "./ProjectCards/ProjectCard";

const Portfolio = () => {
  const { increaseSize, resetSize, changeColor, resetColor } = useContext(MouseContext);

  const handleMouseEnter = () => {
    increaseSize();
    changeColor("rgba(0, 157, 255, 0.4)");
  };

  const handleMouseLeave = () => {
    resetSize();
    resetColor();
  };

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className={styles.portfolioContainer}  id="Portfolio">
      <h2 className={styles.hading}>
        My <span>Portfolio</span>
      </h2>
      <main ref={container} className={styles.main}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
};

export default Portfolio;
