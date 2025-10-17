import "./inicio.css";
import Vdo from "../images/Vd3.mp4";
import Agilidade from "../images/imgagilidade.png";
import Tecnologia from "../images/imgtecnologia.png";
import Conexao from "../images/imgconexao.png";
import SenarLogo from "../images/senar.png";
import SlcLogo from "../images/slc.png";

function Inicio() {
  return (
    <section className="inicio">
      {/* HERO */}
      <div className="hero">
        <div className="overlay"></div>
        <video autoPlay muted loop playsInline className="background-video">
          <source src={Vdo} type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1>Conectando o campo ao futuro 🌾</h1>
          <p>
            A AgroConnect é a ponte entre produtores e compradores. 
            Combinamos tecnologia de ponta, agilidade e confiança para transformar o agronegócio digital. 
            Nossa plataforma garante negociações seguras, gestão eficiente e conectividade direta em toda a cadeia produtiva.
          </p>
          <a
            href="https://chat.whatsapp.com/SEU_LINK_AQUI"
            className="btn-hero"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar no Grupo
          </a>
        </div>
      </div>

      {/* MISSÃO, VISÃO E VALORES */}
      <div className="missao-visao-valores">
        <h2>Nosso Compromisso</h2>
        <div className="mvv-cards">
          <div className="mvv-card">
            <h3>Missão</h3>
            <p>
              Facilitar o acesso ao mercado para produtores rurais e compradores, tornando o agronegócio mais eficiente, transparente e conectado.
            </p>
          </div>
          <div className="mvv-card">
            <h3>Visão</h3>
            <p>
              Ser a plataforma líder em soluções digitais para o agronegócio, reconhecida pela inovação, confiabilidade e impacto positivo no setor.
            </p>
          </div>
          <div className="mvv-card">
            <h3>Valores</h3>
            <p>
              Transparência, inovação, agilidade, sustentabilidade e proximidade com nossos usuários.
            </p>
          </div>
        </div>
      </div>

      {/* BENEFÍCIOS */}
      <div className="beneficios">
        <h2>Por que escolher a AgroConnect?</h2>
        <div className="cards">
          <div className="card">
            <img src={Conexao} alt="Conexão direta" />
            <h3>Conexão direta</h3>
            <p>
              Produtores e compradores se comunicam sem intermediários, garantindo negociações claras e seguras.
            </p>
          </div>
          <div className="card">
            <img src={Agilidade} alt="Agilidade" />
            <h3>Agilidade</h3>
            <p>
              Negociações rápidas, entregas otimizadas e processos simplificados com nossa rede digital integrada.
            </p>
          </div>
          <div className="card">
            <img src={Tecnologia} alt="Tecnologia" />
            <h3>Tecnologia</h3>
            <p>
              Gestão inteligente, automação e ferramentas digitais que facilitam a tomada de decisão e o crescimento sustentável.
            </p>
          </div>
        </div>
      </div>

      {/* APOIADORES */}
      <div className="apoiadores">
        <h2>Nossos Apoiadores</h2>
        <p>
          Contamos com o apoio de instituições e empresas que acreditam na transformação digital do agronegócio.
        </p>
        <div className="logos-apoiadores">
          <img src={SenarLogo} alt="SENAR" />
          <img src={SlcLogo} alt="SLC Agrícola" />
          {/* Você pode adicionar mais logos aqui */}
        </div>
      </div>

      {/* CHAMADA EXTRA */}
      <div className="chamada-extra">
        <h2>Junte-se à revolução do agronegócio digital</h2>
        <p>
          A AgroConnect não é apenas uma plataforma, é uma comunidade de pessoas que acreditam no futuro do campo. 
          Venha crescer conosco e aproveite todos os benefícios de estar conectado de forma prática e inovadora.
        </p>
        <a
          href="https://chat.whatsapp.com/SEU_LINK_AQUI"
          className="btn-hero"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comece agora
        </a>
      </div>
    </section>
  );
}

export default Inicio;
