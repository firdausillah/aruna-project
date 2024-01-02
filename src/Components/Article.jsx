import React from 'react'
import articles from '../lib/articles';


function Portfolio() {

  return (
    <section id='portfolio' className='py-28 bg-light dark:bg-light relative z-10'>
      <div className="container text-center">
        <h3 className='font-bold text-xl text-primary'>Lates Blog</h3>
        <div className="flex flex-wrap justify-center mt-5 gap-4 w-full">
          
          {articles.map((data, index)=>(
            <div key={index} className="mb-5 p-4 md:w-1/3 lg:w-1/4">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white relative hover:scale-110 transition-all duration-300">
                  <img src={data.img} alt="Portfolio" className="w-full"/>
                  <div className='bg-white bg-opacity-90 p-4 w-full'> 
                    <h3 className="text-left font-semibold text-lg text-primary mt-1 mb-2 line-clamp-1 overflow-hidden">{data.title}</h3>
                    <p className='text-left line-clamp-2 text-ellipsis overflow-hidden text-primary mb-2'>
                      {data.article}
                    </p>
                    <div className='flex flex-wrap gap-4 my-2'>
                      <a href={data.link} target='blank' className='text-xs text-light font-semibold rounded-md bg-primary px-2 py-1 flex gap-1 items-center'>
                        Baca Selengkapnya
                      </a>
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