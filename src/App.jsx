import React, { Component } from "react";
import "./App.css";
//import Pokecard from "./components/Pokecard";
//import Pokedex from "./components/Pokedex";
import Pokegame from "./components/Pokegame";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Pokecard
          id="025"
          name="Pikachu"
          type="electric"
          base_experience={82}
       /> */}
        {/* <Pokedex /> */}
        <Pokegame />
      </div>
    );
  }
}

export default App;
