import React, { useRef, useState } from 'react';
// import './ProjectCard.css';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';

const ProjectCard = ({ i, title, description,features, demo, src1,src2, linkText, url, color, progress, range, targetScale }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  const [fullscreenImage, setFullscreenImage] = useState(null);


  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{ backgroundColor: '#041222', scale, top: `calc(-5vh + ${i * 25}px)` }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            <div className={styles.features}>
              <h3>Features:</h3>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
            </div>
            <div className={styles.githubAndPreviewBtn}>
              <span className={styles.githubbtn}>
                <img src="/portfolio/assets/images/githubw.png" alt="github" />
                <a href={url} target="_blank" rel="noopener noreferrer">{linkText || "View Project"}</a>
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="white"/>
                </svg>
              </span>
              <span className={`${styles.phoneScreen} ${styles.githubbtn}`}>
                <img src="/portfolio/assets/images/previweicon.png" alt="github" />
                <a href={demo} target="_blank" rel="noopener noreferrer">Previwe</a>
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="white"/>
                </svg>
              </span>
            </div>
          </div>

          <div className={styles.images}>
            <div className={styles.imageContainer}>
              <motion.div className={styles.inner} style={{ scale: imageScale }}>
                <img src={`${src1}`} onClick={() => setFullscreenImage(src1)} />
                {/* <img src={`/portfolio/assets/images/me0055.png`} alt="project" /> */}
              </motion.div>
            </div>
            <div className={styles.imageContainer}>
              <motion.div className={styles.inner} style={{ scale: imageScale }}>
                <img src={`${src2}`} onClick={() => setFullscreenImage(src2)}/>
                {/* <img src={`/portfolio/assets/images/me0055.png`} alt="project" /> */}
              </motion.div>
            </div>
          </div>
          {/* <div>
            {demo && (
              <div className={styles.videoWrapper}>
                <iframe
                  src={demo}
                  width="90%"
                  height="445"
                  title={`${title} Demo Video`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div> */}
        </div>
      </motion.div>
      {fullscreenImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'zoom-out'
            
          }}
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen Preview"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '10px'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
