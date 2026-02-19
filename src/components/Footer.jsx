import React from "react";
import "../css/Footer.css";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-light border-top py-4 mt-5">
    <div className="container">
      <div className="row align-items-center gy-3">
        <div
          className="col-12 col-md-4 text-start position-relative"
          style={{ minHeight: 80 }}
        >
          <img className="brand-logo-footer" src="../logo4.png" alt="logo" />
        </div>
        <div className="col-12 col-md-4 text-center">
          <p className="mb-0">© 2026 Aventum. Todos los derechos reservados.</p>
        </div>
        <div className="col-12 col-md-4 text-end">
          <a
            href="https://wa.me/56912345684"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
            className="text-success ms-3"
          >
            <FaWhatsapp size={45} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
