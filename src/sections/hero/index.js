import React from "react";
import disco from "../../assets/spotifyHero.png";

import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container-text">
        <h1 className="hero-title">
          Disfruta 3 meses de Premium gratis
        </h1>
        <p className="hero-text">
          Disfruta tu música sin anuncios, en modo offline y mucho más. Cancela cuando quieras.
        </p>
        <a
          href="https://www.spotify.com/ar/purchase/offer/holiday-2020-trial-3m/"
          className="hero-button-primary"
          >
            Obtén 3 meses gratis
          </a>
          <a href="#plains" className="hero-button-tertiary">
            Ver planes
          </a>
          <p className="hero-text-two">
            Solo para el plan Individual. Después, cuesta $ 139,00 por mes +
            impuestos aplicables (IVA [21 %], PAIS [8 %] e IG/IBP [35 %]; verás
            reflejado el importe en tu estado de cuenta bancaria). Se aplican 
            <a
              href="https://www.spotify.com/ar/legal/premium-promotional-offer-terms/"
              className="hero-terms"
            >
              Términos y Condiciones.
            </a>
            Solo para usuarios que aún no han probado Premium.
          </p>
      </div>
      <div className="hero-container-img">
        <img src={disco} alt="disco" className="disco" />
      </div>
    </div>
  );
}

export default Hero;
