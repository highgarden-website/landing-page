import { useState, useEffect } from "react"
import Logo from "./Logo"
import Button from "./Button"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0)
    })
  }, [])

  return (
    <div className="wrapper">
      <header>
        <Logo scrolled={scrolled}></Logo>
        <nav>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#ComoFunciona">Cómo Funciona</a>
            </li>
            <li>
              <a href="#EstrategiasDeInversion">Estrategias de Inversión</a>
            </li>
            <li>
              <a href="#quieneSomos">Quiénes Somos</a>
            </li>
            <li>
              <a href="#contactanos">
                <Button secondary>Contactános</Button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>{`
        .wrapper {
          position: fixed;
          width: 100vw;
          max-width: 100%;
          z-index: 1000;
          transition: background 300ms ease;
          ${scrolled
            ? "background: var(--gray-4);"
            : "background: transparent;"};
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        nav ul {
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
        }

        li {
          margin: 0 1rem;
        }

        li:last-child {
          margin-right: 0;
        }

        a {
          font-size: calc(18px + (20 - 18) * (100vw - 1024px) / (1920 - 1024));
        }

        @media (max-width: 1050px) {
          .header {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
