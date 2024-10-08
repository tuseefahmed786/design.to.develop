import React, { useRef, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';

function Navbar() {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className='flex justify-between items-center px-4 py-2 md:px-8 md:p-4'>
        <div className='font-bold text-xl md:text-2xl'>
          <Link to="/">Design to Develop <span className='text-red-600'>.</span></Link>
        </div>
        {/* Hamburger Menu for Mobile View */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="block focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {/* Replace with your menu icon SVG or image */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* SlideTabs for larger screens */}
        <div className="hidden md:block bg-neutral-100">
          <SlideTabs />
        </div>
        <a
          href='https://www.linkedin.com/in/tuseef-ahmed-286a9521b/'
          className="hidden md:inline-block rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
        >
          Book Your Call
        </a>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden block bg-white p-4">
          <SlideTabs />
        </div>
      )}

      <Outlet />
      <Footer />
    </>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex flex-col md:flex-row w-full md:w-fit rounded-full md:border-2 md:border-black bg-white p-1"
    >
      <Tab setPosition={setPosition} to="/">Home</Tab>
      <Tab setPosition={setPosition} to="pricing">Pricing</Tab>
      <Tab setPosition={setPosition} to="service">Services</Tab>
      <Tab setPosition={setPosition} to="https://dribbble.com/farazahmed4462">Portfolio</Tab>
      <Tab setPosition={setPosition} to="https://www.linkedin.com/in/tuseef-ahmed-286a9521b/">Contact</Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, to }) => {
  const ref = useRef(null);

  return (
    <Link
      to={to}
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 hover:text-white text-sm uppercase text-black md:px-5 md:py-3 md:text-base"
    >
      {children}
    </Link>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default Navbar;
