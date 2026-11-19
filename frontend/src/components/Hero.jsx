import { motion } from "framer-motion";
import "./Hero.css";

// Import your assets
import hand from "../assets/hand.png";
import notebook from "../assets/notebook.png";
import tape from "../assets/tape.png";
import sphere from "../assets/sphere.png";
import glassCard from "../assets/glass-card.png";
import orangeCard from "../assets/orange-card.png";
import keyboard from "../assets/keyboard.png";
import diamond from "../assets/diamond.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Grid */}
      <div className="grid"></div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="hero-content-wrapper">
        {/* ===== HERO TEXT ===== */}
        <div className="hero-text-container">
          
          {/* --- ANIMATED PORTFOLIO TEXT --- */}
          <motion.div 
            className="portfolio-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="letter p">P</span>

            <span className="letter 0">o</span>
            
            {/* First O - Draws */}
            {/* <div className="o-svg-wrapper">
              <svg width="72" height="72" viewBox="0 0 100 100">
                <motion.circle
                  cx="50" cy="50" r="35"
                  className="o-draw"
                  initial={{ pathLength: 0, fill: "transparent" }}
                  animate={{ pathLength: 1, fill: "#1f2937" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
              </svg>
            </div> */}

            <span className="letter r">r</span>
            <span className="letter t">t</span>
            <span className="letter f">f</span>
            
            {/* Second O - Morphs */}
            <motion.span 
              className="o-morph"
              initial={{ scaleX: 1, rotate: 0, borderRadius: "50%" }}
              animate={{
                scaleX: [1, 1.8, 1],
                rotate: [0, 0, 360],
                borderRadius: ["50%", "10px", "50%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              o
            </motion.span>

            <span className="letter l">l</span>
            <span className="letter i">i</span>
            
            {/* Third O - Morphs (Same effect as second O) */}
            <motion.span 
              className="o-morph"
              initial={{ scaleX: 1, rotate: 0, borderRadius: "50%" }}
              animate={{
                scaleX: [1, 1.8, 1],
                rotate: [0, 0, 360],
                borderRadius: ["50%", "10px", "50%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 1.7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              o
            </motion.span>
          </motion.div>
          {/* --- END PORTFOLIO --- */}

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 12,
              delay: 0.5
            }}
          >
            Ashutosh Manchanda
          </motion.h1>

          <motion.div
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span>Full Stack Developer</span>
            <span className="title-dot">•</span>
            <span>IAM Engineer</span>
            <motion.span
              className="cursor-blink"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            Building secure, scalable, and user-focused web applications with a passion for Identity & Access Management.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#portfolio-intro"
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>

        {/* ===== SCENE ===== */}
        <motion.div
          className="scene-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="scene">
            <img src={sphere} className="sphere" alt="" />
            <img src={orangeCard} className="orangeCard" alt="" />
            <img src={glassCard} className="glassCard" alt="" />
            <img src={notebook} className="notebook" alt="" />
            <img src={diamond} className="diamond" alt="" />
            <img src={hand} className="hand" alt="" />
            <img src={keyboard} className="keyboard" alt="" />
            <img src={tape} className="tape" alt="" />
          </div>
        </motion.div>

        {/* ===== FOOTER ===== */}
        <motion.div
          className="footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;