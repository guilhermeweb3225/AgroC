import "./cabeca.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo1.png";

function Header() {
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo AgroConnect" />
        </div>

        <nav className="nav">
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/como-funciona">Como Funciona</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>

        <a
          href="https://chat.whatsapp.com/SEU_LINK_AQUI"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Entrar no Grupo
        </a>
      </div>
    </header>
    </>
  );
}

export default Header;
