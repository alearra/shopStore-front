import React from "react";
import "../styles/Menu.scss";

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="/" className="title">
            Ordenes
          </a>
        </li>
        <li>
          <a href="/" className="title">
            Cuenta
          </a>
        </li>
        <li>
          <a href="/">Cerrar Sección</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
