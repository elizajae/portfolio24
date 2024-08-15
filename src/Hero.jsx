import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1 id="">
          I
          <motion.div
            id="apostrophe"
            style={{
              display: "inline-block",
            }}
            initial={{ x: -1000, y: -200 }}
            animate={{ x: [-1000, -500, -200, 0], y: [0, -50, 0, -20, 0] }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 12,
              duration: 1.2,
            }}
          >
            '
          </motion.div>
          {/* <motion.div
            id="apostrophe"
            style={{
              display: "inline-block",
            }}
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              bounce: 20,
            }}
          >
            '
          </motion.div> */}
          m Eliza Christopher
          <motion.span
            id="period"
            style={{
              display: "inline-block",
            }}
            // Animate up and down twice to perform a double bounce across the y-axis as well as the x axis
            animate={{
              x: [-1000, 0],
              y: [0, -75, 0, -50, 0, -25, 0],
            }}
            transition={{
              duration: 1.2,
            }}
          >
            .
          </motion.span>
        </h1>
        <p>
          {" "}
          I'm a forward-thinking Software Developer specializing in front-end
          technologies. Passionate about solving real-world problems, I seek
          continuous growth and collaboration.{" "}
          <span id="hero">Let’s innovate together!</span>
        </p>
      </div>
      <img src="./images/stack-snippet1.png" alt="Eliza Christopher" />
    </div>
  );
};

export default Hero;

<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 180, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
  }}
/>;
