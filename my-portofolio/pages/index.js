import Head from "next/head";
import { Inter } from 'next/font/google';
import {BsGithub} from 'react-icons/bs';



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
        
      </section>
    </main>
    </div>
  )
}
