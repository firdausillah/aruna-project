import React from 'react'
import projects from '../lib/data';


function Portfolio() {

  return (
    <section id='portfolio' className='py-28 bg-primary relative z-10'>
      <div className="container text-center">
        <h3 className='font-bold text-xl text-light'>Portfolio</h3>
        <div className="flex flex-wrap justify-center mt-5 gap-4 w-full">
          
          {projects.map((data, index)=>(
            <div key={index} className="mb-5 p-4 md:w-1/3">
              <div className="rounded-md overflow-hidden shadow-lg bg-primary group relative hover:scale-110 transition-all duration-300">
                  <img src={data.img} alt="Portfolio" className="w-full"/>
                  <div className='bg-primary bg-opacity-90 absolute bottom-0 z-10 p-2 w-full'> 
                    <h3 className="font-semibold text-lg text-white mt-1">{data.title}</h3>
                    <div className='hidden group-hover:block mx-4 text-sm'>
                      <ul className='text-left'>
                        <li className='text-white line-clamp-2 text-ellipsis overflow-hidden'><span className='font-semibold'>Build With :</span> {data.build_with}</li>
                        <li className='text-white line-clamp-2 text-ellipsis overflow-hidden'><span className='font-semibold'>Year :</span> {data.year}</li>
                      </ul>
                      <div className='flex flex-wrap gap-4 my-2'>
                        <a href={data.github} target='blank' className='text-xs text-primary font-semibold rounded-md bg-light px-2 py-1 flex gap-1 items-center'>
                          <span><svg role="img" height='15px' className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></span>
                          Github
                        </a>
                        <a href={data.demo} target='blank' className='text-xs text-primary font-semibold rounded-md bg-light px-2 py-1 flex gap-1 items-center'>
                          <span><svg role="img" height='15px' className='fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></span>
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Portfolio