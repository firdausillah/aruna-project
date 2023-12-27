import React from 'react'
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <section className='bg-light p-2'>
        <div className='container mx-auto flex flex-wrap justify-between'>
            <p className='text-primary text-sm italic my-auto'>Typed With <span className='font-reguler'>🩷</span> by Aruna Project</p>
            <div className=' scale-75'>
                <SocialMedia color='primary' />
            </div>
        </div>
    </section>
  )
}

export default Footer