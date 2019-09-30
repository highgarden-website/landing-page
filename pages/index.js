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

const Home = () => {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <Section></Section>
    </main>
  )
}

export default Home
