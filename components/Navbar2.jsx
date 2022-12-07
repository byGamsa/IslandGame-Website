'use client';

import { motion } from 'framer-motion';

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { navVariants } from '../utils/motion';
import Sidebar from './Sidebar';
import SidebarAccount from './SidebarAccount';

const Navbar2 = () => {
  const [sidebar, setSidebar] = useState(false);
  const [accountSidebar, setAccountSidebar] = useState(false);

  const toggleSidebar = () => {
    if (accountSidebar) setAccountSidebar((prevState) => !prevState);
    setSidebar((prevState) => !prevState);
  };

  const toggleAccountSidebar = () => {
    if (sidebar) setSidebar((prevState) => !prevState);
    setAccountSidebar((prevState) => !prevState);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="visible lg:invisible z-40 fixed w-full"
      id="pgtop"
    >
      <Sidebar sidebar={sidebar} Toggle={toggleSidebar} />
      <SidebarAccount Sidebar={accountSidebar} Toggle={toggleAccountSidebar} />
      <div
        className={`visible lg:invisible ${accountSidebar ? 'visible' : 'invisible'} fixed w-full h-full bg-black opacity-50`}
        onClick={toggleAccountSidebar}
      />
      <div
        className={`visible lg:invisible ${sidebar ? 'visible' : 'invisible'} fixed w-full h-full bg-black opacity-50`}
        onClick={toggleSidebar}
      />
      <div className="flex justify-between items-center w-full h-[80px] bg-slate-300 drop-shadow">
        <FaIcons.FaBars
          className="scale-[200%] m-6 z-40"
          onClick={toggleSidebar}
        />
        <MdIcons.MdManageAccounts
          className="scale-[260%] m-6 z-40"
          onClick={toggleAccountSidebar}
        />
        <div className="absolute inset-0 flex justify-center items-center w-full h-full">
          <h2 className="font-extrabold text-[25px] sm:text-[30px]">
            Island Game
          </h2>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar2;
