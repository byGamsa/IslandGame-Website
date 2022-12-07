'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const Overview = () => (
  <section className={`${styles.paddings} relative z-10 mt-[200px]`} id="overview">
    <div className='flex lg:flex-row flex-col gap-8'>
      <motion.div
        variants={fadeIn('right', 'tween', 0.1, 1)}
        initial="hidden"
        whileInView="show">
          <TitleText title={<>A NEW ERA HAS BEGUN</>}/>
          <p className="flex-1 font-normal text-[26px] text-secondary-black leading-[32.4px]">
          IslandGame is a free team-based action game set in a
          wondrous island landscape. Each match is an ultimate
          3v3 battle on different islands. Play with three of
          over 30 other unique skills, develop your hero and
          fight on islands around the world.
          </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="flex justify-center items-center w-full" >
          <img
            src="/IslandGame6.png"
            alt="get-started"
            className='rounded-[10px]'/>
      </motion.div>
    </div>
  </section>
);

export default Overview;
