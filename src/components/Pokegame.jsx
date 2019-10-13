import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
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

    //generate two random hands
    let handOne = [];
    let handTwo = [...pokemon];

    while (handOne.length < handTwo.length) {
      let randomHand = Math.floor(Math.random() * handTwo.length);
      let randomPokemon = handTwo.splice(randomHand, 1)[0];
      handOne.push(randomPokemon);
    }

    //calculate hands experience
    let xpOne = handOne.reduce(
      (xp, pokemon) => xp + pokemon.base_experience,
      0
    );
    let xpTwo = handTwo.reduce(
      (xp, pokemon) => xp + pokemon.base_experience,
      0
    );

    return (
      <div>
        <Pokedex
          pokemon={handOne}
          base_experience={xpOne}
          isWinner={xpOne > xpTwo}
        />
        <Pokedex
          pokemon={handTwo}
          base_experience={xpTwo}
          isWinner={xpOne < xpTwo}
        />
      </div>
    );
  }
}

export default Pokegame;
