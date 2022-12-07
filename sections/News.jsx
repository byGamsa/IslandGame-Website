'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer, fadeIn } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const News = () => (
  <section className={`${styles.paddings} relative z-10`} id="news">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| News" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
      <motion.div
        variants={fadeIn('up', 'spring', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="hover:bg-gray-300 mt-[50px] mx-[35%] lg:mx-[40%] flex justify-center items-center glassmorphism rounded-[2px]">
          <h2 className='m-4 font-bold text-[15px] lg:text-[20px]'>
            Show More
          </h2>
      </motion.div>
    </motion.div>
  </section>
);

export default News;
