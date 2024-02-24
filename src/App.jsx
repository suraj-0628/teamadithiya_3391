import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";

import Hero from "./sections/Hero";
import Buttons from "./components/Buttons";
const App =()=>{
  return (
    <main className="relative">
      <Nav />
      <section className=''><Hero /></section>
      {/* BUTTONS */}
      <section className="flex padding-x gap-10 pt-10">
      <button className='h-16 w-[20rem] bg-slate-300 rounded-3xl hover:bg-blue-400'>
        </button>

        <button className='h-16 w-[20rem] bg-slate-300 rounded-3xl hover:bg-red-400'>
        </button>

        <button className='h-16 w-[20rem] bg-slate-300 rounded-3xl hover:bg-green-400'>
        </button>

        <button className='h-16 w-[20rem] bg-slate-300 rounded-3xl hover:bg-yellow-400 '>
        </button>



        {/* <Buttons />
        <Buttons />
        <Buttons /> */}
      </section>
      {/*  */}
      <section className=" flex  overflow-x-auto padding-x">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
      </section>
    </main>
  )
}

export default App ;