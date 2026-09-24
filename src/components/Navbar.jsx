import { Link } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        🌵 Jardim Secreto
      </div>

      <nav>
        <ul className="menu">

          <li>
            <Link to="/home">Início</Link>
          </li>

          <li>
            <Link to="/pesquisa">Cactos</Link>
          </li>

          <li>
            <Link to="/pesquisa">Suculentas</Link>
          </li>

          <li>
            <Link to="/pesquisa">Pesquisa</Link>
          </li>

          <li>
            <a href="#contato">Contato</a>
          </li>

        </ul>
      </nav>

      <div className="icons">
        <button>🛒</button>

        <Link to="/login">
          <button>👤</button>
        </Link>
      </div>

    </header>
  );
}

export default Navbar;