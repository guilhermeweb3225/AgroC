
import "./sobre.css";

function Sobre() {
  return (
    <section className="sobre">
      <div className="sobre-container">
        <div className="sobre-texto">
          <h1>
            Sobre a <span>AgroConnect</span>
          </h1>
          <p>
            A <strong>AgroConnect</strong> nasceu com o propósito de unir o campo à tecnologia,
            oferecendo soluções digitais simples, inteligentes e acessíveis para o agronegócio.
            Nosso objetivo é facilitar a gestão e a comunicação entre produtores, empresas e clientes.
          </p>

          <p>
            Com uma plataforma intuitiva e moderna, conectamos os desafios do campo às inovações
            tecnológicas, promovendo eficiência, sustentabilidade e resultados reais.
          </p>
        </div>

        <div className="sobre-imagem">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80"
            alt="Tecnologia no campo"
          />
        </div>
      </div>

      <div className="missao-visao-valores">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1591448770228-30b41b6c4e26?auto=format&fit=crop&w=1000&q=80"
            alt="Conexão no campo"
          />
          <h2>Missão</h2>
          <p>
            Levar tecnologia e praticidade ao campo, simplificando processos e conectando
            produtores com o mundo digital.
          </p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
            alt="Equipe AgroConnect"
          />
          <h2>Visão</h2>
          <p>
            Ser referência em inovação e gestão tecnológica no agronegócio,
            promovendo uma agricultura mais inteligente e conectada.
          </p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1590487988254-3a9d0b98f6d9?auto=format&fit=crop&w=1000&q=80"
            alt="Valores AgroConnect"
          />
          <h2>Valores</h2>
          <p>
            Sustentabilidade, inovação, ética e compromisso com o produtor rural.
            Acreditamos que o futuro do agro é digital — e humano.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
