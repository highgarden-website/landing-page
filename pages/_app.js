import App from "next/app"
import Head from "next/head"
import React from "react"
import { StateProvider } from "../state"

class HighgardenApp extends App {
  constructor() {
    this.initialState = {
      selectedPlan: {
        value: "Elegi",
        label: "Elegi tu estrategia de inversion"
      }
    }

    this.reducer = (state, action) => {
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
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <StateProvider initialState={this.initialState} reducer={this.reducer}>
        <Component {...pageProps} />
      </StateProvider>
    )
  }
}

export default HighgardenApp
