import "./hero.scss";
import { motion } from "framer-motion";
function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",

      transition: { repeat: Infinity, duration: 20, repeatType: "mirror" },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>AHMED SHAABAN</motion.h2>
          <motion.h1 variants={textVariants}>Frontend dveloper</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a target="blank" href="https://github.com/shaban14617">
                See The Latest Works
              </a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img variants={textVariants} src="/scroll.png" alt="" animate="scrollButton" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Web Developer Frontend Engineer
      </motion.div>
      <div className="imageContainer">
        <img src="heroo.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
