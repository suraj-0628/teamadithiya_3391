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
      <section>
        <Buttons />
      </section>
      <section className="gap-2 flex  overflow-x-auto">
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