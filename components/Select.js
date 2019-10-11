import Select from "react-select"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
]

export default function Select({ children }) {
  return (
    <div className="wrapper">
      <Select classNamePrefix="select" options={options} />

      <style jsx global>{`
        .select__label {
          pointer-events: none;
          font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #2479ff;
          letter-spacing: 0.7px;
          left: 1.5em;
          text-transform: capitalize;
          z-index: 11;
        }

        .select__wrapper {
          position: relative;
          height: 3.75rem;
          width: 100%;
          max-width: 350px;
          margin: 0.5rem auto;
        }

        .select__control {
          height: 100%;
          border: none;
          border-radius: 3px;
        }

        .select__placeholder {
          color: #000;
          font-weight: 700;
        }

        .select__value-container {
          padding: 0 1em;
          position: relative;
        }

        .select__indicator-separator {
          display: none;
        }

        .select__dropdown-indicator {
          color: #2479ff;
        }

        .select__value-container .select__option {
          position: absolute;
        }

        .select__menu {
          z-index: 1000 !important;
        }

        .select__option {
          display: flex !important;
          align-items: center;
          font-weight: 700;
        }

        .select__option-icon {
          display: inline-block;
          width: 30px;
          margin-right: 1em;
          background-color: #fff;
        }

        .select__placeholder {
          color: hsl(0, 0%, 20%);
          margin-left: 2px;
          margin-right: 2px;
          max-width: calc(100% - 8px);
          overflow: hidden;
          position: absolute;
          text-overflow: ellipsis;
          white-space: nowrap;
          top: 50%;
          transform: translateY(-50%);
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
