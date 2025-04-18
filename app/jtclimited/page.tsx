import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MyBizLogo from '../components/MyBizLogo'

const page = () => {
    return (
        <main className="px-6 mx-auto">
              <MyBizLogo/>
              <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                Thanks for looking up&nbsp;
                <span className="whitespace-nowrap">
                  I&lsquo;m <span className="font-bold">JTC Limited</span>.
                </span>&nbsp;
              </p>
              <p className="px-6 prose prose-xl prose-emerald dark:prose-invert mx-auto">
                This is my professional blog, where I write about technical writing, hardware, and coding. You can also find my portfolio and other relevant professional and social links above. Employment and business inquiries can be sent to alex-friedman-codes at protonmail dot com. Thanks for looking me up! 
              </p>
              
              
            </main>
    )
}
export default page