import React from 'react'
import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
        <Image 
            className='border-4 border-black dark:border-emerald-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
            src="/images/portrait-600-x-600.jpg"
            width={200}
            height={200}
            alt='Alex G Friedman'
            priority={true}
        />
    </section>
  )
}
