import React, { Component } from "react";
import FormularioCadastro from "./components/formularioCadastro";
import ListaDeNotas from "./components/listasDeNotas";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}
export default App;
