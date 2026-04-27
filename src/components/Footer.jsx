import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-left">
          <h2>SNACK</h2>
          <p>© 2024 Snack Artisanal Burgers. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Press Kit</a>
        </div>
      </div>
    </footer>
  );
}