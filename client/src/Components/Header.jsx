import React from 'react';
import Logo from '/images/PraxisEd_Logo.png';

const Header = () => {
    return (
        <>
            <header className='w-full flex items-center justify-between py-2 px-6 bg-transparent shadow-md poppins fixed top-0 left-0 right-0 z-20'>
                <div className="flex items-center">
                    <a href="/" className="flex items-center">
                        <img src={Logo} alt="PraxisEd Logo" className='w-28 h-auto' />
                    </a>
                </div>

                <section className='flex items-center gap-6'>
                    <nav className="space-x-8">
                        <a href="#about" className='text-praxised-blue hover:text-praxised-sky text-lg font-medium transition-colors duration-300'>
                            About Us
                        </a>
                        <a href="#features" className='text-praxised-blue hover:text-praxised-sky text-lg font-medium transition-colors duration-300'>
                            Features
                        </a>
                        <a href="#how-it-works" className='text-praxised-blue hover:text-praxised-sky text-lg font-medium transition-colors duration-300'>
                            How It Works
                        </a>
                        <a href="#benefits" className='text-praxised-blue hover:text-praxised-sky text-lg font-medium transition-colors duration-300'>
                            Benefits
                        </a>
                        <a href="#contact" className='text-praxised-blue hover:text-praxised-sky text-lg font-medium transition-colors duration-300'>
                            Contact Us
                        </a>
                    </nav>

                    <a
                        href="/register"
                        className='px-5 py-2 bg-praxised-sky text-white rounded-full hover:bg-praxised-blue transition-colors duration-300 text-lg font-medium'
                    >
                        Register
                    </a>
                </section>
            </header>
        </>
    );
};

export default Header;