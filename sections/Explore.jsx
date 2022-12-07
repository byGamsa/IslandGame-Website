'use client';

import { useState } from "react";
import { motion } from "framer-motion";

import styles from '../styles'
import {staggerContainer} from '../utils/motion'
import { ExploreCard, TypingText } from "../components";
import {exploreWorlds} from '../constants'
import { TitleText2, TypingText2 } from "../components/CustomTexts";

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.yPaddings} relative `} id="islands">
      <img src="IslandGame5.png" className='absolute object-cover h-full w-full'></img>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`} >
        <TitleText2
          title={<>Shape your Island and discover<br className="md:block hidden" /> new Areas and Waters</>}
          textStyles="drop-shadow-xl text-center font-extrabold" />
      </motion.div>
    </section>
  );
};

export default Explore;
