import React from 'react'
import Image from 'next/image'


export default function MyBizLogo() {
  return (
    <section className='w-full mx-auto'>
        <Image 
            className='border-4 border-black dark:border-emerald-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
            src="/images/jtc600cush.jpg"
            width={200}
            height={200}
            alt='JTC Logo'
            priority={true}
        />
    </section>
  )
}
