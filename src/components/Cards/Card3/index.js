import React from "react";
import icCheck from "../../../assets/check.png";

function Card3() {
  return (
    <div className="card">
      <span className="timeFree">
        1 mes gratis al suscribirte
      </span>
      <p className="options">Opciones de prepago disponibles</p>
      <h3 className="card-title">Familiar</h3>
      <p className="card-text">
        $ 359,00*** al mes después del periodo de la oferta
      </p>
      <p className="card-text">
        Hasta 6 cuentas
      </p>
      <span className="line"/>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">6 cuentas Premium para familiares que conviven</p>
      </div>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">
          Mix familiar: una playlist para tu familia, actualizada periódicamente con la música que más les gusta
        </p>
      </div>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">
          Bloquea la música con contenido explícito
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
        <p className="card-text">
          Spotify Kids: una aplicación independiente creada solo para niños
        </p>
      </div>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">Prepagá o suscribite</p>
      </div>
      <a
        href="https://www.spotify.com/ar/plan/family/"
        className="card-button"
      >
        Empezar
      </a>
      <div>
         <p className="card-terms">
         Se aplican Términos y Condiciones. El mes gratis no está disponible para los usuarios que ya hayan probado Premium. *** + impuestos aplicables (IVA [21%], PAIS [8%], IG/IBP [35%] que verás en tu extracto bancario).
        </p>
      </div>
  </div>
  );
}

export default Card3;
