import "../styles/Showcase.css";
import img1 from "../assets/img/image-1.webp";

export default function Showcase() {
  return (
    <section className="showcase">
      {/* TOP (cards grandes) */}
      <div className="showcase-top">
        <div className="big-card left">
          <img className="img-back" src={img1} alt="SNACK Logo" />
          <div className="overlay" />
          <div className="content">
            <span>ARTESANAL</span>
            <h2>Origem Selecionada</h2>
            <p>
              Fazemos parcerias com produtores locais para trazer carne de pasto
              e vegetais orgânicos da estação.
            </p>
          </div>
        </div>

        <div className="big-card right">
          <div className="overlay" />
          <div className="content">
            <span>ACOMPANHAMENTOS</span>
            <h2>Desejo Trufado</h2>
            <p>
              Nossas famosas batatas cortadas à mão, finalizadas com óleo de trufa branca
              e parmesão envelhecido 24 meses.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM (cards pequenos) */}
      <div className="showcase-bottom">
        <div className="small-card">
          <div className="icon">🍴</div>
          <h3>Especiais do Dia</h3>
          <p>
            Lançamentos limitados curados pelo Chef que desafiam os limites da
            arquitetura do hambúrguer.
          </p>
        </div>

        <div className="small-card">
          <div className="icon">🚚</div>
          <h3>Entrega Expressa</h3>
          <p>
            Da nossa grelha para sua porta em menos de 30 minutos. Fresco, quente e
            perfeitamente intacto.
          </p>
        </div>

        <div className="small-card">
          <div className="icon">🍺</div>
          <h3>Harmonização</h3>
          <p>
            Seleção curada de cervejas artesanais locais e refrigerantes retrô para
            complementar sua refeição.
          </p>
        </div>
      </div>
    </section>
  );
}