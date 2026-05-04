import "../styles/Menu.css";
import fotoFachada1 from "../assets/img/image-28.webp";
import fotoFachada2 from "../assets/img/image-24.webp";
import fotoRecepcao from "../assets/img/image-27.webp";
import fotoInterna from "../assets/img/image-23.webp";
import fotoInterna2 from "../assets/img/endodontia.webp";
import fotoInterna3 from "../assets/img/image-26.webp";

export default function Galeria() {
  const fotos = [
    { 
      src: fotoFachada1, 
      alt: "Limpeza Dental", 
      titulo: "Limpeza Dental",
      descricao: "Remoção de tártaro e placa para manter a saúde bucal."
    },
    { 
      src: fotoFachada2, 
      alt: "Clareamento Dental", 
      titulo: "Clareamento",
      descricao: "Existem algumas formas e técnicas de clareamento dentais, alguns fatores precisam ser avaliados individualmente."
    },
    { 
      src: fotoInterna, 
      alt: "Ortodontia", 
      titulo: "Aparelhos Ortodônticos",
      descricao: "Correção do alinhamento dos dentes."
    },
    { 
      src: fotoRecepcao, 
      alt: "Implantes Dentários", 
      titulo: "Implantes",
      descricao: "Os implantes são raízes artificiais que substituem dentes perdidos de forma individual ou total, sendo usados em implantes unitários e no protocolo, devolvendo estética, função e segurança ao paciente."
    },
    { 
      src: fotoInterna2, 
      alt: "Tratamento de Canal", 
      titulo: "Canal",
      descricao: "Tratamento da raiz do dente para eliminar dor."
    },
    { 
      src: fotoInterna3, 
      alt: "Facetas Dentárias", 
      titulo: "Facetas",
      descricao: "Facetas laminadas ou lentes de contato são revestimentos cerâmicos finos, colocados sobre a parte frontal dos dentes."
    },
  ];

  return (
    <section className="galeria-section">
      <div className="galeria-header">
        <h2>Dr. Bruno Alex - UNIDADE SÃO PAULO</h2>
        <p>VENHA NOS VISITAR</p>
      </div>

      <div className="galeria-grid">
        {fotos.map((foto, index) => (
          <div key={index} className="galeria-item">
            <img src={foto.src} alt={foto.alt} />

            <div className="overlay">
              <h3>{foto.titulo}</h3>
              <p>{foto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}