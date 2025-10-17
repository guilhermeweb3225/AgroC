import "./sobre.css";
import SenarLogo from "../images/senar.png";
import SlcLogo from "../images/slc.png";
import Parceria1 from "../images/senar.png"; // Exemplo de outro apoiador
import Parceria2 from "../images/slc.png";
import BgSobre from "../images/senar.png";

function Sobre() {
  return (
    <section className="sobre">
      {/* Background e overlay */}
      <div className="sobre-bg">
        <img src={BgSobre} alt="Campo e tecnologia" />
        <div className="sobre-overlay"></div>
      </div>

      <div className="sobre-content">
        <div className="sobre-intro">
          <h2>Sobre a AgroConnect</h2>
          <p>
            A AgroConnect nasceu com o propósito de <strong>transformar o agronegócio</strong> através da tecnologia e inovação. 
            Nossa plataforma conecta produtores rurais, compradores e parceiros estratégicos, proporcionando <strong>negociações transparentes, seguras e ágeis</strong>.
          </p>
          <p>
            Contamos com <strong>parcerias sólidas</strong>, como o <strong>SENAR</strong> — garantindo capacitação e suporte técnico — e a <strong>SLC Agrícola</strong> — garantindo credibilidade e oportunidades exclusivas.
          </p>
        </div>

        <div className="sobre-detalhes">
          <div className="sobre-card">
            <h3>Missão</h3>
            <p>
              Facilitar o acesso ao mercado, conectando produtores, compradores e parceiros, tornando o agronegócio mais eficiente, digital e sustentável.
            </p>
          </div>
          <div className="sobre-card">
            <h3>Visão</h3>
            <p>
              Ser a plataforma referência no agronegócio digital, reconhecida pela inovação, confiabilidade e impacto positivo em toda a cadeia produtiva.
            </p>
          </div>
          <div className="sobre-card">
            <h3>Valores</h3>
            <p>
              Transparência, agilidade, inovação, proximidade com os usuários e compromisso com o crescimento sustentável do setor.
            </p>
          </div>
        </div>

        <div className="sobre-parcerias">
          <h3>Nossos Parceiros e Apoiadores</h3>
          <p>
            Trabalhamos com instituições e empresas de confiança que fortalecem nossa missão e garantem resultados de qualidade para nossos usuários.
          </p>
          <div className="logos-parcerias">
            <img src={SenarLogo} alt="SENAR" />
            <img src={SlcLogo} alt="SLC Agrícola" />
            <img src={Parceria1} alt="Parceiro 1" />
            <img src={Parceria2} alt="Parceiro 2" />
          </div>
        </div>

        <div className="sobre-cta">
          <h3>Junte-se à AgroConnect</h3>
          <p>
            Faça parte da revolução digital no agronegócio. Com a AgroConnect você tem tecnologia, suporte e parceiros confiáveis ao seu lado.
          </p>
          <a
            href="https://chat.whatsapp.com/SEU_LINK_AQUI"
            className="btn-sobre"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conectar Agora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
