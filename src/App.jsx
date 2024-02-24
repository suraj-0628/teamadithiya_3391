import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";

import Hero from "./sections/Hero";
const App =()=>{
  return (
    <main className="relative">
      <Nav />
      <section className=''><Hero /></section>
      <section className="gap-1">
       <Card />
      </section>
    </main>
  )
}

export default App ;