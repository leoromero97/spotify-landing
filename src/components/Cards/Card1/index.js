import React from "react";
import icCheck from "../../../assets/check.png";

function Card1() {
  return (
    <div className="card">
      <span className="timeFree">
        3 meses gratis al suscribirte
      </span>
      <p className="options">Opciones de prepago disponibles</p>
      <h3 className="card-title">Individual</h3>
      <p className="card-text">
        $ 199,00*** al mes después del periodo de la oferta
      </p>
      <p className="card-text">
        1 cuenta
      </p>
      <span className="line"/>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">Escucha música sin anuncios</p>
      </div>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">Escucha música en cualquier lugar, incluso sin conexión</p>
      </div>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">Reproducción on-demand</p>
      </div>
      <div className="container-description">
        <img src={icCheck} alt="check" className="check" />
        <p className="card-text">Prepagá o suscribite</p>
      </div>
      <a
        href="https://www.spotify.com/ar/plan/individual/"
        className="card-button"
      >
        Empezar
      </a>
      <div>
         <p className="card-terms">
         Los 3 meses gratis no están disponibles para usuarios que ya han probado
          Premium. Se aplican Términos y Condiciones. 
          La oferta termina el 22 de junio de 2021. *** + impuestos aplicables (IVA [21%], PAIS [8%], 
          IG/IBP [35%] que verás en tu estado de cuenta).   
        </p>
      </div>
  </div>
  );
}

export default Card1;
