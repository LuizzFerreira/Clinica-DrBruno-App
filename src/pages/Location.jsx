import "../styles/Location.css";

export default function Location() {
  return (
    <section className="location-page">
      {/* HEADER */}
      <div className="location-header">
        <span className="tag">FIND US</span>
        <h1>Crafting Burgers in the Heart of the City</h1>
        <p>
          Located in the vibrant industrial district, SNACK brings artisanal
          craftsmanship to the classic burger joint experience.
        </p>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="location-grid">
        {/* MAPA */}
        <div className="map">
          <iframe
            title="SNACK Location"
            src="https://www.google.com/maps?q=Rua%20Bras%C3%ADlia%2C%20112%20Centro%20Apu%C3%AD%20AM%2069265-000&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <div className="map-overlay">
            <h3>Downtown Flagship</h3>
            <p>Rua Brasília, 112 - Centro, Apuí - AM</p>
          </div>
        </div>

        {/* SIDE INFO */}
        <div className="side">
          <div className="card">
            <h3>Connect</h3>
            <p>📞 +1 (555) 012-3456</p>
            <p>✉️ hello@snackburgers.com</p>
          </div>

          <div className="card">
            <h3>Service Hours</h3>

            <div className="hours">
              <p><strong>Seg:</strong> 14:00 - 00:00</p>
              <p><strong>Ter:</strong> Fechado</p>
              <p><strong>Qua:</strong> 14:00 - 00:00</p>
              <p><strong>Qui:</strong> 14:00 - 00:00</p>
              <p><strong>Sex:</strong> 14:00 - 00:00</p>
              <p><strong>Sáb:</strong> 14:00 - 00:00</p>
              <p><strong>Dom:</strong> 14:00 - 00:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery FINAL */}
      <div className="location-bottom">
        <div className="img img1" />
        <div className="img img2" />

        <div className="follow">
          <h3>Follow the Sizzle</h3>
          <p>Join our community for secret menu drops and daily specials.</p>

          <div className="icons">
            <span>🔗</span>
            <span>📸</span>
            <span>🐦</span>
          </div>

          <button>JOIN THE SNACK CLUB</button>
        </div>
      </div>
    </section>
  );
}