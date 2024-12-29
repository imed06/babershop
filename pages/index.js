import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FaHeart, FaShoppingCart, FaBars, FaRegHeart, FaPlay, FaQuoteRight } from 'react-icons/fa';
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiMenu3Line, RiScissorsFill } from "react-icons/ri";
import { Playwrite_AU_VIC, Rubik } from 'next/font/google'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";


const inter = Playwrite_AU_VIC({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {


  return (
    <div>
      <Head>
        <title>Book my barber</title>
        <meta name="description" content="Discover exquisite watches crafted to perfection." />
        <link rel="icon" href="/barber.png" />
      </Head>

      <header className="bg-[#FDF4E5] text-black  w-full">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className={`${inter.className} text-3xl text-[#906B32] font-bold`}>Book my barber</h1>
          <nav>
            <ul className={`${rubik.className} flex space-x-6`}>
              <li><a href="#home" className="text-black font-bold  hover:text-[#906B32]">Home</a></li>
              <li><a href="#collection" className="text-black font-bold hover:text-[#906B32]">Barber shops</a></li>
              <li><a href="#about" className="text-black font-bold hover:text-[#906B32]">Free hours</a></li>
              <li><a href="#contact" className="text-black font-bold hover:text-[#906B32]">About us</a></li>
              <li><a href="#contact" className="text-black font-bold hover:text-[#906B32]">Contact us</a></li>
              <li><a href="#contact" className="p-3 bg-black font-bold text-white rounded-lg ">Book our barber now</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className={`${rubik.className}relative bg-[#FDF4E5] h-screen text-white flex items-center justify-center`}>
          {/* Video background */}
          <div className="absolute left-40">
            <RiScissorsFill color='#906B32' size={32} />
            <p className="mt-4 text-7xl text-black font-bold">We know your<br></br>
              style <span className='text-[#906B32]'>better</span></p>
            <h2 className="text-xl text-black mt-5">Trust My barber shop loream dkf sdflskd lsksd

            </h2>

            <div className="flex items-center mt-6">
              <button href="#contact" className="p-3 px-4 hover:bg-[#906B32] font-bold text-[#906B32] hover:text-white rounded-lg border-2 border-[#906B32] ">Book our barber now</button>
              <button href="#contact" className=" ml-5 p-4 px-4 bg-black font-bold text-white rounded-lg ">
                <FaPlay />
              </button>
              <h2 className="text-xl text-black  ml-2 font-bold">Watch our story </h2>

            </div>
            <div class="flex justify-center items-center mt-8 ">
              <div class="animate-bounce ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-10 h-10 text-[#906B32]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

          </div>

          <img class=" absolute rotate-12 right-60 h-2/3 max-w-1/2 rounded-lg" src="barber2.jpg" alt="" />
          <img class=" absolute  -rotate-12 right-60 h-2/3 max-w-1/2 rounded-lg" src="barber1.jpg" alt="" />

        </section>

        <section id="collection" className={`${rubik.className} py-16 bg-[#FDF4E5]`}>
          <div className="container mx-auto text-center">
            <h3 className="text-5xl text-[#906B32] font-bold" >DISCOVER OUR<span className='p-1 px-2 ml-2 bg-[#906B32] text-white'>WORKS</span></h3>
            <div class="grid grid-cols-4 md:grid-cols-4 gap-2 mt-8 m-8 mx-auto">
              <div class="grid gap-2">
                <div>
                  <img class="h-auto max-w-full" src="barber1.jpg" alt="Barber 1" />
                </div>
                <div>
                  <img class="h-auto max-w-full" src="barber3.jpg" alt="Barber 2" />
                </div>
                <div>
                  <img class="h-auto max-w-full" src="barber2.jpg" alt="Barber 1" />
                </div>
              </div>
              <div class="grid gap-2">
                <div>
                  <img class="h-auto max-w-full " src="barber2.jpg" alt="Barber 3" />
                </div>
                <div>
                  <img class="h-auto max-w-full" src="barber6.jpg" alt="Barber 1" />
                </div>
                <div>
                  <img class="h-auto max-w-full" src="barber1.jpg" alt="Barber 2" />
                </div>
              </div>
              <div class="grid gap-2">
                <div>
                  <img class="h-auto max-w-full" src="barber5.jpg" alt="Barber 1" />
                </div>
                <div>
                  <img class="h-auto max-w-full" src="barber10.jpg" alt="Barber 1" />
                </div>
                <div>
                  <img class="h-auto max-w-full" src="barber2.jpg" alt="Barber 1" />
                </div>
              </div>
              <div class="grid gap-2">
                <div>
                  <img class="h-auto max-w-full " src="barber8.jpg" alt="Barber 1" />
                </div>
                <div>
                  <img class="h-auto max-w-full " src="barber9.jpg" alt="Barber 1" />
                </div>
                <div>
                  <img class="h-auto max-w-full " src="barber3.jpg" alt="Barber 1" />
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="collection" className=" bg-[#FDF4E5]">

          <div class="min-h-screen  text-gray-900 flex justify-center">
            <div class="max-w-screen-xl m-0 sm:m-10 sm:rounded-lg flex justify-center flex-1">
              <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div class="mt-12 flex flex-col items-center">
                  <h1 class="text-3xl xl:text-5xl text-[#906B32] font-bold">
                    BOOK AN <span className='p-1 px-2 mt-8 bg-[#906B32] text-white'>APPOINTEMENT</span>
                  </h1>
                  <div class="w-full flex-1 mt-8">


                    <div class="mx-auto max-w-xs">
                      <input
                        class="w-full px-8 py-4 font-medium bg-[#FDF4E5] border border-[#906B32] placeholder-gray-700 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email" placeholder="NAME" />
                      <input
                        class="w-full px-8 py-4 font-medium bg-[#FDF4E5] border border-[#906B32] placeholder-gray-700 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password" placeholder="EMAIL" />
                      <button
                        class="mt-5 tracking-wide bg-[#906B32] text-gray-100 font-bold py-4 px-2 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                        REQUEST BARBER
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1  text-center hidden lg:flex">
                <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/barber2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="collection" className=" bg-[#FDF4E5]">

          <div class="min-h-screen  text-gray-900 flex justify-center">
            <div class="max-w-screen-xl m-0 sm:m-10 sm:rounded-lg flex justify-center flex-1">
              <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div class="flex flex-col items-center">
                  <h1 class="text-3xl xl:text-5xl text-[#906B32] font-bold">
                    OUR <span className='p-1 px-2 mt-8 bg-[#906B32] text-white'>PRICES</span>
                  </h1>
                  <div class="w-full flex-1 mt-8">
                    <div class="flex justify-between items-center py-4 border-b border-dotted border-gray-700">
                      <h2 class="text-xl font-bold">HAIRCUT</h2>
                      <span class="text-[#70927B] text-xl font-bold">40$</span>
                    </div>
                    <div class="flex justify-between items-center py-4 border-dotted border-b border-gray-700">
                      <h2 class="text-xl font-bold">SHAVE</h2>
                      <span class="text-[#70927B] text-xl font-bold">35$</span>
                    </div>
                    <div class="flex justify-between items-center py-4 border-dotted border-b border-gray-700">
                      <h2 class="text-xl font-bold">HAIRCUT + SHAVE</h2>
                      <span class="text-[#70927B] text-xl font-bold">70$</span>
                    </div>
                    <div class="flex justify-between items-center py-4 border-dotted border-b border-gray-700">
                      <h2 class="text-xl font-bold">BEARD TRIM</h2>
                      <span class="text-[#70927B] text-xl font-bold">15$</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 text-center hidden lg:flex ">
                
                <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                  <h1 class="text-3xl xl:text-3xl text-[#906B32] font-bold">
                    WHAT CLIENTS SAY
                  </h1>

                  <blockquote class="text-xl mt-6 italic font-semibold text-gray-900 dark:text-white">
                    <FaQuoteRight color='#70927B' />
                    Your works are really nice. I trust your artists and hope that the next piece will be even better than I imagine.</blockquote>
                  <blockquote class="text-xl mt-6 italic font-semibold text-gray-900 dark:text-white">
                    <FaQuoteRight color='#70927B' />

                    <p>If you are looking for the place to get your first tattoo or piercing, this is the exact place to get the perfect experience.</p>
                  </blockquote>

                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
      <footer className="bg-[#FDF4E5] text-xl flex justify-center gap-8 text-[#906B32] py-4 text-center">
        <p>&copy; 2024 VARMA. All rights reserved.</p>
        <p className='flex items-center'>
          <FaLocationDot /> 1234 Main Street, Denver, CO 80202
        </p>
        <p className='flex items-center'>
          <IoMdPhonePortrait /> 303-555-1234
        </p>
      </footer>
    </div>
  );
}
