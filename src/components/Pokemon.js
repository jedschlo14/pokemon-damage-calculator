import Selector from "./Selector";
import NumberEntry from "./NumberEntry";
import StatEdit from "./StatEdit";
import Moves from "./Moves";
import pkmnData from "../data/PokemonData";
import natures from "../data/Natures";
import statuses from "../data/Statuses";

export default function Pokemon(props) {
  const selectedPokemon = props.team[props.index];

  return (
    <div className="px-4 font-bold">
      <div className="grid grid-cols-6 gap-2 pb-4">
        <div className="col-span-4">
          <Selector
            id={selectedPokemon.id}
            data={pkmnData}
            onChange={(id) => props.selectPokemon(id)}
          />
        </div>
        <div
          className={
            "col-span-2 rounded-xl flex justify-center items-center text-white" +
            (props.team.length === 0
              ? " bg-button-secondary-disabled shadow-inner cursor-default"
              : " hover:bg-button-secondary-hover bg-button-secondary shadow-md cursor-pointer duration-200")
          }
          onClick={props.removePokemon}
        >
          Remove
        </div>
        <div className="row-start-2 flex justify-center items-center font-extrabold">
          Nature:
        </div>
        <div className="col-span-3">
          <Selector
            id={selectedPokemon.nature}
            data={natures}
            onChange={(id) => props.selectNature(id)}
          />
        </div>
        <div className="col-span-2 flex gap-2 justify-center items-center font-extrabold">
          Level:
          <NumberEntry
            value={selectedPokemon.level}
            min={1}
            max={100}
            onChange={(e) => props.changeLevel(e)}
          />
        </div>
        <div className="row-start-3 flex justify-center items-center font-extrabold">
          Ability:
        </div>
        <div className="col-span-3 capitalize">
          <Selector
            id={selectedPokemon.ability}
            data={selectedPokemon.abilities}
            onChange={(id) => props.selectAbility(id)}
          />
        </div>
        {selectedPokemon.hasOwnProperty("types") ? (
          <div className="col-span-2 flex justify-center items-center">
            <div
              className={
                "h-7 w-20 rounded-lg flex justify-center items-center capitalize text-sm text-white shadow-md cursor-default " +
                (selectedPokemon.types[0] === "normal"
                  ? "bg-type-normal"
                  : "") +
                (selectedPokemon.types[0] === "fire" ? "bg-type-fire" : "") +
                (selectedPokemon.types[0] === "water" ? "bg-type-water" : "") +
                (selectedPokemon.types[0] === "electric"
                  ? "bg-type-electric"
                  : "") +
                (selectedPokemon.types[0] === "grass" ? "bg-type-grass" : "") +
                (selectedPokemon.types[0] === "ice" ? "bg-type-ice" : "") +
                (selectedPokemon.types[0] === "fighting"
                  ? "bg-type-fighting"
                  : "") +
                (selectedPokemon.types[0] === "poison"
                  ? "bg-type-poison"
                  : "") +
                (selectedPokemon.types[0] === "ground"
                  ? "bg-type-ground"
                  : "") +
                (selectedPokemon.types[0] === "flying"
                  ? "bg-type-flying"
                  : "") +
                (selectedPokemon.types[0] === "psychic"
                  ? "bg-type-psychic"
                  : "") +
                (selectedPokemon.types[0] === "bug" ? "bg-type-bug" : "") +
                (selectedPokemon.types[0] === "rock" ? "bg-type-rock" : "") +
                (selectedPokemon.types[0] === "ghost" ? "bg-type-ghost" : "") +
                (selectedPokemon.types[0] === "dragon"
                  ? "bg-type-dragon"
                  : "") +
                (selectedPokemon.types[0] === "dark" ? "bg-type-dark" : "") +
                (selectedPokemon.types[0] === "steel" ? "bg-type-steel" : "") +
                (selectedPokemon.types[0] === "fairy" ? "bg-type-fairy" : "")
              }
            >
              {selectedPokemon.types[0]}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="row-start-4 flex justify-center items-center font-extrabold">
          Status:
        </div>
        <div className="col-span-3">
          <Selector
            id={selectedPokemon.status}
            data={statuses}
            onChange={(id) => props.selectStatus(id)}
          />
        </div>
        {selectedPokemon.hasOwnProperty("types") &&
        selectedPokemon.types.length === 2 ? (
          <div className="col-span-2 flex justify-center items-center">
            <div
              className={
                "h-7 w-20 rounded-lg flex justify-center items-center capitalize text-sm text-white shadow-md cursor-default bg-type-" +
                selectedPokemon.types[1]
              }
            >
              {selectedPokemon.types[1]}
            </div>
          </div>
        ) : (
          <div className="col-span-2"></div>
        )}
        <StatEdit
          pokemon={selectedPokemon}
          version={props.version}
          changeStat={(value, stat, type) =>
            props.changeStat(value, stat, type)
          }
        />
        <Moves
          pokemon={selectedPokemon}
          selectMove={(index, id) => props.selectMove(index, id)}
        />
      </div>
    </div>
  );
}
