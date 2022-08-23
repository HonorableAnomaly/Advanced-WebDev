import React, { Component } from "react";
import "./Pokecard.css";
const sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/f301664fbbce6ccbe09f9561287e05653379f870/sprites/pokemon/";
const official = "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

// Contains both Sprites and Official images - one commented out until logic written to toggle both
class Pokecard extends Component {
  render() {
    let imgOfficial = `${official}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img className="Pokecard-image-art" src={imgOfficial} alt="" />
        </div>
        <div className="Pokecard-data">{this.props.type}</div>
        <div className="Pokecard-data">Exp: {this.props.exp}</div>
      </div>
    );
    // let imgSprite = `${sprites}${this.props.id}.png`;
    // return (
    //   <div className="Pokecard">
    //     <h1 className="Pokecard-title">{this.props.name}</h1>
    //     <img src={imgSprite} alt="" />
    //     <div className="Pokecard-data">Type: {this.props.type}</div>
    //     <div className="Pokecard-data">Exp: {this.props.exp}</div>
    //   </div>
    // );
  }
}

export default Pokecard;
