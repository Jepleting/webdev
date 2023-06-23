import Head from "next/head";
import { Inter } from 'next/font/google';
import {BsGithub} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import avatar from "../public/avatar1.jpg";
import Link from 'next/link';



// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jepleting Portofolio</title>
        <meta name="description" content=""></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-7 mb-7 flex justify-between">
          <h1 className="text-xl font-burtons">Jepleting Linah</h1>
          <ul className="flex items-center">
            <li >
              <BsGithub className="cursor-pointer text-2xl"/>
            </li>
            <li><a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="https://github.com/Jepleting">Github Profile</a></li>
          </ul>
        </nav>
        <div className="text-center p-7">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Jepleting Linah</h2>
          <h3 className="text-2xl py-2 md:text-3xl">Software Engineer and Data Scientist.</h3>
          <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto ">A curious and self-driven software engineer with a knack for problem solving.
            I learning new technologies, and I am always looking for new opportunities to expand my skillset.
            Lets connect and get cracking!
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <Link href="https://www.linkedin.com/in/jepleting-linah-5643b31b1/"><AiFillLinkedin/></Link>
        <Link href="https://twitter.com/jepleting_11780"> <AiFillTwitterCircle/></Link>
        </div>
        <div className="relative mx-auto rounded-full w-80 h-80 mt-5 md:h-96 md:w-96">
          <Image src={avatar} />
        </div>
      </section>

      {/* section two */}
      <section>
        {/* <div>
          <h3 className="text-3xl py-1 text-black">My Skillset</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            I am very proficient in  Python programming language , React.js ,Next.js ,html and css.
          </p>
        </div> */}
        <div>
          <h3 className="text-3xl py-1 text-black">Personal Projects</h3>
          <div>
            <div className="flex space-x-10 mb-10"> 
              <div className="text-center shadow-xl rounded-xl my-10 h-80 w-80 grow-0">
                <h5 className="py-2 text-teal-600 text-lg">UI/UX</h5>
                <p className="text-black">I recently began learning UI/UX design.
                <Link  className=" text-teal-400" href="https://www.figma.com/file/Z8AffE4ivgHHKNzaFFZySt/Vitality?type=design&node-id=0%3A1&mode=dev">Click here</Link> to view a project I did in Figma</p>
              </div>
              <div className="text-center shadow-xl rounded-xl my-10 h-80 w-80 grow-0">
              <h5 className="py-2 text-teal-600 text-lg">Web-Development</h5>
                <p className="text-black">I am currently working on an e-commerce project for a store selling wallpapers.
                <Link  className=" text-teal-400" href="https://github.com/Jepleting/e-commerce-store">Click here</Link> to view my progress in Github.</p>
              </div>
              <div className="text-center shadow-xl rounded-xl my-10 h-80 w-80 grow-0">
              <h5 className="py-2 text-teal-600 text-lg">Data-Science</h5>
                <p className="text-black">I recently pivoted into Web Development from Data Science and you can view some of my previous projects 
                done with Python in my Github. </p>
              </div>
            </div>
          </div>

          
        </div>
      </section>
    </main>
    </div>
  )
}
