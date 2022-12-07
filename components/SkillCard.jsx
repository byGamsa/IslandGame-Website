'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const SkillCard = ({ title, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 1)}
    className="flex md:flex-row flex-col gap-4 w-full"
  >
    <div className="w-full flex justify-between items-center">
      <div className={`${styles.flexCenter} w-full h-[50px] rounded-[24px] glassmorphism mb-[10px]`}>
        <h4 className="absolute font-semibold lg:text-[42px] text-[15px] text-white ">
          {title}
        </h4>
      </div>
    </div>
  </motion.div>
);

export default SkillCard;
