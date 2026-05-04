import "../styles/Showcase.css";
import imgImplantes from "../assets/img/endodontia.webp"; 
import imgOrtodontia from "../assets/img/image-23.webp";
import imgInvisalign from "../assets/img/image-27.webp";
import imgLentes from "../assets/img/image-4.webp";
import imgClareamento from "../assets/img/image-24.webp";
import imgProtese from "../assets/img/image-6.webp";

export default function Showcase() {
  const servicos = [
    { title: "Implantes Dentários", img: imgImplantes, desc: "A endodontia é a área da odontologia responsável pelo tratamento de canal, atuando na polpa do dente para remover infecções e manter o dente saudável e funcional." },
    { title: "Ortodontia", img: imgInvisalign, desc: "Os implantes são raízes artificiais que substituem dentes perdidos de forma individual ou total, sendo usados em implantes unitários e no protocolo, devolvendo estética, função e segurança ao paciente." },
    { title: "Invisalign", img: imgOrtodontia, desc: "Os tratamentos ortodônticos são popularmente conhecidos por sua capacidade de reposicionar e alinhar dentes." },
    { title: "Lentes de Contato Dentais", img: imgLentes, desc: "Facetas laminadas ou lentes de contato são revestimentos cerâmicos finos, colocados sobre a parte frontal dos dentes." },
    { title: "Clareamento Dental", img: imgClareamento, desc: "Existem algumas formas e técnicas de clareamento dentais, alguns fatores precisam ser avaliados individualmente." },
    { title: "Prótese Dentária", img: imgProtese, desc: "É uma alternativa simples e eficiente para se recuperar a liberdade e a tranquilidade para voltar a sorrir." },
  ];

  return (
    <section className="showcase">
      <h1 className="showcase-title">Clínica Odontológica - São Paulo</h1>
      
      <div className="showcase-grid">
        {servicos.map((item, index) => (
          <div key={index} className="service-card">
            <h3>{item.title}</h3>
            <div className="img-container">
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}