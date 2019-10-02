import cn from "classnames"

export default function Button({ isInverted, secondary, children }) {
  return (
    <button className={cn({ inverted: isInverted })}>
      {children}
      <style jsx>{`
        button {
          font-weight: 700;
          appearance: none;
          cursor: pointer;
          border: none;
          outline: none;
          padding: 15px 50px;
          font-family: "Gilroy";
          font-size: 20px;
          color: var(--gray-4);
          background: var(--green);
          border-radius: 5px;
          transition: box-shadow 300ms ease;
          ${secondary && "background: var(--yellow);"}
        }

        button:hover {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }

        button.inverted {
          color: var(--green);
          background: var(--gray-3);
        }
      `}</style>
    </button>
  )
}
