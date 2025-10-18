import "./comofuncionamds.css";
import Passo1 from "../images/senar.png";
import Passo2 from "../images/senar.png";
import Passo3 from "../images/senar.png";
import BgFuncionamento from "../images/senar.png"; // imagem de fundo

function ComoFunciona() {
  return (
    <section className="comofunciona">
      {/* Background e overlay */}
      <div className="funciona-bg">
        <img src={BgFuncionamento} alt="Campo e tecnologia" />
        <div className="funciona-overlay"></div>
      </div>

      <div className="funciona-content">
        <div className="funciona-intro">
          <h2>Como Funciona a AgroConnect</h2>
          <p>
            A AgroConnect simplifica o agronegócio digital conectando produtores, compradores e parceiros. 
            Com nossa plataforma, você consegue negociar de forma **rápida, segura e transparente**, sem complicações.
          </p>
          <p>
            Veja abaixo como é fácil se beneficiar de todas as funcionalidades da AgroConnect:
          </p>
        </div>

        <div className="funciona-cards">
          <div className="funciona-card">
            <img src={Passo1} alt="Cadastro" />
            <h3>1. Cadastro Rápido</h3>
            <p>
              Crie sua conta em poucos minutos. Produtores e compradores têm acesso a um perfil completo com histórico e credibilidade.
            </p>
          </div>

          <div className="funciona-card">
            <img src={Passo2} alt="Conexão" />
            <h3>2. Conexão Direta</h3>
            <p>
              Conecte-se diretamente com compradores ou fornecedores. Negocie com segurança e elimine intermediários.
            </p>
          </div>

          <div className="funciona-card">
            <img src={Passo3} alt="Negociação" />
            <h3>3. Negociação e Entrega</h3>
            <p>
              Finalize a negociação de forma ágil, acompanhe entregas e tenha controle total do processo através da nossa plataforma.
            </p>
          </div>
        </div>

        <div className="funciona-cta">
          <h3>Pronto para começar?</h3>
          <p>
            Junte-se à comunidade AgroConnect e revolucione a forma de negociar no agronegócio digital.
          </p>
          <a
            href="https://chat.whatsapp.com/SEU_LINK_AQUI"
            className="btn-funciona"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comece Agora
          </a>
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;
