import App from "next/app"
import Head from "next/head"
import React from "react"
import { StateProvider } from "../state"

const initialState = {
  selectedPlan: { value: "Elegi", label: "Elegi tu estrategia de inversion" }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "changeSelectedPlan":
      return {
        ...state,
        plan: action.newPlan
      }

    default:
      return state
  }
}

class HighgardenApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    )
  }
}

export default HighgardenApp
