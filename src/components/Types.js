export default function Types(props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 col-span-2 row-span-3">
      {props.pokemon.types.map((type, index) => {
        return (
          <div
            className={
              "p-2 h-10 w-24 rounded-lg flex justify-center items-center capitalize text-white shadow-md cursor-default bg-type" +
              type
            }
            key={index}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
}

// (type === "normal" ? "bg-type-normal" : "") +
// (type === "fire" ? "bg-type-fire" : "") +
// (type === "water" ? "bg-type-water" : "") +
// (type === "electric" ? "bg-type-electric" : "") +
// (type === "grass" ? "bg-type-grass" : "") +
// (type === "ice" ? "bg-type-ice" : "") +
// (type === "fighting" ? "bg-type-fighting" : "") +
// (type === "poison" ? "bg-type-poison" : "") +
// (type === "ground" ? "bg-type-ground" : "") +
// (type === "flying" ? "bg-type-flying" : "") +
// (type === "psychic" ? "bg-type-psychic" : "") +
// (type === "bug" ? "bg-type-bug" : "") +
// (type === "rock" ? "bg-type-rock" : "") +
// (type === "ghost" ? "bg-type-ghost" : "") +
// (type === "dragon" ? "bg-type-dragon" : "") +
// (type === "dark" ? "bg-type-dark" : "") +
// (type === "steel" ? "bg-type-steel" : "") +
// (type === "fairy" ? "bg-type-fairy" : "")
