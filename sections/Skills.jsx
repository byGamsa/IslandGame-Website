'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { skills } from '../constants';
import { staggerContainer } from '../utils/motion';
import { SkillCard, TitleText, TypingText } from '../components';

const Skills = () => (
  <section className={`${styles.paddings} relative z-10`} id="skills">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Skills" textStyles="text-center" />
      <TitleText title={<>Some of my Skills</>} textStyles="text-center" />
      <div className="mt-[50px] flex lg-flex-row flex-col gap-10 items-center">
        <div className="flex gap-[30px] w-full">
          {skills.slice(0, 3).map((item, index) => (
            <SkillCard key={`skill-${index}`} {...item} index={index + 1} />
          ))}
        </div>
        <div className="flex gap-[30px] w-full">
          {skills.slice(3, 6).map((item, index) => (
            <SkillCard key={`skill-${index}`} {...item} index={index + 1 + 3} />
          ))}
        </div>
        <div className="flex gap-[30px] w-full">
          {skills.slice(6, 9).map((item, index) => (
            <SkillCard key={`skill-${index}`} {...item} index={index + 1 + 6} />
          ))}
        </div>
      </div>
    </motion.div>
    <h1>{'\u00A0'}</h1>
    <h1>{'\u00A0'}</h1>
    <h1>{'\u00A0'}</h1>
    <h1>{'\u00A0'}</h1>
    <h1>{'\u00A0'}</h1>
    <h1>{'\u00A0'}</h1>
    <h1>{'\u00A0'}</h1>
  </section>
);

export default Skills;
