'use client';

import { motion } from "framer-motion";

import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.flexStart}`}>
    <video
      src="IslandVideo.mp4"
      className='absolute object-cover w-full h-[90%]'
      muted
      autoPlay
      preLoad="auto"
      loop >
    </video>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col mt-[350px]`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(0.1)} className={styles.heroHeading}>
          Island Game
        </motion.h1>
        <motion.h1 variants={textVariant(0.2)} className={`${styles.heroHeading2}`}>
          A FUTURE WORTH FIGHTING FOR
        </motion.h1>
        <motion.h1 variants={textVariant(0.3)} className={`${styles.heroHeading3}`}>
          TEAM-BASED ACTION • FREE TO PLAY
        </motion.h1>
        <motion.h1 variants={textVariant(0.4)}>
          <div className="flex justify-center items-center p-5 flex-col bg-[rgba(0,0,0,0.5)] rounded-[10px] bg-orange-500 mt-[50px]">
            <h2 className="font-bold text-[15px] sm:text-[20px] text-white">
              Play Now
            </h2>
          </div>
        </motion.h1>
      </div>
    </motion.div>

  </section>
);

export default Hero;
