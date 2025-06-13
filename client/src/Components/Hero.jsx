import React from 'react';
import HeroBg from '/public/images/HeroBG.png'
import Header from './Header';

const Hero = () => {
  return (
    <>
      <Header />
      <main className='w-full min-h-screen flex items-center justify-start'>
        <div className='absolute inset-0 bg-gradient-to-r from-off-white-bg via-off-white-bg/80 to-transparent'></div>

        <div className='relative z-10 max-w-3xl ml-8 px-8 py-16 text-left md:ml-16 lg:ml-24'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-praxised-blue leading-tight mb-4'>
            PraxisEd: <span className='text-praxised-teal'>Unlock</span> Your Institute's Potential
          </h1>

          <p className='text-xl md:text-2xl text-gray-700 mb-8 max-w-xl'>
            The definitive multi-tenant platform for JEE/NEET coaching institutes. Streamline operations, elevate learning, and achieve unparalleled student success.
          </p>

          <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
            <a
              href="/register"
              className='px-8 py-3 bg-praxised-teal text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-praxised-blue transition-all duration-300 transform hover:scale-105'
            >
              Get Started Free
            </a>
            <a
              href="#features"
              className='px-8 py-3 border-2 border-praxised-blue text-praxised-blue text-xl font-semibold rounded-lg shadow-lg hover:bg-praxised-blue hover:text-white transition-all duration-300 transform hover:scale-105'
            >
              Explore Features
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;