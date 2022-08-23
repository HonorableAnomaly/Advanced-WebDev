import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
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
    let title;
    if (this.props.isWinner) {
      title = <h2 className="Pokedex-winner">Your Pokémon are victorious!</h2>;
    } else {
      title = <h2 className="Pokedex-loser">Your Pokémon have fainted!</h2>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total exp: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
