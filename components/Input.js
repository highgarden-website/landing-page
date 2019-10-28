export default function Input({
  label,
  type,
  name = "",
  onChange,
  onBlur,
  value
}) {
  return (
    <div className="wrapper">
      <input
        name={name}
        type={`${type}`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {label && <label htmlFor={name}>{label}</label>}

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column-reverse;
          width: 100%;
        }
        input {
          background: var(--gray-5);
          box-sizing: border-box;
          border-radius: 5px;
          border: none;
          font-family: "Gilroy";
          color: #ffffff;
          font-size: 18px;
          line-height: 48px;
          transition: box-shadow 200ms ease;
          padding: 0 10px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        label {
          font-family: "Gilroy";
          font-size: 14px;
          line-height: 24px;
          outline: none;
          font-weight: 700;
          margin-top: 20px;
        }
        input:focus + label,
        input:hover + label {
          color: var(--green);
        }
        input:focus,
        input:hover {
          outline: none;
          box-shadow: inset 0 0 0 2px var(--green);
        }
      `}</style>
    </div>
  )
}
