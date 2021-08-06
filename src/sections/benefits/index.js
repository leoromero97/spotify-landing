import React from "react";

import "./benefits.css";
import { ITEMS_BENEFITS } from "./constants";

function Benefits() {
  return (
    <div className="benefits">
      <h1 className="benefits-title">
        Beneficios de Premium
      </h1>
      <div className="container-benefits" >
      {ITEMS_BENEFITS.map(({...item}) => (
        <div key={item.id} className="content-benefit"> 
          <div className="benefits-container-img">
            <img src={item.icon} alt="icon" className="icon" />
          </div>
          <div>
            <h3 className="benefits-subtitle">{item.title}</h3>
            <p className="benefits-text">{item.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Benefits;
