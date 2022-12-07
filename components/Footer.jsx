'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const contactMe = () => {
  window.location = 'mailto:larsgerigk@gmx.de';
};

const Footer = () => (
  <div className="w-full h-full">
    <img src="IslandGame.png" className="absolute object-cover h-[25%] w-full" />
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="relative"
    >
      <div className={`${styles.paddings} relative mx-auto flex flex-col gap-4`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Get in touch
          </h4>
          <button type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
            onClick={() => contactMe()}
          >
            <img
              src="/email.png"
              alt="email"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Contact us
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="h-[2px] bg-white opacity-20" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              GERIGK TM
            </h4>
            <p className="font-normal text-[14px] text-white opacity-70">
              Copyright © 2022 Gerigk TM. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.imgUrl}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                  onClick={() => openInNewTab(social.url)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  </div>
);

export default Footer;
