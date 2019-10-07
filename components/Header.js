import Logo from "./Logo"
import Button from "./Button"

export default function Header() {
  return (
    <header>
      <Logo></Logo>
      <nav>
        <ul>
          <li>
            <a href="#section2">Cómo Funciona</a>
          </li>
          <li>
            <a href="#section3">Estrategias de Inversión</a>
          </li>
          <li>
            <a href="#section4">Quiénes Somos</a>
          </li>
          <li>
            <a href="#section5">
              <Button secondary>Contactános</Button>
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
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

        a {
          font-size: calc(18px + (20 - 18) * (100vw - 1024px) / (1920 - 1024));
        }

        @media (max-width: 1050px) {
          .header {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </header>
  )
}
