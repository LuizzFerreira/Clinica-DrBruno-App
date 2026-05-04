import { useState, useEffect, useCallback } from "react";
import "../styles/Depoimentos.css";
import Img4 from "../assets/img/seta.webp";

const depoimentos = [
  {
    nome: "Rafael Risso",
    cargo: "Paciente",
    texto: "Estou extremamente satisfeito com o atendimento do Dr. Bruno Alex. Ele é um profissional altamente qualificado, atencioso e sempre se preocupa com o bem-estar dos pacientes. Durante minhas consultas, ele foi muito claro em explicar os procedimentos e teve um cuidado excepcional na execução dos tratamentos. Recomendo fortemente a todos que procuram um dentista de confiança e excelência. Obrigado, Dr. Bruno Alex!",
    estrelas: 5,
    inicial: "R",
  },
  {
    nome: "Rebeca Gomes",
    cargo: "Paciente",
    texto: "Melhor atendimento!! Não me arrependo de ter feito o tratamento com o Doutor Bruno, ele e a equipe nos atendem super bem, sempre muito prestativos e possuem preços muito acessíveis, além de ser muito confiável",
    estrelas: 5,
    inicial: "r",
  },
  {
    nome: "Gabriela Moura",
    cargo: "Paciente",
    texto: "Clínica top. Atendimento ótimo, profissionais muito qualificados e atenciosos. Super recomendo.",
    estrelas: 5,
    inicial: "G",
  },
  {
    nome: "Juliana Costa",
    cargo: "Paciente",
    texto: "Com grande prazer termino por enquanto um ciclo de tratamento com Doutor Bruto. Mas com certeza um dentista de alta performance profissional q será o dentista das minhas próximas gerações e de todos amigos e familiares. Agradecido para sempre pelo atendimento deste da sua simpatica secretaria ao Doutor. Q Deus abençoe grandemente em nome de Jesus",
    estrelas: 5,
    inicial: "J",
  },
  {
    nome: "Francisca Martins",
    cargo: "Paciente",
    texto: "A experiência foi ótima, atendimento na recepção muito agradável fui bem atendida, e Doutor Bruno um ótimo profissional e sempre preocupado com seus pacientes.",
    estrelas: 5,
    inicial: "F",
  },
  {
    nome: "Renato Santos",
    cargo: "Paciente",
    texto: "Excelente atendimento desde da recepção até o Dr Bruno que ja é o dentista da família,realizou o implante da minha mãe e a prótese dentário que ficou muito bom.",
    estrelas: 5,
    inicial: "R",
  },
];

export default function Depoimentos() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goTo = useCallback((index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % depoimentos.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + depoimentos.length) % depoimentos.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  const d = depoimentos[current];

  return (
    <section className="depoimentos-section" id="depoimentos">
      <div className="depoimentos-header">
        <span className="section-label">DEPOIMENTOS</span>
        <h2>O que nossos pacientes <span>dizem</span></h2>
        <p>Resultados reais de quem confiou na LGTec para crescer no digital.</p>
      </div>

      <div className="dep-carrossel">
        <button className="dep-arrow dep-arrow-prev" onClick={prev} aria-label="Anterior">
          <img src={Img4} alt="Clinica Logo" />
        </button>

        <div className={`dep-card-wrap ${animating ? `exit-${direction}` : "enter"}`}>
          <div className="dep-card">
            <div className="estrelas">
              {Array.from({ length: d.estrelas }).map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="dep-texto">"{d.texto}"</p>
            <div className="dep-autor">
              <div className="dep-avatar">{d.inicial}</div>
              <div>
                <strong>{d.nome}</strong>
                <span>{d.cargo}</span>
              </div>
            </div>
          </div>
        </div>

        <button className="dep-arrow dep-arrow-next" onClick={next} aria-label="Próximo">
          <img src={Img4} alt="Clinica Logo" />
        </button>
      </div>

      <div className="dep-dots">
        {depoimentos.map((_, i) => (
          <button
            key={i}
            className={`dep-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Ir para depoimento ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}