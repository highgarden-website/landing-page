import React, { useEffect, useState } from "react"
import ReactPageScroller from "react-page-scroller"
import Header from "../components/Header"
import Hero from "../components/Hero"
import HowToStart from "../components/HowToStart"
import InvestmentStrategies from "../components/InvestmentStrategies"
import AboutUs from "../components/AboutUs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <main>
      <Header></Header>
      <ReactPageScroller>
        <Contact id="contactanos"></Contact>
        <Footer></Footer>
      </ReactPageScroller>
      <style jsx>{`
        main {
          max-height: 100vh;
        }
      `}</style>
    </main>
  )
}

export default Home
