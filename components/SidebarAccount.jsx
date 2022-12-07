'use client';

import React from 'react';
import * as ioIcons from 'react-icons/io';

const SidebarAccount = ({ Sidebar, Toggle }) => (
  <section className="flex visible lg:invisible">
    <div className={`duration-500 ${Sidebar ? 'w-[80%] sm:w-[500px]' : 'w-[0px]'} drop-shadow-xl right-0 z-50 fixed h-full bg-slate-300`}>
      <h2 className={`visible lg:invisible duration-300 ${Sidebar ? 'opacity-100 visible' : 'opacity-0 invisible'}
                        flex justify-center items-center font-extrabold text-[25px]
                        sm:text-[30px] leading-[30px] text-white mt-[5px]`}
      >
        Island Game
      </h2>
      <ioIcons.IoMdClose
        className={`absolute duration-300 ${Sidebar ? 'opacity-100 visible' : 'opacity-0 invisible'} glassmorphism rounded-[4px]
                      inset-y-0 right-0 scale-[200%] m-4 z-50`}
        onClick={Toggle}
      />
    </div>
  </section>
);

export default SidebarAccount;
