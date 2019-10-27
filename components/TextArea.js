export default function TextArea({ label, type, name }) {
  return (
    <div className="wrapper">
      <textarea name={`${label}-field`} type="text" name={name} />
      <label htmlFor={`${label}-field`}>{label}</label>

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column-reverse;
        }
        textarea {
          height: 7em;
          resize: none;
          background: var(--gray-5);
          box-sizing: border-box;
          border-radius: 5px;
          border: none;
          font-family: "Gilroy";
          color: #ffffff;
          font-size: 18px;
          margin-bottom: 35px;
          transition: box-shadow 200ms ease;
        }
        label {
          font-family: "Gilroy";
          font-size: 14px;
          line-height: 24px;
          outline: none;
          font-weight: 700;
          margin-top: 20px;
          margin-bottom: 15px;
        }
        textarea:focus + label,
        textarea:hover + label {
          color: var(--green);
        }
        textarea:focus,
        textarea:hover {
          outline: none;
          box-shadow: inset 0 0 0 2px var(--green);
        }
      `}</style>
    </div>
  )
}
