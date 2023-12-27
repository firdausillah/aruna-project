import React from 'react'

function Contact() {
  return (
    <section id="home" className="py-28 md:py-36">
        <div className="container">
            <div className="relative flex flex-wrap justify-center">
                <div className="w-ful self-center px-4 text-center">
                    {/* <h3 className="text-base font-semibold text-secondary mb-2 lg:text-xl">HELLO, I'AM <span className="font-bold text-primary italic">FIRDAUSILLAH</span></h3> */}
                    <h1 className='font-bold text-3xl md:text-4xl text-primary mb-2 md:mb-3'>Have Any Project in Your Mind?</h1>
                    {/* <p className="font-light text-sm text-primary mb-10 leading-tight lg:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ad in quibusdam ipsam, fuga reprehenderit unde sit quia expedita.</p> */}
                    <div className='w-1/2 h-[3px] bg-secondary rounded-sm mb-10 aligh-center mx-auto sm:mx-0'></div>
                    <a href="#contact" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hire me</a>

                </div>
            </div>
            <div className='absolute w-1/4 h-[1000px] xl:w-1/3 hidden lg:block top-0 right-0 bg-light z-0'></div>
        </div>
      </section>
  )
}

export default Contact