import React from 'react'
import { useState } from 'react';

function Header() {
    const [isActive, setIsActive] = useState(false);
    function toggleMenu(){
        setIsActive(!isActive);
    }
    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="flex-4">
                        <a href="#Home" className="font-black text-lg text-secondary block py-6">Aruna <span className='text-primary font-black text-lg'>Project</span></a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className={`block absolute right-4 lg:hidden${isActive?' hamburger-active':''}`} onClick={toggleMenu}>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>

                        <nav id="nav-menu" className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none${isActive?'':' hidden'}`}>
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="text-base text-primary py-2 mx-8 flex hover:underline transition-all duration-200 hover:text-secondary">Home</a>
                                </li>
                                <li className="group">
                                    <a href="#portfolio" className="text-base text-primary py-2 mx-8 flex hover:underline transition-all duration-200 hover:text-secondary">Portfolio</a>
                                </li>
                                <li className="group">
                                    <a href="#contact" className="text-base text-primary py-2 mx-8 flex hover:underline transition-all duration-200 hover:text-secondary">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header