import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";

import Hero from "./sections/Hero";
import Buttons from "./components/Buttons";
import { image2 } from "./assets";
const App =()=>{
  return (
    <main className="relative">
      <Nav />
      <section className=''><Hero /></section>
      {/* BUTTONS */}
      <section className="flex padding-x gap-10 pt-10">
      <button className='h-16 w-[20rem] bg-gray-300 rounded-3xl hover:bg-blue-400'>
        Hover here
        </button>

        <button className='h-16 w-[20rem] bg-gray-300 rounded-3xl hover:bg-red-400'>
        Hover here
        </button>

        <button className='h-16 w-[20rem] bg-gray-300 rounded-3xl hover:bg-green-400'>
        Hover here
        </button>

        <button className='h-16 w-[20rem] bg-gray-300 rounded-3xl hover:bg-yellow-400 '>
        Hover here
        </button>
      </section>
      {/*  */}
      <section className="padding-x pt-10">
        <h1 className="text-2xl font-bold">Watch Now</h1>
      </section>
      <section className=" flex  overflow-x-auto padding-x">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
      </section>
      {/* repeat above */}
      <section className="padding-x pt-10">
        <h1 className="text-2xl font-bold">Live from the club</h1>
      </section>
      <section className=" flex  overflow-x-auto padding-x">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
      </section>

       {/* repeat above */}
       <section className="padding-x pt-10">
        <h1 className="text-2xl font-bold">Latest Label Releases</h1>
      </section>
      <section className=" flex  overflow-x-auto padding-x">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
      </section>

      <section  className="pt-10">
      <div className='max-w-screen flex xl:flex-row flex-col justify-center h-[300px]  bg-black '>
        <img src={image2} width={2000} alt="" />
      </div>
      </section>
    </main>
  )
}

export default App ;