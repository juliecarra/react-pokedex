import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "../App.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: "025", name: "Pikachu", type: "electric", base_experience: 82 },
      { id: "037", name: "Vulpix", type: "fire", base_experience: 63 },
      { id: "040", name: "Wigglytuff", type: "normal", base_experience: 109 },
      { id: "051", name: "Dugtrio", type: "ground", base_experience: 153 },
      { id: "054", name: "Psyduck", type: "water", base_experience: 80 },
      { id: "056", name: "Mankey", type: "fighting", base_experience: 74 },
      { id: "065", name: "Alakazam", type: "psychic", base_experience: 186 },
      { id: "071", name: "Victreebel", type: "grass", base_experience: 191 },
      { id: "023", name: "Ekans", type: "poison", base_experience: 62 },
      { id: "013", name: "Weedle", type: "bug", base_experience: 52 }
    ]
  };
  render() {
    const { pokemon } = this.props;

    let pokemonMap = pokemon.map((poke, i) => (
      <Pokecard
        key={i}
        id={poke.id}
        name={poke.name}
        type={poke.type}
        base_experience={poke.base_experience}
      />
    ));
    let res;
    if (this.props.isWinner) {
      res = <h1 className="winner">You win!</h1>;
    } else {
      res = <h1 className="loser">Loser!</h1>;
    }

    return (
      <div className="Pokedex">
        <h4>Total Experience: {this.props.base_experience}</h4>
        {/* <p>{this.props.isWinner ? "Winner" : "Looser"}</p> */}
        {res}
        <div className="Pokedex__Card">{pokemonMap}</div>
      </div>
    );
  }
}

export default Pokedex;
