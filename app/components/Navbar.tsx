import React from 'react'
import Link from 'next/link'
import {FaGithub, FaMastodon, FaLinkedin} from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-emerald-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href="/" className="text-white/90 no-underline hover:text-white"> Alex Friedman codes</Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-3xl">
                    <Link className='text-white/90 hover:text-white' href={"/portfolio"}> 
                    Portfolio
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/alex-friedman-codes/">
                        <FaLinkedin />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://dice.camp/@bigtuffal">
                        <FaMastodon />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://github.com/friedmanalexg">
                        <FaGithub />
                    </Link>
            </div>
        </div>
    </nav>
  )
}
