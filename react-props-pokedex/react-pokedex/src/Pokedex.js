import Pokecard from "./Pokecard";

function Pokedex(props) {
  return (
    <div className="Pokedex">
      {props.pokedex.map((p) => (
        <Pokecard
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
          id={p.id}
        />
      ))}
      {props.isWinner ? <p>THIS HAND WINS!</p> : ""}
    </div>
  ); // [pokemon1, pokemon2, ...]
}


export default Pokedex;
