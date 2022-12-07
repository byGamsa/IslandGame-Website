'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const contactMe = () => {
  window.location = 'mailto:larsgerigk@gmx.de';
};

const Contact = () => (
  <section className={`${styles.paddings} relative z-10`} id="skills">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Contact" textStyles="text-center" />
      <TitleText title={<>Just send me a Email</>} textStyles="text-center" />
      <div className="mx-auto mt-[50px] flex lg:flex-row flex-col gap-20 items-center w-full">
        <div className="mt-[50px] flex flex-col gap-[30px] w-full h-[100%]">
        <motion.div
          variants={fadeIn('up', 'spring', 0.4, 1)}>
          <div className="w-full flex items-center flex-col gap-2 glassmorphism mb-[10px] rounded-[10px]">
            <div className='relative flex w-full gap-5 justify-between'>
              <motion.div
                className={`${styles.flexCenter} w-[20%] h-[40px] rounded-[10px] glassmorphism mb-[10px] mt-[15px] ml-[30%]`}
                variants={fadeIn('up', 'spring', 0.4, 1)}>
                  <input
                    type="text"
                    id="name"
                    placeholder=" Name *"
                    className="w-full h-full outline-transparent placeholder-white bg-transparent flex font-semibold rounded-[10px] text-white font-light">
                  </input>
              </motion.div>
              <motion.div
                className={`${styles.flexCenter} w-[35%] h-[40px] rounded-[10px] glassmorphism mb-[10px] mt-[15px] mr-[30%]`}
                variants={fadeIn('up', 'spring', 0.6, 1)}>
                  <input
                    type="text"
                    id="email"
                    placeholder=" Email *"
                    className="w-full h-full outline-transparent placeholder-white bg-transparent flex font-semibold rounded-[10px] text-white font-light">
                  </input>
              </motion.div>
            </div>
            <motion.div
              className={`${styles.flexCenter} w-[60%] h-[200px] rounded-[10px] glassmorphism mb-[10px]  mt-[15px]`}
              variants={fadeIn('up', 'spring', 0.8, 1)}>
                <textarea
                    type="text"
                    id="message"
                    placeholder=" Your Message *"
                    className="resize-none w-full h-full outline-transparent placeholder-white
                    bg-transparent flex font-semibold rounded-[10px] lg:text-[20px] text-[17px] text-white font-light">
                  </textarea>
            </motion.div>
            <motion.div>
                <button type="button"
                className="flex items-center h-fit py-4 px-6 glassmorphism rounded-[32px] gap-[12px] mb-[10px]"
                onClick={() => contactMe()}
              >
                <img
                  src="/email.png"
                  alt="email"
                  className="w-[24px] h-[24px] object-contain"
                />
                <span className="font-normal text-[16px] text-white">
                  Send Message
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Contact;
