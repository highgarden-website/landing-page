import { useEffect, useState } from "react"
import useForm from "react-hook-form"
import Select from "react-select"
import { useStateValue } from "../state"
import Text from "./Text"
import Section from "./Section"
import Button from "./Button"

let contactEndpoint =
  "https://script.google.com/macros/s/AKfycbzzw38S4tTv-Th1DoZkFSlnQXc04Bo0OAPo5I0Xx9T0xoxhKUrA/exec"

const styleSelect = {
  control: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontFamily: "Gilroy",
      borderColor: "var(--gray-5)",
      fontSize: "18px",
      lineHeight: "35px",
      backgroundColor: "var(--gray-5)",
      border: "none",
      outline: "none",
      maxHeight: "48px",
      boxShadow: isFocused ? "inset 0 0 0 2px var(--green)" : "none",
      ":hover": {
        ...styles[":hover"],
        boxSizing: "borderBox",
        borderRadius: "5px",
        boxShadow: "inset 0 0 0 2px var(--green)"
      }
    }
  },
  input: styles => ({ ...styles, color: "#fff" }),
  indicatorSeparator: styles => ({ ...styles, display: "none" }),
  menuList: styles => ({ ...styles, backgroundColor: "var(--gray-5)" }),
  singleValue: styles => ({ ...styles, color: "#fff" }),
  valueContainer: styles => ({ ...styles, height: "48px" }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? "var(--gray-5)"
        : isFocused
        ? "var(--gray-3)"
        : "var(--gray-5)",

      cursor: isDisabled ? "not-allowed" : "pointer",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && "var(--gray-3)"
      }
    }
  }
}
const options = [
  { value: "hg-fixed", label: "HG fixed Income" },
  { value: "hg-propietary", label: "HG Propietary Model" },
  { value: "hg-propietary-hr", label: "HG Propietary Model High Return" }
]

