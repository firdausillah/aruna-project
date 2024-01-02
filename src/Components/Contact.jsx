import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 dark:bg-primary">
        <div className="container">
            <div className="relative flex flex-wrap justify-center">
                <div className="w-ful self-center px-4 text-center">
                    {/* <h3 className="text-base font-semibold text-secondary mb-2 lg:text-xl">HELLO, I'AM <span className="font-bold text-primary italic">FIRDAUSILLAH</span></h3> */}
                    <h1 className='font-bold text-3xl md:text-4xl text-primary dark:text-secondary mb-2 md:mb-3'>Have Any Project in Your Mind?</h1>
                    {/* <p className="font-light text-sm text-primary mb-10 leading-tight lg:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ad in quibusdam ipsam, fuga reprehenderit unde sit quia expedita.</p> */}
                    <div className='w-1/2 h-[3px] bg-secondary rounded-sm mb-10 aligh-center mx-auto sm:mx-0'></div>
                    <a href="wa.me/6285212125044" className="font-semibold text-white bg-primary dark:text-primary dark:bg-light py-2 px-5 md:py-3 md:px-8 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out text-sm md:text-base">Contact Me On Whatsapp</a>

                </div>
            </div>
        </div>
      </section>
  )
}

export default Contact