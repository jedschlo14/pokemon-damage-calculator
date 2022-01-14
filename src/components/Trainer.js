import { useState } from "react";
import Team from "./Team";
import Pokemon from "./Pokemon";

const maxId = 898;

export default function Trainer(props) {
  const [team, setTeam] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const createPokemon = (id, add) => {
    const newPokemon = {
      id: id,
      sprite: "",
      types: [],
      level: 0,
      nature: 2,
      abilities: [],
      ability: 1,
      status: 1,
      hp: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
      atk: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
      def: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
      spa: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
      spd: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
      spe: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
    };

    const url =
      "https://pokeapi.co/api/v2/pokemon/" + newPokemon.id.toString() + "/";
    fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        newPokemon.name = pokeData.name;
        newPokemon.level = 50;
        newPokemon.sprite = pokeData.sprites.front_default;
        newPokemon.types = pokeData.types.map((type) => type.type.name);
        newPokemon.hp.base = pokeData.stats[0].base_stat;
        newPokemon.atk.base = pokeData.stats[1].base_stat;
        newPokemon.def.base = pokeData.stats[2].base_stat;
        newPokemon.spa.base = pokeData.stats[3].base_stat;
        newPokemon.spd.base = pokeData.stats[4].base_stat;
        newPokemon.spe.base = pokeData.stats[5].base_stat;
        newPokemon.weight = pokeData.weight;
        newPokemon.abilities = pokeData.abilities.map((ability, index) => {
          return {
            label: ability.ability.name,
            value: index + 1,
            info: ability.ability.url.split("/")[6],
          };
        });
        newPokemon.moves = pokeData.moves.map((move) => {
          return move.move.name;
        });
        if (add) setTeam([...team, newPokemon]);
        else
          setTeam(
            team.map((pokemon, index) =>
              index === selectedIndex ? newPokemon : pokemon
            )
          );
      });
    return newPokemon;
  };

  const addPokemon = (index) => {
    setSelectedIndex(index);
    if (index === team.length) {
      const newPokemon = createPokemon(
        Math.floor(Math.random() * maxId) + 1,
        true
      );
      setTeam([...team, newPokemon]);
    }
  };

  const updateTeam = (id) => {
    createPokemon(id, false);
  };

  const removePokemon = () => {
    const maxIndex = team.length - 1;
    setTeam(team.filter((_, index) => index !== selectedIndex));
    if (selectedIndex === maxIndex) setSelectedIndex(maxIndex - 1);
  };

  const changeLevel = (level) => {
    setTeam(
      team.map((pokemon, index) =>
        index === selectedIndex
          ? {
              ...pokemon,
              level: level,
            }
          : pokemon
      )
    );
  };

  const selectNature = (nature) => {
    setTeam(
      team.map((pokemon, index) =>
        index === selectedIndex
          ? {
              ...pokemon,
              nature: nature,
            }
          : pokemon
      )
    );
  };

  const selectAbility = (ability) => {
    setTeam(
      team.map((pokemon, index) =>
        index === selectedIndex ? { ...pokemon, ability: ability } : pokemon
      )
    );
  };

  const selectStatus = (status) => {
    setTeam(
      team.map((pokemon, index) =>
        index === selectedIndex ? { ...pokemon, status: status } : pokemon
      )
    );
  };

  const changeStat = (value, stat, type) => {
    setTeam(
      team.map((pokemon, index) =>
        index === selectedIndex
          ? {
              ...pokemon,
              [stat]: {
                ...pokemon[stat],
                [type]: value,
              },
            }
          : pokemon
      )
    );
  };

  console.log(team);

  return (
    <div>
      <div className="w-[31rem] bg-light shadow-md rounded-2xl">
        <div className="bg-title p-4 flex justify-center items-center rounded-2xl">
          <div className="text-white font-extrabold text-lg">Team</div>
        </div>
        <Team
          team={team}
          index={selectedIndex}
          version={props.version}
          addPokemon={(index) => addPokemon(index)}
          select={(index) => setSelectedIndex(index)}
        />
        {team.length > 0 ? (
          <Pokemon
            index={selectedIndex}
            team={team}
            version={props.version}
            selectPokemon={(id) => updateTeam(id)}
            removePokemon={removePokemon}
            changeLevel={(level) => changeLevel(level)}
            selectNature={(nature) => selectNature(nature)}
            selectAbility={(ability) => selectAbility(ability)}
            selectStatus={(nature) => selectStatus(nature)}
            changeStat={(value, stat, type) => changeStat(value, stat, type)}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
