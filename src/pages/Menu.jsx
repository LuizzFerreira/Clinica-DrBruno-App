import "../styles/Menu.css";
import fotoFachada1 from "../assets/img/image-8.jpeg";
import fotoFachada2 from "../assets/img/image-7.jpeg";
import fotoRecepcao from "../assets/img/image-8.jpeg";
import fotoInterna from "../assets/img/image-7.jpeg";

export default function Galeria() {
  const fotos = [
    { src: fotoFachada1, alt: "Fachada Unidade Botafogo" },
    { src: fotoFachada2, alt: "Fachada Noturna" },
    { src: fotoFachada1, alt: "Fachada Lateral" },
    { src: fotoRecepcao, alt: "Recepção Moderna" },
    { src: fotoInterna, alt: "Sala de Espera" },
    { src: fotoFachada1, alt: "Detalhe Fachada" },
  ];

  return (
    <section className="galeria-section">
      <div className="galeria-header">
        <h2>PRIME UNIDADE BOTAFOGO</h2>
        <p>CLIQUE NAS FOTOS PARA AMPLIAR</p>
      </div>

      <div className="galeria-grid">
        {fotos.map((foto, index) => (
          <div key={index} className="galeria-item">
            <img src={foto.src} alt={foto.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}