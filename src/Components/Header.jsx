import React from 'react'
import { useState } from 'react';

function Header() {
    const [isActive, setIsActive] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)"));
    function toggleMenu(){
        setIsActive(!isActive);
    }

    function darkModeToggle(){
        setIsDarkMode(!isDarkMode);
    }

    isDarkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');

    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="flex-4">
                        <a href="#Home" className="font-black text-lg text-secondary block py-6">Aruna <span className='text-primary dark:text-light font-black text-lg'>Project</span></a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className={`block absolute right-4 lg:hidden${isActive?' hamburger-active':''}`} onClick={toggleMenu}>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>

                        <nav id="nav-menu" className={`absolute py-5 bg-light shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none${isActive?'':' hidden'}`}>
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="text-base text-primary lg:dark:text-light py-2 mx-8 flex hover:underline transition-all duration-200 hover:text-secondary">Home</a>
                                </li>
                                <li className="group">
                                    <a href="#portfolio" className="text-base text-primary lg:dark:text-light py-2 mx-8 flex hover:underline transition-all duration-200 hover:text-secondary">Portfolio</a>
                                </li>
                                <li className="group">
                                    <a href="#contact" className="text-base text-primary lg:dark:text-light py-2 mx-8 flex hover:underline transition-all duration-200 hover:text-secondary">Contact</a>
                                </li>
                                <li className="group">
                                    <div className="flex py-2 mx-8">
                                        <label htmlFor="dark-toggle" onClick={darkModeToggle}>
                                            <div className="flex  cursor-pointer items-center rounded-full p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className={`fill-current bg-primary rounded-full text-light p-1 h-6 w-6 transition duration-300 ease-in-out ${isDarkMode?'hidden':''}`} height="16" width="20" viewBox="0 0 640 512"><path d="M495.8 0c5.5 0 10.9 .2 16.3 .7c7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-44.4 25.2-74.4 73-74.4 127.8c0 81 65.5 146.6 146.2 146.6c8.6 0 17-.7 25.1-2.1c6.9-1.2 13.8 2.2 17 8.5s1.9 13.8-3.1 18.7c-34.5 33.6-81.7 54.4-133.6 54.4c-9.3 0-18.4-.7-27.4-1.9c-11.2-22.6-29.8-40.9-52.6-51.7c-2.7-58.5-50.3-105.3-109.2-106.7c-1.7-10.4-2.6-21-2.6-31.8C304 86.1 389.8 0 495.8 0zM447.9 431.9c0 44.2-35.8 80-80 80H96c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"/></svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" className={`fill-current bg-light rounded-full text-primary p-1 h-6 w-6 transition duration-300 ease-in-out ${isDarkMode?'':'hidden'}`} height="16" width="20" viewBox="0 0 640 512"><path d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l14.1 84.7 84.7 14.1c5.4 .9 10 4.5 12.1 9.6s1.5 10.9-1.6 15.4l-38.5 55c-2.2-.1-4.4-.2-6.7-.2c-23.3 0-45.1 6.2-64 17.1l0-1.1c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c8.1 0 15.9-1 23.4-2.9c-36.6 18.1-63.3 53.1-69.8 94.9l-24.4 17c-4.5 3.1-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM144 208a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM639.9 431.9c0 44.2-35.8 80-80 80H288c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"/></svg>
                                            </div>
                                        </label>
                                    </div>
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