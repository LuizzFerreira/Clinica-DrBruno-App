import "../styles/Team.css";
// Substitua pelos caminhos reais das suas fotos
import fotoBruno from "../assets/img/image-10.jpg";
import fotoDra from "../assets/img/image-5.jpg";

export default function Equipe() {
  const profissionais = [
    {
      nome: "Dr. Bruno Alex",
      cargo: "Sócio / Diretor Clínico",
      cro: "CRO-RJ: 00000",
      especialidades: ["Especialista em Implantodontia", "Estética Dental"],
      foto: fotoBruno,
    },
    {
      nome: "Dra. Thaísa Arreguy Grossi",
      cargo: "Sócia / Responsável Técnica",
      cro: "CRO-RJ: 36308",
      especialidades: ["Especialista em Ortodontia", "Invisalign Doctor"],
      foto: fotoDra,
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
              <p className="cargo">{pro.cargo}</p>
              <p className="cro">{pro.cro}</p>
              <div className="especialidades">
                {pro.especialidades.map((esp, i) => (
                  <p key={i}>{esp}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}