import { useState, useEffect } from "react"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import Button from "./Button"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0)
    })

    return () => {
      document.removeEventListener("scroll", () => {})
    }
  }, [])

  return (
    <div className="wrapper">
      <header>
        <Logo scrolled={scrolled} />
        <nav className="desktop-menu">
          <ul>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#como-funciona">Cómo Funciona</a>
            </li>
            <li>
              <a href="#estrategias-de-inversion">Estrategias de Inversión</a>
            </li>
            <li>
              <a href="#quienes-somos">Quiénes Somos</a>
            </li>
            <li>
              <Button secondary contacto>
                Contactanos
              </Button>
            </li>
          </ul>
        </nav>
        <MobileMenu scrolled={scrolled} />
      </header>
      <style jsx>{`
        .wrapper {
          position: fixed;
          width: 100vw;
          top: 0;
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
          max-width: var(--inner-width);
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

        @media (max-width: 850px) {
          .wrapper {
            max-width: 100%;
            width: 100%;
          }
          header {
            max-width: 100%;
          }
          .desktop-menu {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
