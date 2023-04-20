import Head from "next/head";
import { Inter } from 'next/font/google';
import {BsGithub} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jepleting Portofolio</title>
        <meta name="description" content=""></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Jepleting Linah</h1>
          <ul className="flex items-center">
            <li >
              <BsGithub className="cursor-pointer text-2xl"/>
            </li>
            <li><a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">Github Profile</a></li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Jepleting Linah</h2>
          <h3 className="text-2xl py-2">Software Engineer and Data Scientist.</h3>
          <p className="text-md py-5 leading-8 text-gray-800">A curious and self-driven software engineer with a knack for problem solving.
            I love to learn new technologies, and I am always looking for new opportunities.
            Lets connect and get cracking!
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillLinkedin/>
          <AiFillTwitterCircle/>
        </div>
      </section>
    </main>
    </div>
  )
}
