import "../styles/Gallery.css";
import img1 from "../assets/img/image-29.webp";
import img2 from "../assets/img/image-33.webp";
import img3 from "../assets/img/image-31.webp";
import img4 from "../assets/img/image-34.webp";
import img5 from "../assets/img/image-30.webp";
import img6 from "../assets/img/image-35.webp";


const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
];

export default function Gallery() {
  return (
    <section className="Gallery">
      {/* HEADER */}
      <div className="Gallery-header">
        <h1>Uma jornada visual pela nossa clinica.</h1>
      </div>

      {/* GRID */}
      <div className="Gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="Gallery-item">
            <img src={img.src} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}