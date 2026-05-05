import "../styles/Team.css";
// Substitua pelos caminhos reais das suas fotos
import fotoBruno from "../assets/img/image-9.webp";
import fotoDra from "../assets/img/image-19.webp";
import fotoAlex from "../assets/img/image-18.webp";
import fotoDanilo from "../assets/img/image-36.webp";

export default function Equipe() {
  const profissionais = [
    {
      nome: "Dr. Bruno Alex",
      cargo: "Implantodontista",
      cro: null,
      especialidades: ["Responsável técnico"],
      foto: fotoBruno,
    },
    {
      nome: "Dra. Stefani Maciel",
      cargo: null,
      cro: null,
      especialidades: ["Harmonização orofacial - HOF"],
      foto: fotoDra,
    },
        {
      nome: "Dr. Alexandre",
      cargo: null,
      cro: null,
      especialidades: ["Ortodontista"],
      foto: fotoAlex,
    },
    {
      nome: "Dr. Danilo Bandeira",
      cargo: null,
      cro: null,
      especialidades: ["Endodontista"],
      foto: fotoDanilo,
    }
  ];

  return (
    <section className="equipe-section">
      <h2 className="equipe-title">Nossa Equipe</h2>
      <div className="equipe-divider"></div>

      <div className="equipe-container">
        {profissionais.map((pro, index) => (
          <div key={index} className="membro-card">
            <div className="membro-foto">
              <img src={pro.foto} alt={pro.nome} />
            </div>
            <div className="membro-info">
              <h3>{pro.nome}</h3>
              <p className="cro">{pro.cro}</p>
              <div className="especialidades">
                {pro.especialidades.map((esp, i) => (
                  <p key={i}>{esp}</p>
                ))}
              </div>
              <p className="cargo">{pro.cargo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}