import Select from "react-select"
import Text from "./Text"
import Section from "./Section"

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

export default function SelectCustom({
  label,
  type,
  changeEvent,
  blurEvent,
  value
}) {
  return (
    <div className="wrapper">
      <Select
        placeholder={
          <div style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Elegi entre los 3 tipos de inversion
          </div>
        }
        onChange={changeEvent}
        onBlur={blurEvent}
        classNamePrefix="select"
        options={options}
        styles={styleSelect}
      />
      {console.log(options)}
      {label && <label htmlFor={`${label}-tag`}>{label}</label>}
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column-reverse;
          width: 100%;
        }

        label {
          font-family: "Gilroy";
          font-size: 14px;
          line-height: 24px;
          outline: none;
          font-weight: 700;
          margin-top: 20px;
          margin-bottom: 10px;
          transition: color 200ms ease;
        }

        .wrapper :global(> div:hover + label) {
          color: var(--green);
        }
      `}</style>
    </div>
  )
}
