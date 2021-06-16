import React from "react";
import Card1 from "../../components/Cards/Card1";
import Card2 from "../../components/Cards/Card2";
import Card3 from "../../components/Cards/Card3";

import "./plains.css";

function Plains() {
  return (
    <div className="plains">
      <div className="container-text">
        <h1 className="plains-title">
          Elegí tu plan Premium
        </h1>
        <p className="plains-text">
          Escucha sin límites en tu teléfono, altavoces y otros dispositivos.
        </p>
      </div>
      <div className="containerCards">
        <Card1 />
        <Card2 />
        <Card3 />
         {/* @Modify: Descomentar cuando se pueda mejorar el array de las descripciones    
           {DATA_PLAINS.map(({...item}) => (
             <div className="card" key={item}>
               <span className="timeFree">{item.timeFree}</span>
               <p className="options">Opciones de prepago disponibles</p>
               <h3 className="card-title">{item.title}</h3>
               <p className="card-text">{item.money}</p>
               <p className="card-text">{item.accounts}</p>
               <span className="line"/>
               <div className="container-description">
                 <img src={icCheck} alt="check" className="check" />
                 <p className="card-text">{item.description}</p>
               </div>
               <a
                 href={item.link}
                 className="card-button"
                 >
                   Empezar
                 </a>
                 <div>
                   <p className="card-terms">{item.terms}</p>
                 </div>
             </div>
           ))} 
         */}
      </div>
     
    </div>
  );
}

export default Plains;
