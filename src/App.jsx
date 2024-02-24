import React from "react";
import Nav from "./components/Nav";

import Hero from "./sections/Hero";
const App =()=>{
  return (
    <main className="relative">
      <Nav />
      <section className=''><Hero /></section>
      <section></section>
    </main>
  )
}

export default App ;