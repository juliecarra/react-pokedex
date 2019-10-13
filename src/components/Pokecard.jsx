//show a single pokemon
import React, { Component } from "react";
import "../App.css";

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;

    let pokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard__Title">{name}</h1>
        <div className="Pokecard__Image">
          <img src={pokemonImage} alt="" />
        </div>
        <p className="Pokecard__Data">Type: {type}</p>
        <p className="Pokecard__Data">EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
