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

const Home = () => {
  return (
    <main>
      <Header></Header>
      <Hero id="section1"></Hero>
      <Brands></Brands>
      <HowToStart id=""></HowToStart>
      <InvestmentStrategies></InvestmentStrategies>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </main>
  )
}

export default Home
