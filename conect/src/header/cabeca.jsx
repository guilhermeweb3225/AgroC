import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo1.png";
import "./cabeca.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <img src={Logo} alt="Logo AgroConnect" />
          </div>

          {/* Hamburger menu */}
          <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navegação desktop */}
          <nav className="nav">
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/como-funciona">Como Funciona</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </nav>

          {/* Botão WhatsApp desktop */}
          <a
            href="https://chat.whatsapp.com/SEU_LINK_REAL"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Entrar no Grupo
          </a>
        </div>
      </header>

      {/* Sidebar mobile */}
      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        {/* Botão X para fechar */}
        <div className="close-btn" onClick={closeMenu}>×</div>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Início</Link></li>
          <li><Link to="/sobre" onClick={closeMenu}>Sobre</Link></li>
          <li><Link to="/como-funciona" onClick={closeMenu}>Como Funciona</Link></li>
          <li><Link to="/contato" onClick={closeMenu}>Contato</Link></li>
          <li>
            <a
              href="https://chat.whatsapp.com/SEU_LINK_REAL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={closeMenu}
            >
              Entrar no Grupo
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Header;
