import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa';

const page = () => {
    return (
        <div>
            <section className='mt-6 mx-auto max-w-3xl'>
                <h2 className='text-4xl font-bold dark:text-white/90'>Portfolio</h2>
                <p className='text-white'>Here is a sampling of my software development work.</p>
            </section>
            
            <section className='py-10 mt-6 mx-auto max-w-3xl'>
                <div className=" "> 
                {/* Card 1 */}
            
                    <div className=" bg-slate-400 rounded-xl text-center p-4 m-4 shadow-md">
                    <h3 className='text-slate-900 text-center text-xl font-bold mb-2'>Jacobs' Chiropractic</h3>
                    
                    <p className='text-white font-bold'>JScript | React | Tailwind | Netlify</p>
                    
                    <Image 
                        className=" w-full h-auto mb-4 rounded-md "
                        alt='Jacobs Chiropractic website'
                        width={600}
                        height={600}
                        src={"/images/jacobschiro.png"}
                    />
                    <div className='flex flex-row justify-center pt-4 sm:justify-evenly align-middle text-white text-2xl lg:text-3xl'>
                        <Link className="text-white/90 hover:text-white" href="https://github.com/friedmanalexg/">
                                <FaGithub />
                        </Link>
                        <Link className="text-white/90 hover:text-white" href="https://jacobs-chiro.netlify.app/">
                                <FaLink />
                        </Link>
                    </div>   
                    <p className='pt-3'>A frontend website for a small town Chiropractor, built to client specification.</p>
                    </div>
                
                {/* Card 2 */}

                    <div className=" bg-slate-400 rounded-xl text-center p-4 m-4 shadow-md">
                        <h3 className='text-slate-900 text-center text-xl font-bold mb-2'>Shopping Here!</h3>
                        
                        <p className='text-white font-bold'>JScript | Firebase | Typescript | Netlify</p>
                        
                        <Image 
                            className=" w-full h-auto mb-4 rounded-md "
                            alt='Shopping Here! webapp screenie'
                            width={600}
                            height={600}
                            src={"/images/shoppinghere.png"}
                        />
                        <div className='flex flex-row justify-center pt-4 sm:justify-evenly align-middle text-white text-2xl lg:text-3xl'>
                            <Link className="text-white/90 hover:text-white" href="https://github.com/friedmanalexg/wancho-bread-olly">
                                    <FaGithub />
                            </Link>
                            
                        </div>   
                        <p className='pt-3'>A dynamic shopping list app using Firebase for backend functionality.</p>
                    </div>


                {/* Card 3 */}
                    <div className=" bg-slate-400 rounded-xl text-center p-4 m-4 shadow-md">
                        <h3 className='text-slate-900 text-center text-xl font-bold mb-2'>Tee'd Off</h3>
                        
                        <p className='text-white font-bold'>Ruby | Mastodon | Typescript | Netlify</p>
                        
                        <Image 
                            className=" w-full h-auto mb-4 rounded-md "
                            alt='Jacobs Chiropractic website'
                            width={600}
                            height={600}
                            src={"/images/teedoff.png"}
                        />
                        <div className='flex flex-row justify-center pt-4 sm:justify-evenly align-middle text-white text-2xl lg:text-3xl'>
                            <Link className="text-white/90 hover:text-white" href="https://github.com/AndreaRose92/WaterUsageBot">
                                    <FaGithub />
                            </Link>
                            <Link className="text-white/90 hover:text-white" href="https://devpost.com/software/tee-d-off">
                                    <FaLink />
                            </Link>
                        </div>   
                        <p className='pt-3'>A webapp that posts about water waste on Mastodon.</p>
                    </div>                
                   
                </div>
                
            </section>

        </div>
      )
    }

export default page