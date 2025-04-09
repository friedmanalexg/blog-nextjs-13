import React from 'react'
import Image from 'next/image'

// I am currently incomplete. I need to add the logo image to public/images and link it up here.
export default function MyBizLogo() {
  return (
    <section className='w-full mx-auto'>
        <Image 
            className='border-4 border-black dark:border-emerald-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
            src="/images/portrait-600-x-600.jpg"
            width={200}
            height={200}
            alt='JTC Logo'
            priority={true}
        />
    </section>
  )
}
