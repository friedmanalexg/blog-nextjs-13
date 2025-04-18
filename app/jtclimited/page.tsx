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
                <span className="font-bold">JTC Limited</span>.
                </span>&nbsp;
              </p>
              <p className="px-6 prose prose-l prose-emerald dark:prose-invert mx-auto">
              JTC Limited is a technical compositions consultancy and independent publisher located in Newcomerstown, Ohio. Offering grant writing, draft composition, coding, proofing, editing, and project consulting services, JTC specializes in helping clients progress from ideas to submitted documents, both locally and abroad. JTC has helped clients obtain advanced degrees, start businesses, train employees, win job offers, and fund municipal emergency services. Established in 2024, JTC Limited now seeks to expand its offering to local interest studies and publications.
              </p>
              <br></br>
              <h2 className="px-8 prose prose-xl prose-emerald dark:prose-invert mx-auto">Our Offerings</h2>
              <p className="px-6 prose prose-l prose-emerald dark:prose-invert mx-auto">JTC Limited offers services aimed at individuals, businesses, and municipalities. JTC Limited aims to be affordable, professional, and pro-social in its work. All of JTC Limited’s offerings are bespoke, but sample products include:
              </p>
              <br></br>
              <ul className="px-6 prose prose-l prose-emerald dark:prose-invert mx-auto">
                <li>🖋️ individual resumes for the construction and HVAC industries</li>
                <li>🖋️ grants for municipal programs, public parks, and emergency services</li>
                <li>🖋️ academic reports, grants, and studies</li>
                <li>🖋️ business plans, website front-ends, marketing copy</li>
              </ul>
              <br></br>
              <p className="px-6 prose prose-l prose-emerald dark:prose-invert mx-auto">If you are an individual seeking professional documents to propel your next career move, or if you represent an entity seeking funding for your next project, JTC Limited can help.</p>
              <br></br>
              <h2 className="px-8 prose prose-xl prose-emerald dark:prose-invert mx-auto">Contact JTC Limited</h2>
              <p className="px-6 prose prose-l prose-emerald dark:prose-invert mx-auto">You can reach JTC Limited at jtclimited at protonmail dot com.</p>
              
            </main>
    )
}
export default page