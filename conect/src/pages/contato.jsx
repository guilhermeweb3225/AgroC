import "./contato.css";
import BgContatos from "../images/senar.png"; // imagem de fundo

function Contatos() {
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
            <p><a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer">+55 11 99999-9999</a></p>
          </div>
          <div className="info-card">
            <h3>E-mail</h3>
            <p><a href="mailto:contato@agroconnect.com.br">contato@agroconnect.com.br</a></p>
          </div>
          <div className="info-card">
            <h3>Telefone</h3>
            <p><a href="tel:+551199999999">+55 11 99999-9999</a></p>
          </div>
          <div className="info-card">
            <h3>Endereço</h3>
            <p>Rua Exemplo, 123 - São Paulo, SP - Brasil</p>
          </div>
        </div>

        <div className="contatos-form">
          <h3>Envie sua mensagem</h3>
          <form action="#" method="POST">
            <input type="text" name="nome" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
            <textarea name="mensagem" rows="5" placeholder="Sua mensagem" required></textarea>
            <button type="submit" className="btn-contatos">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contatos;
