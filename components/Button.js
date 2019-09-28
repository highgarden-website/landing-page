import cn from "classnames"

export default function Button({ isInverted, secondary, children }) {
  return (
    <button className={cn({ inverted: isInverted })}>
      {children}
      <style jsx>{`
        button {
          appearance: none;
          border: none;
          padding: 15px 50px;
          font-family: "Gilroy";
          font-size: 20px;
          color: var(--gray-3);
          background: var(--green);
          border-radius: 5px;
          ${secondary && "background: var(--yellow);"}
        }
        button.inverted {
          color: var(--green);
          background: var(--gray-3);
        }

        button.inverted :hover {
          outline: none;
          box-shadow: inset 0 0 0 2px var(--green);
        }
      `}</style>
    </button>
  )
}
