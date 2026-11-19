import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Thankyou.css";

// Reusing the exact assets already used in the Hero section
import hand from "../assets/hand.png";
import notebook from "../assets/notebook.png";
import tape from "../assets/tape.png";
import sphere from "../assets/sphere.png";
import glassCard from "../assets/glass-card.png";
import orangeCard from "../assets/orange-card.png";
import keyboard from "../assets/keyboard.png";
import diamond from "../assets/diamond.png";

/* ============================================================
   VS-Code style typing / deleting loop — no external lib
   ============================================================ */
const PHRASES = [
  "Building Amazing Products...",
  "Creating Secure Applications...",
  "Turning Ideas Into Reality...",
  "Crafting Beautiful Experiences...",
  "Let's Build Something Together...",
];

function TypingLine() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 55 + Math.random() * 35); // realistic, slightly irregular typing speed
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1400); // pause before deleting
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, 28);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }, 350);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <div className="ty-typing">
      <span className="ty-typing-dot" />
      <span className="ty-typing-text">{text}</span>
      <span className="ty-cursor">|</span>
    </div>
  );
}

/* ============================================================
   Magnetic glass pill — follows the cursor slightly on hover
   ============================================================ */
function MagneticPill({ href, icon, label, className = "", style }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * 0.25, y: relY * 0.25 });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`ty-pill ${className}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      whileHover={{ scale: 1.06, rotate: -2 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="ty-pill-icon">{icon}</span>
      <span className="ty-pill-label">{label}</span>
    </motion.a>
  );
}

const headingWord = (word, delay) => (
  <motion.span
    className="ty-heading-word"
    initial={{ opacity: 0, y: 60, scale: 0.85 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {word}
  </motion.span>
);

export default function Thankyou() {
  return (
    <section className="ty-page">
      {/* Background layers */}
      <div className="ty-grid" />
      <div className="ty-blob ty-blob-a" />
      <div className="ty-blob ty-blob-b" />
      <div className="ty-blob ty-blob-c" />
      <div className="ty-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={`ty-particle p-${i % 6}`} />
        ))}
      </div>

      <div className="ty-content">
        {/* Eyebrow */}
        <motion.p
          className="ty-eyebrow"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let&rsquo;s collaborate <span className="ty-eyebrow-dot" />
        </motion.p>

        {/* Big heading */}
        <h1 className="ty-heading">
          {headingWord("Thank", 0.12)}
          {headingWord("You", 0.28)}
          <motion.span
            className="ty-smile"
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.55, type: "spring", stiffness: 260, damping: 14 }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="9" cy="10" r="1.1" fill="currentColor" />
              <circle cx="15" cy="10" r="1.1" fill="currentColor" />
              <path d="M8 14c1 1.4 2.4 2 4 2s3-.6 4-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </motion.span>
        </h1>

        {/* Typing line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <TypingLine />
        </motion.div>

        {/* Success message */}
        <motion.div
          className="ty-success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <span className="ty-success-check">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p>
            Your message has been successfully received.
            <br />
            I&rsquo;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Center illustration — reused Hero assets */}
        <motion.div
          className="ty-scene"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          <div className="ty-scene-inner">
            <img src={sphere} alt="" className="ty-obj ty-sphere" />
            <img src={diamond} alt="" className="ty-obj ty-diamond" />
            <img src={glassCard} alt="" className="ty-obj ty-glassCard" />
            <img src={orangeCard} alt="" className="ty-obj ty-orangeCard" />
            <img src={notebook} alt="" className="ty-obj ty-notebook" />
            <img src={keyboard} alt="" className="ty-obj ty-keyboard" />
            <img src={tape} alt="" className="ty-obj ty-tape" />
            <img src={hand} alt="" className="ty-obj ty-hand" />
          </div>

          {/* Floating contact pills scattered around the scene */}
          <MagneticPill
            href="mailto:aashutoshmanchanda@gmail.com"
            icon="✉️"
            label="Email"
            className="ty-pill-email"
          />
          <MagneticPill
            href="https://www.linkedin.com/in/ashutosh-manchanda-6a8861205/"
            icon="💼"
            label="LinkedIn"
            className="ty-pill-linkedin"
          />
          <MagneticPill
            href="https://github.com/SpYRoNy"
            icon="🐙"
            label="GitHub"
            className="ty-pill-github"
          />
          <MagneticPill
            href="/resume.pdf"
            icon="📄"
            label="Resume"
            className="ty-pill-resume"
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="ty-cta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.a
            href="/"
            className="ty-btn ty-btn-primary"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            Return Home
          </motion.a>
          <motion.a
            href="#projects"
            className="ty-btn ty-btn-secondary"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
