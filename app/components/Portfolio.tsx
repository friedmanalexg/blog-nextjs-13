import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';
import Link from 'next/link';


const Portfolio = () => {
  return (
    <div>
        <section className='mt-6 mx-auto max-w-2xl'>
            <h2 className='text-4xl font-bold dark:text-white/90'>Portfolio</h2>
            <p className='text-white'>Here is a sampling of my software development work.</p>
        </section>
        <section className='py-10 mt-6 mx-auto max-w-3xl'>
        <div className="flex justify-between">
            <div className="basis-1/3 flex-1">
              <h3>Jacobs' Chiropractic</h3>
              <Link className="text-white/90 hover:text-white" href="https://github.com/friedmanalexg/">
                    <FaGithub />
              </Link>
              <Link className="text-white/90 hover:text-white" href="https://jacobs-chiro.netlify.app/">
                    <FaLink />
              </Link>
              <p>JScript | React | Tailwind | Netlify</p>
              
              <Image
                className="rounded-lg object-cover"
                alt='Jacobs Chiropractic website'
                width={300}
                height={300}
                src={"/images/jacobschiro.png"}
              />
              <p>A frontend website for a small town Chiropractor, built to client specification.</p>
            </div>
            <div className="basis-1/3 flex-1">
              <h3>Shopping Here!</h3>
              <p>JScript | Firebase | Typescript | Netlify</p>
              <Image
                className="rounded-lg object-cover"
                alt='Shopping Here! webapp screenie'
                width={300}
                height={300}
                src={"/images/shoppinghere.png"}
              />
              <p>A dynamic shopping list app using Firebase for backend functionality.</p>
            </div>
            <div className="basis-1/3 flex-1">
              <h3>Tee'd Off</h3>
              <p>Ruby | Mastodon | Typescript | Netlify</p>
              <Image
                className="rounded-lg object-cover"
                alt='Teed off mastodon screenshot'
                width={300}
                height={300}
                src={"/images/teedoff.png"}
              />
            </div>
        </div>
            
        </section>
    </div>
  )
}

export default Portfolio