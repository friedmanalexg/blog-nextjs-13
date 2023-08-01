import React from 'react';
import Image from 'next/image';


const Portfolio = () => {
  return (
    <div>
        <section className='mt-6 mx-auto max-w-2xl'>
            <h2 className='text-4xl font-bold dark:text-white/90'>Portfolio</h2>
            <p className='text-white'>Here is a sampling of my software development work.</p>
        </section>
        <section className='py-10'>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                alt='Jacobs Chiropractic website'
                width={200}
                height={200}
                layout="responsive"
                src={"/images/jacobschiro.png"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt='Shopping Here! webapp screenie'
                width={200}
                height={200}
                layout="responsive"
                src={"/images/shoppinghere.png"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                alt='Teed off mastodon screenshot'
                width={100}
                height={200}
                layout="responsive"
                src={"/images/teedoff.png"}
              />
            </div>
        </div>
            
        </section>
    </div>
  )
}

export default Portfolio