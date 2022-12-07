'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10 mt-[100px]`} id="about">
    <div className='flex lg:flex-row flex-col gap-8'>
      <motion.div
        variants={fadeIn('right', 'tween', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="flex justify-center items-center w-full" >
          <img
            src="/IslandGame.png"
            alt="get-started"
            className='rounded-[10px]'/>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.1, 1)}
        initial="hidden"
        whileInView="show">
          <TitleText title={<>FIGHTS SIDE BY SIDE WITH OTHER FRIENDS</>}/>
          <div className="flex flex-col gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature} /> ))}
          </div>
      </motion.div>
    </div>
  </section>
);

export default About;
