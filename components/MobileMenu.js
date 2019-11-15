import { useState } from "react"
import Button from "./Button"

export default function MobileMenu({ scrolled = false }) {
  const [open, toggleOpen] = useState(false)

  return (
    <div
      role="menu"
      tabIndex={0}
      className={open ? "menu open" : "menu"}
      onClick={() => {
        if (!open) {
          toggleOpen(!open)
        }
      }}
      onKeyDown={() => {
        if (!open) {
          toggleOpen(!open)
        }
      }}
    >
      {!open ? (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.9167 18.7531H7.29167"
            stroke="#EEEFF2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.9167 12.5031H12.5"
            stroke="#EEEFF2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.9167 6.25311H2.08333"
            stroke="#EEEFF2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <div
          role="menu"
          tabIndex={0}
          onKeyDown={() => {
            toggleOpen(false)
          }}
          onClick={() => {
            toggleOpen(false)
          }}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.6875 20.3125L20.3125 4.6875"
              stroke="#EEEFF2"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.6875 4.6875L20.3125 20.3125"
              stroke="#EEEFF2"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      <div className="overlay">
        <h5>MENU</h5>
        <nav>
          <ul>
            <li
              role="menuitem"
              tabIndex={0}
              onKeyDown={() => {
                toggleOpen(!open)
              }}
              onClick={() => {
                toggleOpen(!open)
              }}
            >
              <a href="#home">Inicio</a>
            </li>
            <li
              role="menuitem"
              tabIndex={0}
              onKeyDown={() => {
                toggleOpen(!open)
              }}
              onClick={() => {
                toggleOpen(!open)
              }}
            >
              <a href="#como-funciona">Cómo Funciona</a>
            </li>
            <li
              role="menuitem"
              tabIndex={0}
              onKeyDown={() => {
                toggleOpen(!open)
              }}
              onClick={() => {
                toggleOpen(!open)
              }}
            >
              <a href="#estrategias-de-inversion">Estrategias de Inversión</a>
            </li>
            <li
              role="menuitem"
              tabIndex={0}
              onKeyDown={() => {
                toggleOpen(!open)
              }}
              onClick={() => {
                toggleOpen(!open)
              }}
            >
              <a href="#quienes-somos">Quiénes Somos</a>
            </li>
            <li>
              <Button secondary contacto>
                Contactanos
              </Button>
            </li>
            {/* <li>
              <Link href="https://twitter.com/moveoai">
                <a>
                  <span>
                    <svg
                      width="19"
                      height="16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 1.894c-.7.32-1.45.539-2.238.636A4.035 4.035 0 0018.475.296a7.691 7.691 0 01-2.477.98A3.824 3.824 0 0013.155 0C11 0 9.256 1.81 9.256 4.04c0 .316.034.625.1.92C6.119 4.793 3.247 3.185 1.325.74a4.123 4.123 0 00-.527 2.03A4.08 4.08 0 002.53 6.134a3.794 3.794 0 01-1.765-.507v.05c0 1.957 1.344 3.59 3.126 3.962-.327.091-.671.142-1.027.142-.252 0-.495-.026-.734-.075.496 1.606 1.935 2.774 3.64 2.806A7.646 7.646 0 010 14.182 10.737 10.737 0 005.974 16c7.17 0 11.09-6.156 11.09-11.496l-.014-.523A7.945 7.945 0 0019 1.894z"
                        fill="var(--background)"
                        fillOpacity=".7"
                      />
                    </svg>
                  </span>{" "}
                  {t("twitter")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/moveo-ai">
                <a>
                  <span>
                    <svg
                      width="19"
                      height="19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.5.238C4.275.238 0 4.513 0 9.738a9.512 9.512 0 006.472 9.025c.475.06.653-.178.653-.475v-1.603c-2.672.593-3.206-1.247-3.206-1.247-.416-1.069-1.069-1.366-1.069-1.366-.89-.594.06-.594.06-.594.95.06 1.484.95 1.484.95.831 1.425 2.197 1.01 2.79.772a2.05 2.05 0 01.594-1.247c-2.137-.237-4.334-1.068-4.334-4.69 0-1.01.356-1.9.95-2.553-.119-.238-.416-1.188.119-2.494 0 0 .771-.238 2.612.95.772-.238 1.544-.297 2.375-.297s1.603.119 2.375.297c1.84-1.247 2.613-1.01 2.613-1.01.534 1.307.178 2.257.118 2.494.594.653.95 1.485.95 2.553 0 3.622-2.197 4.454-4.334 4.691.356.297.653.89.653 1.781v2.613c0 .237.178.534.653.475A9.512 9.512 0 0019 9.738c0-5.225-4.275-9.5-9.5-9.5z"
                        fill="var(--background)"
                        fillOpacity=".7"
                      />
                    </svg>
                  </span>{" "}
                  {t("github")}
                </a>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .menu .overlay {
          background-color: var(--gray-3);
        }
        .menu.open .overlay {
          transform: translateX(-100%);
        }

        nav {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }

        h5 {
          position: absolute;
          left: 25px;
          text-transform: uppercase;
          font-size: 20px;
          margin: 0;
          transition: all 200ms ease;
          ${scrolled ? "top: 27px;" : "top: 47px;"};
        }

        a {
          font-size: 20px;
          text-decoration: none;
        }

        ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 400px;
        }

        li {
          display: block;
          text-align: center;
        }

        .overlay {
          position: fixed;
          height: 100vh;
          width: 100vw;
          top: 0;
          display: flex;
          background: var(--color-primary);
          transform: translateX(100%);
          transition: transform 800ms ease-in-out;
          z-index: 1000;
        }

        a,
        span,
        svg {
          vertical-align: text-bottom;
        }

        svg {
          position: absolute;
          right: 20px;
          z-index: 2000;
          transition: all 200ms ease;
          ${scrolled ? "top: 27px;" : "top: 47px;"};
        }

        @media (min-width: 850px) {
          .menu {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
