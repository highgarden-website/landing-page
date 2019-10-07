import React, { useEffect, useState } from "react"
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
      <Hero id="section1"></Hero>
      <HowToStart id="section2"></HowToStart>
      <InvestmentStrategies id="section3"></InvestmentStrategies>
      <Contact id="section5"></Contact>
    </main>
  )
}

export default Home
