import { Link } from "react-router-dom";
import "../styles/Visit.css";
import img1 from "../assets/img/image-9.webp";

export default function Visit() {
  return (
    <section className="visit">
      <div>
        <div className="visit-content">
          <span className="tag">VISITE-NOS</span>
          <h2></h2>
          <p>Junte-se a nós para a experiência completa.</p>
          <div className="info">
            <div>
              <span>📍</span>
              <p>Rua Arlinda Ramos Roleira, 177- SP, 04860-070</p>
            </div>
            <div>
              <span>⏰</span>
              <div>
                <p>Segunda a Sexta: 08:00 - 18:00</p>
                <p>Domingo: 09:00 - 11:30</p>
              </div>
            </div>
          </div>
          <Link to="/location">
            <button className="btn">Como Chegar</button>
          </Link>
        </div>
        <img className="visit-image" src={img1} alt="SNACK Logo" />
      </div>
    </section>
  );
}