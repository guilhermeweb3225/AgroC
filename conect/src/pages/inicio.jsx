
import "./inicio.css";
import Vd from "../images/vd3.mp4";
import Agilidade from "../images/imgagilidade.png";
import Tecnologia from "../images/imgtecnologia.png";
import Conexao from "../images/imgconexao.png";
function Inicio() {
  return (
    <section className="inicio">
      {/* HERO */}
      <div className="hero">
        <div className="overlay"></div>
        <video autoPlay muted loop playsInline className="background-video">
          <source src={Vd}type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1>Conectando o campo ao futuro 🌾</h1>
          <p>
            A AgroConnect é a ponte entre produtores e compradores.  
            Tecnologia, agilidade e confiança no agronegócio digital.
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

      {/* BENEFÍCIOS */}
      <div className="beneficios">
        <h2>Por que escolher a AgroConnect?</h2>
        <div className="cards">
          <div className="card">
            <img src={Conexao}alt="Conexão direta" />
            <h3>Conexão direta</h3>
            <p>Produtores e compradores se comunicam sem intermediários, com mais transparência.</p>
          </div>
          <div className="card">
            <img src={Agilidade} alt="Agilidade" />
            <h3>Agilidade</h3>
            <p>Negociações rápidas e entregas otimizadas através de nossa rede integrada.</p>
          </div>
          <div className="card">
            <img src={Tecnologia} alt="Tecnologia" />
            <h3>Tecnologia</h3>
            <p>Gestão inteligente e integração digital para simplificar o agronegócio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
