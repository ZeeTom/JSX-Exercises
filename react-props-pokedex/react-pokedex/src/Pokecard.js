const BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(props) {
  //TODO Add alt to images
  return (
    <div className="Pokecard">
      <h3>{props.name}</h3>
      <img src={`${BASE_URL}${props.id}.png`} />
      <p>{props.type}</p>
      <p>{props.base_experience}</p>
    </div>
  );
}

export default Pokecard;
