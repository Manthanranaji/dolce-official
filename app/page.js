'use client';

import NavBar from "./navbar";
import { useState, useRef, useEffect } from "react";

const cards = [
  {
    name: "Italian Tiramisu",
    descr: "Layers of espresso-soaked ladyfingers, velvety mascarpone cream, and a dusting of dark cocoa — Dolce's most beloved classic.",
    image: "/p1.jpg",
  },
  {
    name: "Entremet",
    descr: "A show-stopping French dessert — a delicate matcha dome resting in a vivid blue mirror glaze, sculpted with a dark chocolate tree rising from within. Where pastry becomes art.",
    image: "/p9.jpg",
  },
  {
    name: "Brookie Blast",
    descr: "A warm brownie-cookie fusion, topped with a scoop of vanilla cream drizzled with dark chocolate sauce — served with a side pour of rich chocolate gravy.",
    image: "/p2.jpg",
  },
  {
    name: "Mango Tres Leches",
    descr: "A tropical twist on the classic — layers of soft cake soaked in three milks, topped with fresh mango chunks, chocolate crumble, and a warm mango pour-over sauce.",
    image: "/p4.jpg",
  },
  {
    name: "Carrot Cake",
    descr: "A moist, spiced carrot cake layered with velvety cream cheese frosting, finished with a hand-piped carrot garnish and chocolate crumble dusting.",
    image: "/p5.jpg",
  },
  {
    name: "Blueberry Serradura",
    descr: "A Portugese-inspired layered dessert — alternating bands of whipped cream and buscuit crumble, crowned with a vibrant compote, gold dust, and fresh mint.",
    image: "/p6.jpg",
  },
  {
    name: "Nutella Cheesecake",
    descr: "A silky baked cheesecake with a buttery biscuit base, topped with a rich Nutella glaze and delicate chocolate swirls — adorned with a hand crafter red sugar tuile and cocoa mandala dusting.",
    image: "/p7.jpg",
  },
  {
    name: "Blueberry Cheesecake",
    descr: "A creamy baked cheesecake on a dark biscuit base, generously topped with a glossy blueberry compote — plated with piped cream rosettes, biscuit crumble, and a fresh mint sprig.",
    image: "/p8.jpg",
  },
]

function Card({ name, descr, image }) {
  const ref = useRef(null)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFlipped(true)
      },
      { threshold: 0.7 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="card-flip">
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>

        <div className="card-back">
          <span className="font-cormorant text-white/20 tracking-widest text-sm">
            DOLCE
          </span>
        </div>

        <div className="card-front border border-white/10 p-6 flex justify-between items-center md:grid md:grid-cols-[1fr_1.5fr] md:gap-8 gap-4 backdrop-blur-md">

          <div className="w-full flex flex-col gap-4">
            <h3 className="text-3xl text-[#F0EDE6] md:text-5xl font-cormorant italic">
              {name}
            </h3>

            <p className="text-xs font-inter md:text-sm tracking-wider text-[#7A9E87]">
              {descr}
            </p>
          </div>

          <div className="w-full md:h-64">
            <img
              src={image}
              alt={name}
              className="rounded-sm w-full h-full md:object-contain md:rounded-lg object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  )
}


export default function Home(){
  return(
    <div className="min-h-screen w-full flex flex-col bg-[#050D08]">

      <NavBar/>

      <section className="w-full min-h-screen px-4 py-8 md:mt-44 flex flex-col text-center z-10 mt-36">
        <div className="w-full h-fit">
          <h1 className="font-cormorant opacity-0 animate-fade-up text-7xl md:text-9xl text-[#E8DDD0] uppercase tracking-wider">Dolce</h1>
          <p className="text-[#7A9E89] opacity-0 animate-fade-left [animation-delay:600ms] mt-2 font-inter tracking-widest md:text-lg text-xs">Bistro & Patisserie</p>
        </div>

        <div className="bg-[#8B5E2A] w-40 h-40 rounded-full blur-[40px] opacity-[0.3] mx-auto -mt-12 z-0"/>

        <img
          src="/table.png"
          height={300}
          width={300}
          className="w-[600px] -rotate-[3deg] -mt-40 z-0 md:mx-auto md:-mt-56"
        />

<div className="opacity-0 animate-fade-up [animation-delay:1400ms] flex items-center gap-6 mt-16 px-4">
  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#FFFFFF]/50" />

  <h2 className="text-[#FFFFFF]/50 tracking-wider font-inter text-sm whitespace-nowrap">
    Our Favourites
  </h2>

  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#FFFFFF]/50" />
</div>
      </section>

      <section id="fav" className="w-full h-fit px-4 py-16 -mt-48 flex flex-col md:mt-24">

      <div>
        {cards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </div>

      </section>
      <footer className="bg-[#C9A96E] py-10 px-6 text-center text-[#0A1510]">
        <p className="font-cormorant mb-1 text-2xl text-[#0A1510] tracking-wider">DOLCE</p>
        <p className="text-[9px] text-[#1A3024] font-inter tracking-widest mb-6">BISTRO & PATISSERIE · FINE DINING · NASHIK</p>
        <div className="flex justify-center gap-6 text-[#1b382b]/80 mb-6 font-inter text-sm tracking-widest">
          <a href="https://instagram.com/dolceby21st" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://zomato.onelink.me/xqzv/7nmvbt23" target="_blank" rel="noopener noreferrer">Zomato</a>
        </div>

        <p className="font-cormorant text-xs tracking-widest text-[#0A1510]/60">© DOLCE {new Date().getFullYear()}</p>

      </footer>
    </div>
  )
}