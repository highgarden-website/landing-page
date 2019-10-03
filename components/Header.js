import Logo from "./Logo"
import Button from "./Button"

export default function Header() {
  return (
    <header>
      <Logo></Logo>
      <nav>
        <ul>
          <li>
            <a href="">Cómo Funciona</a>
          </li>
          <li>
            <a href="#section3">Estrategias de Inversión</a>
          </li>
          <li>
            <a href="">Quiénes Somos</a>
          </li>
          <li>
            <Button secondary>Contactános</Button>
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
      `}</style>
    </header>
  )
}
