import cn from "classnames"

const goToSection = () => {
  document.querySelector("#contacto").scrollIntoView({
    behavior: "smooth"
  })
}

export default function Button ({
  isInverted,
  secondary,
  children,
  small,
  hidden = false,
  type = "",
  action = false,
  contacto = false
}) {
  return contacto ? (
    <button
      type={type}
      className={cn({ inverted: isInverted, hidden: hidden })}
      onClick={goToSection}
    >
      {children}
      <style jsx>{`
        button {
          font-weight: 700;
          appearance: none;
          cursor: pointer;
          border: none;
          outline: none;
          padding: ${small ? "15px 20px;" : "15px 50px;"};
          font-family: "Gilroy";
          font-size: 20px;
          color: var(--gray-4);
          background: var(--green);
          border-radius: 5px;
          transition: box-shadow 300ms ease;
          ${secondary ? "background: var(--yellow);" : ""}
        }

        button:hover {
          box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.20);
        }

        button.inverted {
          color: var(--green);
          background: var(--gray-3);
        }

        button.hidden {
          display: none;
        }
      `}</style>
    </button>
  ) : (
      <button
        type={type}
        onClick={action ? action : () => { }}
        className={cn({ inverted: isInverted })}
      >
        {children}
        <style jsx>{`
        button {
          font-weight: 700;
          appearance: none;
          cursor: pointer;
          border: none;
          outline: none;
          padding: ${small ? "15px 20px;" : "15px 50px;"};
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
