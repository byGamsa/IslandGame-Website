'use client';

import { motion } from 'framer-motion';

import React from 'react';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`invisible lg:visible z-40 ${styles.xPaddings} py-8 fixed w-full`}
    id="pgtop"
  >
    <div className="flex w-full h-[80px] rounded-[10px] drop-shadow">
      <div className="flex flex-row justify-between w-full h-full bg-slate-300 rounded-[10px]">
        <div className="flex justify-center items-center h-full rounded-l-[10px] bg-slate-100">
          <h2 className="font-extrabold text-[20px] sm:text-[25px] mx-3">
            Island Game
          </h2>
        </div>
        <div className="flex justify-left items-center gap-2 mx-4">
          <div className="hover:bg-gray-400 flex rounded-[10px]">
            <a href="#overview">
              <h2 className="font-extrabold text-[15px] sm:text-[20px] text-slate-600 m-4 drop-shadow">
                Overview
              </h2>
            </a>
          </div>
          <div className="hover:bg-gray-400 flex rounded-[10px]">
            <a href="#islands">
              <h2 className="font-extrabold text-[15px] sm:text-[20px] text-slate-600 m-4 drop-shadow">
                Islands
              </h2>
            </a>
          </div>
          <div className="hover:bg-gray-400 flex rounded-[10px]">
            <a href="#news">
              <h2 className="font-extrabold text-[15px] sm:text-[20px] text-slate-600 m-4 drop-shadow">
                News
              </h2>
            </a>
          </div>
          <div className="hover:bg-gray-400 flex rounded-[10px]">
            <a href="#community">
              <h2 className="font-extrabold text-[15px] sm:text-[20px] text-slate-600 m-4 drop-shadow">
                Community
              </h2>
            </a>
          </div>
          <div className="hover:bg-gray-400 flex rounded-[10px]">
            <a href="#shop">
              <h2 className="font-extrabold text-[15px] sm:text-[20px] text-slate-600 m-4 drop-shadow">
                Shop
              </h2>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center rounded-[10px] bg-orange-500 m-2">
          <h2 className="font-extrabold text-[15px] sm:text-[20px] text-white mx-3">
            Play Now
          </h2>
        </div>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
