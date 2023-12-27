import React from 'react'
import Typewriter from 'typewriter-effect';
import SocialMedia from './SocialMedia';

function Hero() {
  return (
    <section id="home" className="py-28 md:py-36">
        <div className="container">
            <div className="relative flex flex-wrap md:justify-center">
                <div className="w-full self-center px-4 text-center lg:text-left md:w-1/2">
                    <h3 className="text-base font-semibold text-secondary mb-2 lg:text-xl">HELLO, I'AM <span className="font-bold text-primary italic">FIRDAUSILLAH</span></h3>
                    <h1 className='font-bold text-3xl md:text-4xl text-secondary mb-2'>
                        <Typewriter
                        options={{
                            strings: ['Web Programmer', 'Designer', 'Frontend Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </h1>
                    <p className="font-light text-sm text-primary mb-10 leading-tight lg:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ad in quibusdam ipsam, fuga reprehenderit unde sit quia expedita.</p>
                    <a href="#contact" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hire me</a>
                    <div className="lg:absolute mt-12 bottom-0">
                        <SocialMedia color='secondary' />
                    </div>
                </div>
                <div className="w-full self-end relative px-4 lg:w-1/2">
                    <div className="mt-10 relative z-50 lg:mt-0 lg:right-0">
                        <img src="src/assets/profile.png" alt="profile" className="md:max-w-[450px] max-w-full mx-auto"/>
                        <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 sm:scale-150 sm:bottom-0 md:top-32 lg:-bottom-0">
                            <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#01687b"
                                    d="M69.9,-21.2C77.1,-0.6,60.1,29.3,35.5,46.7C10.8,64.2,-21.4,69,-44.1,54.1C-66.8,39.2,-79.9,4.5,-71,-18.6C-62,-41.6,-31,-53,0.2,-53.1C31.4,-53.2,62.7,-41.9,69.9,-21.2Z"
                                    transform="translate(100 100) scale(1.1)" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='absolute w-1/4 h-[1000px] xl:w-1/3 hidden lg:block top-0 right-0 bg-light -z-10'></div>
        </div>
      </section>
  )
}

export default Hero