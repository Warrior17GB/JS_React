import React, { Component } from "react";
import CardNota from "../CardNota";
import "./stylo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map(
          (categorias, index) => {
            return (
              <li key={index} className="lista-notas_item">
                <div>{categorias}</div>
                <CardNota />
              </li>
            );
          }
        )}
      </ul>
    );
  }
}

export default ListaDeNotas;
