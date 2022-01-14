// import "../assets/styles/tailwind.css";
import React, { useState } from "react";

export default function Sprite(props) {
  const [sprite, setSprite] = useState();
  const [name, setName] = useState();

  const url = "https://pokeapi.co/api/v2/pokemon/" + props.id.toString() + "/";
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      setSprite(pokeData.sprites.other["official-artwork"].front_default);
      setName(pokeData.name);
    });

  return <img className="w-full h-full object-fit" src={sprite} alt={name} />;
}

// export default class Sprite extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sprite: "",
//       name: "",
//       url: "https://pokeapi.co/api/v2/pokemon/" + props.id.toString() + "/",
//     };
//   }

//   render() {
//     fetch(this.state.url)
//       .then((response) => response.json())
//       .then(function (pokeData) {
//         console.log(pokeData.sprites.other["official-artwork"].front_default);
//         console.log(pokeData.name);
//         this.setState({
//           sprite: pokeData.sprites.other["official-artwork"].front_default,
//           name: pokeData.name,
//         });
//         console.log(sprite)
//         console.log(this.name);
//       });

//     return (
//       <img
//         className="w-full h-full object-fit"
//         src={this.sprite}
//         alt={this.name}
//       />
//     );
//   }
// }

// -------------------------------------------------------------------------------

// const generation = "generation-" + stringify(props.version + 1).toLowerCase();
// function fetchPokemonData() {
//   let url = "https://pokeapi.co/api/v2/pokemon/" + props.id.toString() + "/";
//   fetch(url)
//     .then((response) => response.json())
//     .then(function (pokeData) {
//       // console.log(pokeData);
//       // setSprite(pokeData.sprites.other["official-artwork"]);
//       setSprite(
//         pokeData.sprites.versions[generation][versions[props.version]]
//           .front_default
//       );
//       setName(pokeData.name);
//     });
// }

// const [sprite, setSprite] = useState(fetchPokemonData());
// const [name, setName] = useState(fetchPokemonData());

// return <img className="w-full h-full object-fit" src={sprite} alt={name} />;

// --------------------------------------------------------------------------------

// import { stringify } from "roman-numerals-api";

// const versions = [
//   "yellow",
//   "crystal",
//   "emerald",
//   "platinum",
//   "black-white",
//   "x-y",
//   "ultra-sun-ultra-moon",
//   "icons",
// ];

// const generation = "generation-" + stringify(props.version + 1).toLowerCase();

// setSprite(
//   pokeData.sprites.versions[generation][versions[props.version]]
//     .front_default
// );