export function Form() {
  const [{ plan }, dispatch] = useStateValue()
  const [buttonMessage, setbuttonMessage] = useState("Enviar")
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      selectedPlan: plan
    }
  })

  const [values, setSelectedPlan] = useState({
    selectedPlan: plan
  })

  const onSubmit = data => {
    setbuttonMessage("Enviando...")
    fetch(contactEndpoint, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      setTimeout(() => {
        setbuttonMessage("Enviar")
      }, 3000)
      reset()
      setbuttonMessage("Enviado!")
    })
  }

  const handlePlanChange = selectedPlan => {
    dispatch({
      type: "changeSelectedPlan",
      newPlan: selectedPlan
    })
  }

  useEffect(() => {
    if (plan) {
      setValue("plan", plan.label)
      setSelectedPlan(plan)
    }
    register({ name: "plan" })
  }, [plan])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <input ref={register({ required: true })} name="name" type="text" />
        <label htmlFor="name">Nombre</label>
      </div>

      <div className="input-wrapper">
        <input ref={register({ required: true })} name="email" type="email" />
        <label htmlFor="email">E-Mail</label>
      </div>

      <div className="input-wrapper">
        <Select
          name="strategy"
          placeholder={
            <div style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Elegi entre los 3 tipos de inversion
            </div>
          }
          isSearchable={false}
          classNamePrefix="select"
          value={plan ? plan : ""}
          options={options}
          onChange={handlePlanChange}
          options={options}
          styles={styleSelect}
        />
        <label htmlFor="strategy">Estrategias de Inversión</label>
      </div>

      <div className="input-wrapper">
        <textarea ref={register({ required: true })} name="message" />
        <label htmlFor="message">Mensaje (Opcional)</label>
      </div>

      <button type="submit" style={{ position: "relative", zIndex: "100" }}>
        {buttonMessage}
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <Section id="contacto" columns="2" tight>
      <aside className="left">
        <div className="line"></div>
        <Text h2>Contactanos</Text>
        <div className="paragraph">
          <Text p style={{ fontWeight: "300" }}>
            Estamos acá para que sepas cómo y dónde invertir tu dinero de la
            manera más segura.
          </Text>
        </div>
        <svg
          className="points"
          width="186"
          height="248"
          viewBox="0 0 186 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-53.7333 16.5333C-49.1678 16.5333 -45.4667 12.8322 -45.4667 8.26667C-45.4667 3.70113 -49.1678 0 -53.7333 0C-58.2989 0 -62 3.70113 -62 8.26667C-62 12.8322 -58.2989 16.5333 -53.7333 16.5333Z"
            fill="#8991A3"
          />
          <path
            d="M-20.6667 16.5333C-16.1011 16.5333 -12.4 12.8322 -12.4 8.26667C-12.4 3.70113 -16.1011 0 -20.6667 0C-25.2322 0 -28.9333 3.70113 -28.9333 8.26667C-28.9333 12.8322 -25.2322 16.5333 -20.6667 16.5333Z"
            fill="#8991A3"
          />
          <path
            d="M20.6667 8.26667C20.6667 12.8322 16.9655 16.5333 12.4 16.5333C7.83447 16.5333 4.13333 12.8322 4.13333 8.26667C4.13333 3.70113 7.83447 0 12.4 0C16.9655 0 20.6667 3.70113 20.6667 8.26667Z"
            fill="#8991A3"
          />
          <path
            d="M45.4667 16.5333C50.0322 16.5333 53.7333 12.8322 53.7333 8.26667C53.7333 3.70113 50.0322 0 45.4667 0C40.9011 0 37.2 3.70113 37.2 8.26667C37.2 12.8322 40.9011 16.5333 45.4667 16.5333Z"
            fill="#8991A3"
          />
          <path
            d="M86.8 8.26667C86.8 12.8322 83.0989 16.5333 78.5333 16.5333C73.9678 16.5333 70.2667 12.8322 70.2667 8.26667C70.2667 3.70113 73.9678 0 78.5333 0C83.0989 0 86.8 3.70113 86.8 8.26667Z"
            fill="#8991A3"
          />
          <path
            d="M111.6 16.5333C116.166 16.5333 119.867 12.8322 119.867 8.26667C119.867 3.70113 116.166 0 111.6 0C107.034 0 103.333 3.70113 103.333 8.26667C103.333 12.8322 107.034 16.5333 111.6 16.5333Z"
            fill="#8991A3"
          />
          <path
            d="M152.933 8.26667C152.933 12.8322 149.232 16.5333 144.667 16.5333C140.101 16.5333 136.4 12.8322 136.4 8.26667C136.4 3.70113 140.101 0 144.667 0C149.232 0 152.933 3.70113 152.933 8.26667Z"
            fill="#8991A3"
          />
          <path
            d="M177.733 16.5333C182.299 16.5333 186 12.8322 186 8.26667C186 3.70113 182.299 0 177.733 0C173.168 0 169.467 3.70113 169.467 8.26667C169.467 12.8322 173.168 16.5333 177.733 16.5333Z"
            fill="#8991A3"
          />
          <path
            d="M-45.4667 41.3333C-45.4667 45.8989 -49.1678 49.6 -53.7333 49.6C-58.2989 49.6 -62 45.8989 -62 41.3333C-62 36.7678 -58.2989 33.0667 -53.7333 33.0667C-49.1678 33.0667 -45.4667 36.7678 -45.4667 41.3333Z"
            fill="#8991A3"
          />
          <path
            d="M-20.6667 49.6C-16.1011 49.6 -12.4 45.8989 -12.4 41.3333C-12.4 36.7678 -16.1011 33.0667 -20.6667 33.0667C-25.2322 33.0667 -28.9333 36.7678 -28.9333 41.3333C-28.9333 45.8989 -25.2322 49.6 -20.6667 49.6Z"
            fill="#8991A3"
          />
          <path
            d="M20.6667 41.3333C20.6667 45.8989 16.9655 49.6 12.4 49.6C7.83447 49.6 4.13333 45.8989 4.13333 41.3333C4.13333 36.7678 7.83447 33.0667 12.4 33.0667C16.9655 33.0667 20.6667 36.7678 20.6667 41.3333Z"
            fill="#8991A3"
          />
          <path
            d="M45.4667 49.6C50.0322 49.6 53.7333 45.8989 53.7333 41.3333C53.7333 36.7678 50.0322 33.0667 45.4667 33.0667C40.9011 33.0667 37.2 36.7678 37.2 41.3333C37.2 45.8989 40.9011 49.6 45.4667 49.6Z"
            fill="#8991A3"
          />
          <path
            d="M86.8 41.3333C86.8 45.8989 83.0989 49.6 78.5333 49.6C73.9678 49.6 70.2667 45.8989 70.2667 41.3333C70.2667 36.7678 73.9678 33.0667 78.5333 33.0667C83.0989 33.0667 86.8 36.7678 86.8 41.3333Z"
            fill="#8991A3"
          />
          <path
            d="M111.6 49.6C116.166 49.6 119.867 45.8989 119.867 41.3333C119.867 36.7678 116.166 33.0667 111.6 33.0667C107.034 33.0667 103.333 36.7678 103.333 41.3333C103.333 45.8989 107.034 49.6 111.6 49.6Z"
            fill="#8991A3"
          />
          <path
            d="M152.933 41.3333C152.933 45.8989 149.232 49.6 144.667 49.6C140.101 49.6 136.4 45.8989 136.4 41.3333C136.4 36.7678 140.101 33.0667 144.667 33.0667C149.232 33.0667 152.933 36.7678 152.933 41.3333Z"
            fill="#8991A3"
          />
          <path
            d="M177.733 49.6C182.299 49.6 186 45.8989 186 41.3333C186 36.7678 182.299 33.0667 177.733 33.0667C173.168 33.0667 169.467 36.7678 169.467 41.3333C169.467 45.8989 173.168 49.6 177.733 49.6Z"
            fill="#8991A3"
          />
          <path
            d="M-53.7333 82.6667C-49.1678 82.6667 -45.4667 78.9655 -45.4667 74.4C-45.4667 69.8345 -49.1678 66.1333 -53.7333 66.1333C-58.2989 66.1333 -62 69.8345 -62 74.4C-62 78.9655 -58.2989 82.6667 -53.7333 82.6667Z"
            fill="#8991A3"
          />
          <path
            d="M-20.6667 82.6667C-16.1011 82.6667 -12.4 78.9655 -12.4 74.4C-12.4 69.8345 -16.1011 66.1333 -20.6667 66.1333C-25.2322 66.1333 -28.9333 69.8345 -28.9333 74.4C-28.9333 78.9655 -25.2322 82.6667 -20.6667 82.6667Z"
            fill="#8991A3"
          />
          <path
            d="M20.6667 74.4C20.6667 78.9655 16.9655 82.6667 12.4 82.6667C7.83447 82.6667 4.13333 78.9655 4.13333 74.4C4.13333 69.8345 7.83447 66.1333 12.4 66.1333C16.9655 66.1333 20.6667 69.8345 20.6667 74.4Z"
            fill="#8991A3"
          />
          <path
            d="M45.4667 82.6667C50.0322 82.6667 53.7333 78.9655 53.7333 74.4C53.7333 69.8345 50.0322 66.1333 45.4667 66.1333C40.9011 66.1333 37.2 69.8345 37.2 74.4C37.2 78.9655 40.9011 82.6667 45.4667 82.6667Z"
            fill="#8991A3"
          />
          <path
            d="M86.8 74.4C86.8 78.9655 83.0989 82.6667 78.5333 82.6667C73.9678 82.6667 70.2667 78.9655 70.2667 74.4C70.2667 69.8345 73.9678 66.1333 78.5333 66.1333C83.0989 66.1333 86.8 69.8345 86.8 74.4Z"
            fill="#8991A3"
          />
          <path
            d="M111.6 82.6667C116.166 82.6667 119.867 78.9655 119.867 74.4C119.867 69.8345 116.166 66.1333 111.6 66.1333C107.034 66.1333 103.333 69.8345 103.333 74.4C103.333 78.9655 107.034 82.6667 111.6 82.6667Z"
            fill="#8991A3"
          />
          <path
            d="M152.933 74.4C152.933 78.9655 149.232 82.6667 144.667 82.6667C140.101 82.6667 136.4 78.9655 136.4 74.4C136.4 69.8345 140.101 66.1333 144.667 66.1333C149.232 66.1333 152.933 69.8345 152.933 74.4Z"
            fill="#8991A3"
          />
          <path
            d="M177.733 82.6667C182.299 82.6667 186 78.9655 186 74.4C186 69.8345 182.299 66.1333 177.733 66.1333C173.168 66.1333 169.467 69.8345 169.467 74.4C169.467 78.9655 173.168 82.6667 177.733 82.6667Z"
            fill="#8991A3"
          />
          <path
            d="M-45.4667 107.467C-45.4667 112.032 -49.1678 115.733 -53.7333 115.733C-58.2989 115.733 -62 112.032 -62 107.467C-62 102.901 -58.2989 99.2 -53.7333 99.2C-49.1678 99.2 -45.4667 102.901 -45.4667 107.467Z"
            fill="#8991A3"
          />
          <path
            d="M-20.6667 115.733C-16.1011 115.733 -12.4 112.032 -12.4 107.467C-12.4 102.901 -16.1011 99.2 -20.6667 99.2C-25.2322 99.2 -28.9333 102.901 -28.9333 107.467C-28.9333 112.032 -25.2322 115.733 -20.6667 115.733Z"
            fill="#8991A3"
          />
          <path
            d="M20.6667 107.467C20.6667 112.032 16.9655 115.733 12.4 115.733C7.83447 115.733 4.13333 112.032 4.13333 107.467C4.13333 102.901 7.83447 99.2 12.4 99.2C16.9655 99.2 20.6667 102.901 20.6667 107.467Z"
            fill="#8991A3"
          />
          <path
            d="M45.4667 115.733C50.0322 115.733 53.7333 112.032 53.7333 107.467C53.7333 102.901 50.0322 99.2 45.4667 99.2C40.9011 99.2 37.2 102.901 37.2 107.467C37.2 112.032 40.9011 115.733 45.4667 115.733Z"
            fill="#8991A3"
          />
          <path
            d="M86.8 107.467C86.8 112.032 83.0989 115.733 78.5333 115.733C73.9678 115.733 70.2667 112.032 70.2667 107.467C70.2667 102.901 73.9678 99.2 78.5333 99.2C83.0989 99.2 86.8 102.901 86.8 107.467Z"
            fill="#8991A3"
          />
          <path
            d="M111.6 115.733C116.166 115.733 119.867 112.032 119.867 107.467C119.867 102.901 116.166 99.2 111.6 99.2C107.034 99.2 103.333 102.901 103.333 107.467C103.333 112.032 107.034 115.733 111.6 115.733Z"
            fill="#8991A3"
          />
          <path
            d="M152.933 107.467C152.933 112.032 149.232 115.733 144.667 115.733C140.101 115.733 136.4 112.032 136.4 107.467C136.4 102.901 140.101 99.2 144.667 99.2C149.232 99.2 152.933 102.901 152.933 107.467Z"
            fill="#8991A3"
          />
          <path
            d="M177.733 115.733C182.299 115.733 186 112.032 186 107.467C186 102.901 182.299 99.2 177.733 99.2C173.168 99.2 169.467 102.901 169.467 107.467C169.467 112.032 173.168 115.733 177.733 115.733Z"
            fill="#8991A3"
          />
          <path
            d="M-53.7333 148.8C-49.1678 148.8 -45.4667 145.099 -45.4667 140.533C-45.4667 135.968 -49.1678 132.267 -53.7333 132.267C-58.2989 132.267 -62 135.968 -62 140.533C-62 145.099 -58.2989 148.8 -53.7333 148.8Z"
            fill="#8991A3"
          />
          <path
            d="M-20.6667 148.8C-16.1011 148.8 -12.4 145.099 -12.4 140.533C-12.4 135.968 -16.1011 132.267 -20.6667 132.267C-25.2322 132.267 -28.9333 135.968 -28.9333 140.533C-28.9333 145.099 -25.2322 148.8 -20.6667 148.8Z"
            fill="#8991A3"
          />
          <path
            d="M20.6667 140.533C20.6667 145.099 16.9655 148.8 12.4 148.8C7.83447 148.8 4.13333 145.099 4.13333 140.533C4.13333 135.968 7.83447 132.267 12.4 132.267C16.9655 132.267 20.6667 135.968 20.6667 140.533Z"
            fill="#8991A3"
          />
          <path
            d="M45.4667 148.8C50.0322 148.8 53.7333 145.099 53.7333 140.533C53.7333 135.968 50.0322 132.267 45.4667 132.267C40.9011 132.267 37.2 135.968 37.2 140.533C37.2 145.099 40.9011 148.8 45.4667 148.8Z"
            fill="#8991A3"
          />
          <path
            d="M86.8 140.533C86.8 145.099 83.0989 148.8 78.5333 148.8C73.9678 148.8 70.2667 145.099 70.2667 140.533C70.2667 135.968 73.9678 132.267 78.5333 132.267C83.0989 132.267 86.8 135.968 86.8 140.533Z"
            fill="#8991A3"
          />
          <path
            d="M111.6 148.8C116.166 148.8 119.867 145.099 119.867 140.533C119.867 135.968 116.166 132.267 111.6 132.267C107.034 132.267 103.333 135.968 103.333 140.533C103.333 145.099 107.034 148.8 111.6 148.8Z"
            fill="#8991A3"
          />
          <path
            d="M152.933 140.533C152.933 145.099 149.232 148.8 144.667 148.8C140.101 148.8 136.4 145.099 136.4 140.533C136.4 135.968 140.101 132.267 144.667 132.267C149.232 132.267 152.933 135.968 152.933 140.533Z"
            fill="#8991A3"
          />
          <path
            d="M177.733 148.8C182.299 148.8 186 145.099 186 140.533C186 135.968 182.299 132.267 177.733 132.267C173.168 132.267 169.467 135.968 169.467 140.533C169.467 145.099 173.168 148.8 177.733 148.8Z"
            fill="#8991A3"
          />
          <path
            d="M-45.4667 173.6C-45.4667 178.166 -49.1678 181.867 -53.7333 181.867C-58.2989 181.867 -62 178.166 -62 173.6C-62 169.034 -58.2989 165.333 -53.7333 165.333C-49.1678 165.333 -45.4667 169.034 -45.4667 173.6Z"
            fill="#8991A3"
          />
          <path
            d="M-20.6667 181.867C-16.1011 181.867 -12.4 178.166 -12.4 173.6C-12.4 169.034 -16.1011 165.333 -20.6667 165.333C-25.2322 165.333 -28.9333 169.034 -28.9333 173.6C-28.9333 178.166 -25.2322 181.867 -20.6667 181.867Z"
            fill="#8991A3"
          />
          <path
            d="M20.6667 173.6C20.6667 178.166 16.9655 181.867 12.4 181.867C7.83447 181.867 4.13333 178.166 4.13333 173.6C4.13333 169.034 7.83447 165.333 12.4 165.333C16.9655 165.333 20.6667 169.034 20.6667 173.6Z"
            fill="#8991A3"
          />
          <path
            d="M45.4667 181.867C50.0322 181.867 53.7333 178.166 53.7333 173.6C53.7333 169.034 50.0322 165.333 45.4667 165.333C40.9011 165.333 37.2 169.034 37.2 173.6C37.2 178.166 40.9011 181.867 45.4667 181.867Z"
            fill="#8991A3"
          />
          <path
            d="M86.8 173.6C86.8 178.166 83.0989 181.867 78.5333 181.867C73.9678 181.867 70.2667 178.166 70.2667 173.6C70.2667 169.034 73.9678 165.333 78.5333 165.333C83.0989 165.333 86.8 169.034 86.8 173.6Z"
            fill="#8991A3"
          />
          <path
            d="M111.6 181.867C116.166 181.867 119.867 178.166 119.867 173.6C119.867 169.034 116.166 165.333 111.6 165.333C107.034 165.333 103.333 169.034 103.333 173.6C103.333 178.166 107.034 181.867 111.6 181.867Z"
            fill="#8991A3"
          />
          <path
            d="M152.933 173.6C152.933 178.166 149.232 181.867 144.667 181.867C140.101 181.867 136.4 178.166 136.4 173.6C136.4 169.034 140.101 165.333 144.667 165.333C149.232 165.333 152.933 169.034 152.933 173.6Z"
            fill="#8991A3"
          />
          <path
            d="M177.733 181.867C182.299 181.867 186 178.166 186 173.6C186 169.034 182.299 165.333 177.733 165.333C173.168 165.333 169.467 169.034 169.467 173.6C169.467 178.166 173.168 181.867 177.733 181.867Z"
            fill="#8991A3"
          />
          <path
            d="M-53.7333 214.933C-49.1678 214.933 -45.4667 211.232 -45.4667 206.667C-45.4667 202.101 -49.1678 198.4 -53.7333 198.4C-58.2989 198.4 -62 202.101 -62 206.667C-62 211.232 -58.2989 214.933 -53.7333 214.933Z"
            fill="#8991A3"
          />
          <path
            d="M-20.6667 214.933C-16.1011 214.933 -12.4 211.232 -12.4 206.667C-12.4 202.101 -16.1011 198.4 -20.6667 198.4C-25.2322 198.4 -28.9333 202.101 -28.9333 206.667C-28.9333 211.232 -25.2322 214.933 -20.6667 214.933Z"
            fill="#8991A3"
          />
          <path
            d="M20.6667 206.667C20.6667 211.232 16.9655 214.933 12.4 214.933C7.83447 214.933 4.13333 211.232 4.13333 206.667C4.13333 202.101 7.83447 198.4 12.4 198.4C16.9655 198.4 20.6667 202.101 20.6667 206.667Z"
            fill="#8991A3"
          />
          <path
            d="M45.4667 214.933C50.0322 214.933 53.7333 211.232 53.7333 206.667C53.7333 202.101 50.0322 198.4 45.4667 198.4C40.9011 198.4 37.2 202.101 37.2 206.667C37.2 211.232 40.9011 214.933 45.4667 214.933Z"
            fill="#8991A3"
          />
          <path
            d="M86.8 206.667C86.8 211.232 83.0989 214.933 78.5333 214.933C73.9678 214.933 70.2667 211.232 70.2667 206.667C70.2667 202.101 73.9678 198.4 78.5333 198.4C83.0989 198.4 86.8 202.101 86.8 206.667Z"
            fill="#8991A3"
          />
          <path
            d="M111.6 214.933C116.166 214.933 119.867 211.232 119.867 206.667C119.867 202.101 116.166 198.4 111.6 198.4C107.034 198.4 103.333 202.101 103.333 206.667C103.333 211.232 107.034 214.933 111.6 214.933Z"
            fill="#8991A3"
          />
          <path
            d="M152.933 206.667C152.933 211.232 149.232 214.933 144.667 214.933C140.101 214.933 136.4 211.232 136.4 206.667C136.4 202.101 140.101 198.4 144.667 198.4C149.232 198.4 152.933 202.101 152.933 206.667Z"
            fill="#8991A3"
          />
          <path
            d="M177.733 214.933C182.299 214.933 186 211.232 186 206.667C186 202.101 182.299 198.4 177.733 198.4C173.168 198.4 169.467 202.101 169.467 206.667C169.467 211.232 173.168 214.933 177.733 214.933Z"
            fill="#8991A3"
          />
          <path
            d="M-45.4667 239.733C-45.4667 244.299 -49.1678 248 -53.7333 248C-58.2989 248 -62 244.299 -62 239.733C-62 235.168 -58.2989 231.467 -53.7333 231.467C-49.1678 231.467 -45.4667 235.168 -45.4667 239.733Z"
            fill="#8991A3"
          />
          <path
            d="M-20.6667 248C-16.1011 248 -12.4 244.299 -12.4 239.733C-12.4 235.168 -16.1011 231.467 -20.6667 231.467C-25.2322 231.467 -28.9333 235.168 -28.9333 239.733C-28.9333 244.299 -25.2322 248 -20.6667 248Z"
            fill="#8991A3"
          />
          <path
            d="M20.6667 239.733C20.6667 244.299 16.9655 248 12.4 248C7.83447 248 4.13333 244.299 4.13333 239.733C4.13333 235.168 7.83447 231.467 12.4 231.467C16.9655 231.467 20.6667 235.168 20.6667 239.733Z"
            fill="#8991A3"
          />
          <path
            d="M45.4667 248C50.0322 248 53.7333 244.299 53.7333 239.733C53.7333 235.168 50.0322 231.467 45.4667 231.467C40.9011 231.467 37.2 235.168 37.2 239.733C37.2 244.299 40.9011 248 45.4667 248Z"
            fill="#8991A3"
          />
          <path
            d="M86.8 239.733C86.8 244.299 83.0989 248 78.5333 248C73.9678 248 70.2667 244.299 70.2667 239.733C70.2667 235.168 73.9678 231.467 78.5333 231.467C83.0989 231.467 86.8 235.168 86.8 239.733Z"
            fill="#8991A3"
          />
          <path
            d="M111.6 248C116.166 248 119.867 244.299 119.867 239.733C119.867 235.168 116.166 231.467 111.6 231.467C107.034 231.467 103.333 235.168 103.333 239.733C103.333 244.299 107.034 248 111.6 248Z"
            fill="#8991A3"
          />
          <path
            d="M152.933 239.733C152.933 244.299 149.232 248 144.667 248C140.101 248 136.4 244.299 136.4 239.733C136.4 235.168 140.101 231.467 144.667 231.467C149.232 231.467 152.933 235.168 152.933 239.733Z"
            fill="#8991A3"
          />
          <path
            d="M177.733 248C182.299 248 186 244.299 186 239.733C186 235.168 182.299 231.467 177.733 231.467C173.168 231.467 169.467 235.168 169.467 239.733C169.467 244.299 173.168 248 177.733 248Z"
            fill="#8991A3"
          />
        </svg>
      </aside>
      <aside className="right">
        <svg
          className="decoration-arrows"
          width="116"
          height="141"
          viewBox="0 0 116 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M102.353 62.5526V40.5564"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M98.0884 44.2224L102.353 40.5564L106.618 44.2224"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58 62.5526V40.5564"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.7354 44.2224L58.0001 40.5564L62.2648 44.2224"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58 24.4257V2.4292"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.7354 6.09528L58.0001 2.4292L62.2648 6.09528"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.647 62.5526V40.5564"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.38232 44.2224L13.647 40.5564L17.9117 44.2224"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M102.353 100.68V78.6831"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M98.0884 82.3492L102.353 78.6831L106.618 82.3492"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58 100.68V78.6831"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.7354 82.3492L58.0001 78.6831L62.2648 82.3492"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.647 100.68V78.6831"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.38232 82.3492L13.647 78.6831L17.9117 82.3492"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.647 138.807V116.81"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.38232 120.476L13.647 116.81L17.9117 120.476"
            stroke="#8991A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Text h3>Dejanos tus datos y nos comunicaremos a la brevedad.</Text>
        <Form />
      </aside>
      <style jsx>
        {`
          label {
            font-family: "Gilroy";
            font-size: 14px;
            line-height: 24px;
            outline: none;
            font-weight: 700;
            margin-top: 30px;
          }
          label:focus,
          label:hover {
            color: var(--green);
          }

          .paragraph {
            width: 300px;
          }
          .left {
            position: relative;
            height: 70%;
          }

          .right {
            position: relative;
            margin-top: 0;
          }
          .decoration-arrows {
            position: absolute;
            right: -12%;
            top: -12%;
          }
          .sendButton {
            position: absolute;
            right: 0;
            margin-top: 30px;
          }
          .line {
            position: absolute;
            width: 100px;
            height: 5px;
            left: 0;
            top: 0;
            background: #ffffff;
          }
          .points {
            position: absolute;
            bottom: -37%;
            left: -60%;
          }
        `}
      </style>
    </Section>
  )
}
