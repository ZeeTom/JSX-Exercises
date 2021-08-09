import Pokedex from "./Pokedex"

function Pokegame(props) {
  let pokedex = props.pokedex;
  pokedex = pokedex.sort(() => 0.5 - Math.random());
  let firstHand = pokedex.slice(0,pokedex.length/2);
  let secondHand = pokedex.slice(pokedex.length/2);

  let firstExp = firstHand.reduce((acc,p) => acc + p.base_experience);
  let secondExp = secondHand.reduce((acc,p) => acc + p.base_experience);

  let firstResult = firstExp > secondExp;
  let secondResult = !firstResult;

  return (
  <div className="Pokegame">
    <div className="Pokegame-firstHand">
      <Pokedex pokedex={firstHand} isWinner={firstResult} />
    </div>
    <div className="Pokegame-secondHand">
      <Pokedex pokedex={secondHand} isWinner={secondResult} />
    </div>
  </div>
  )
}

const pokedex = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

Pokegame.defaultProps = {
  pokedex
};

export default Pokegame