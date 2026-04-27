import { useState } from "react";
import "../styles/Gallery.css";

const images = [
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", category: "burgers" },
  { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9", category: "people" },
  { src: "https://images.unsplash.com/photo-1550547660-d9450f859349", category: "burgers" },
  { src: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee", category: "atmosphere" },
  { src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", category: "burgers" },
  { src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877", category: "burgers" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section className="Gallery">
      {/* HEADER */}
      <div className="Gallery-header">
        <h1>THE ART OF THE SIZZLE</h1>
        <p>
          A visual journey through our kitchen, our crafts, and the community
          that makes SNACK a neighborhood staple.
        </p>

        <div className="filters">
          <button onClick={() => setFilter("all")}>All Frames</button>
          <button onClick={() => setFilter("burgers")}>The Burgers</button>
          <button onClick={() => setFilter("atmosphere")}>Atmosphere</button>
          <button onClick={() => setFilter("people")}>Our People</button>
        </div>
      </div>

      {/* GRID */}
      <div className="Gallery-grid">
        {filtered.map((img, i) => (
          <div
            key={i}
            className="Gallery-item"
            style={{ backgroundImage: `url(${img.src})` }}
          />
        ))}
      </div>

      {/* CTA FINAL */}
      <div className="Gallery-cta">
        <h2>READY FOR THE REAL THING?</h2>
        <div className="buttons">
          <button className="primary">Book a Table</button>
          <button className="secondary">Order Online</button>
        </div>
      </div>
    </section>
  );
}