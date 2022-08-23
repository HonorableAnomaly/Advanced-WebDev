import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 3, name: "Venusaur", type: "Grass", exp: 108 },
      { id: 6, name: "Charizard", type: "Fire", exp: 112 },
      { id: 9, name: "Blastoise", type: "Water", exp: 103 },
      { id: 150, name: "Mewtwo", type: "Psychic", exp: 157 },
      { id: 94, name: "Gengar", type: "Ghost", exp: 110 },
      { id: 149, name: "Dragonite", type: "Dragon", exp: 126 },
      { id: 143, name: "Snorlax", type: "Normal", exp: 120 },
      { id: 145, name: "Zapdos", type: "Electric/Flying", exp: 143 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
