import Selector from "./Selector";
import NumberEntry from "./NumberEntry";
import Types from "./Types";
import StatEdit from "./StatEdit";
import Moves from "./Moves";
import Health from "./Health";
import pkmnData from "../data/PokemonData";
import natures from "../data/Natures";
import statuses from "../data/Statuses";
import itemData from "../data/Items";

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
            onChange={(id) => props.changeAttribute("nature", id)}
          />
        </div>
        <div className="col-span-2 flex gap-2 justify-center items-center font-extrabold">
          Level:
          <NumberEntry
            value={selectedPokemon.level}
            min={1}
            max={100}
            onChange={(value) => props.changeAttribute("level", value)}
          />
        </div>
        <div className="row-start-3 flex justify-center items-center font-extrabold">
          Ability:
        </div>
        <div className="col-span-3 capitalize">
          <Selector
            id={selectedPokemon.ability}
            data={selectedPokemon.abilities}
            onChange={(id) => props.changeAttribute("ability", id)}
          />
        </div>
        {selectedPokemon.hasOwnProperty("types") ? (
          <Types pokemon={selectedPokemon} />
        ) : (
          <></>
        )}
        <div className="row-start-4 flex justify-center items-center font-extrabold">
          Item:
        </div>
        <div className="col-span-3 capitalize">
          <Selector
            id={selectedPokemon.item}
            data={itemData}
            onChange={(id) => props.changeAttribute("item", id)}
          />
        </div>
        <div className="row-start-5 flex justify-center items-center font-extrabold">
          Status:
        </div>
        <div className="col-span-3">
          <Selector
            id={selectedPokemon.status}
            data={statuses}
            onChange={(id) => props.changeAttribute("status", id)}
          />
        </div>

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
        <Health
          pokemon={selectedPokemon}
          changeStat={(value, stat, type) =>
            props.changeStat(value, stat, type)
          }
        />
      </div>
    </div>
  );
}
