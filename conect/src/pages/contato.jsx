import React, { useState } from "react";
import "./contato.css";
import BgContatos from "../images/apertofundo.png"; // imagem de fundo

function Contatos() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // impede o reload da página

    const telefone = "5565992807604"; // seu número completo com DDI + DDD
    const texto = `Olá! 👋\nMeu nome é ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank"); // abre o WhatsApp
  };

  return (
    <section className="contatos">
      {/* Background e overlay */}
      <div className="contatos-bg">
        <img src={BgContatos} alt="Contato AgroConnect" />
        <div className="contatos-overlay"></div>
      </div>

      <div className="contatos-content">
        <div className="contatos-intro">
          <h2>Entre em Contato</h2>
          <p>
            Estamos prontos para ajudá-lo! Entre em contato com a AgroConnect pelos canais abaixo ou envie sua mensagem através do formulário.
          </p>
        </div>

        <div className="contatos-info">
          <div className="info-card">
            <h3>WhatsApp</h3>
            <p>
              <a
                href="https://wa.me/5565992807604"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 65 99280-7604
              </a>
            </p>
          </div>
          <div className="info-card">
            <h3>E-mail</h3>
            <p>
              <a href="mailto:agroconect190@gmail.com">
                agroconect190@gmail.com
              </a>
            </p>
          </div>
          <div className="info-card">
            <h3>Telefone</h3>
            <p>
              <a href="tel:+5565992807604">+55 65 99280-7604</a>
            </p>
          </div>
          <div className="info-card">
            <h3>Endereço</h3>
            <p>Na palma da sua Mão</p>
          </div>
        </div>

        <div className="contatos-form">
          <h3>Envie sua mensagem</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              required
            />
            <textarea
              rows="5"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Sua mensagem"
              required
            ></textarea>
            <button type="submit" className="btn-contatos">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contatos;
