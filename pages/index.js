import React, { useEffect, useState } from "react"
import Section from "../components/Section"
import Panel from "../components/Panel"
import Text from "../components/Text"
import Button from "../components/Button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Input from "../components/Input"
import Select from "../components/Select"
import CircleDownDbutton from "../components/CircleDownButton"
import Hero from "../components/Hero"
import HowToStart from "../components/HowToStart"
import InvestmentStrategies from "../components/InvestmentStrategies"
import AboutUs from "../components/AboutUs"
import Brands from "../components/Brands"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <main>
      <Header></Header>
      <Hero id="section1"></Hero>
      <HowToStart id="section2"></HowToStart>
      <InvestmentStrategies id="section3"></InvestmentStrategies>
      <Contact id="contact"></Contact>
    </main>
  )
}

export default Home
