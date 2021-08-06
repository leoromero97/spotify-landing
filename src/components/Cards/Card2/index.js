import React from "react";
import icCheck from "../../../assets/check.png";

function Card2() {
  return (
    <div className="card">
      <span className="time-free">
        1 mes gratis al suscribirte
      </span>
      <p className="options">Opciones de prepago disponibles</p>
      <h3 className="card-title">Duo</h3>
      <p className="card-text">
        $ 279,00*** al mes después del periodo de la oferta
      </p>
      <p className="card-text">
        2 cuentas
      </p>
      <span className="line"/>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">2 cuentas Premium para parejas que conviven</p>
      </div>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">
          Duo Mix: una playlist para dos, actualizada periódicamente con la música que más les gusta
        </p>
      </div>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">
          Reproducción de música sin anuncios, en modo offline y on-demand
        </p>
      </div>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">Prepagá o suscribite</p>
      </div>
      <a
        href="https://www.spotify.com/ar/plan/duo/"
        className="card-button"
      >
        Empezar
      </a>
      <div>
         <p className="card-terms">
         Se aplican Términos y Condiciones. El mes gratis no está disponible para los usuarios
          que ya hayan probado Premium. *** + impuestos aplicables (IVA [21%], PAIS [8%], IG/IBP [35%] 
          que verás en tu extracto bancario).   
        </p>
      </div>
  </div>
  );
}

export default Card2;
