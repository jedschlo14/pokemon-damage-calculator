import { useState } from "react";
import Team from "./Team";
import Pokemon from "./Pokemon";
import stages from "../data/Stages";
import natures from "../data/Natures";
import stats from "../data/Stats";

const maxId = 898;

export default function Trainer(props) {
  const [team, setTeam] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const createPokemon = (id, add) => {
    const newPokemon = {
      id: id,
      sprite: "",
      types: [],
      level: 50,
      nature: 2,
      abilities: [],
      ability: 1,
      status: 1,
      hp: { base: 0, iv: 0, ev: 0, final: 0, stage: 7 },
      atk: { base: 0, iv: 0, ev: 0, final: 0, stage: 7 },
      def: { base: 0, iv: 0, ev: 0, final: 0, stage: 7 },
      spa: { base: 0, iv: 0, ev: 0, final: 0, stage: 7 },
      spd: { base: 0, iv: 0, ev: 0, final: 0, stage: 7 },
      spe: { base: 0, iv: 0, ev: 0, final: 0, stage: 7 },
    };

    const url =
      "https://pokeapi.co/api/v2/pokemon/" + newPokemon.id.toString() + "/";
    fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        newPokemon.name = pokeData.name;
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
        const calculatedStats = finalStats({});
        newPokemon.hp.final = calculatedStats.hp;
        newPokemon.atk.final = calculatedStats.atk;
        newPokemon.def.final = calculatedStats.def;
        newPokemon.spa.final = calculatedStats.spa;
        newPokemon.spd.final = calculatedStats.spd;
        newPokemon.spe.final = calculatedStats.spe;
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
    const statUpdates = finalStats({ level: level });
    setTeam(
      team.map((pokemon, index) =>
        index === selectedIndex
          ? {
              ...pokemon,
              level: level,
              hp: { ...pokemon.hp, final: statUpdates[0] },
              atk: { ...pokemon.atk, final: statUpdates[1] },
              def: { ...pokemon.def, final: statUpdates[2] },
              spa: { ...pokemon.spa, final: statUpdates[3] },
              spd: { ...pokemon.spd, final: statUpdates[4] },
              spe: { ...pokemon.spe, final: statUpdates[5] },
            }
          : pokemon
      )
    );
  };

  const selectNature = (nature) => {
    const statUpdates = finalStats({ nature: nature });
    setTeam(
      team.map((pokemon, index) =>
        index === selectedIndex
          ? {
              ...pokemon,
              nature: nature,
              hp: { ...pokemon.hp, final: statUpdates[0] },
              atk: { ...pokemon.atk, final: statUpdates[1] },
              def: { ...pokemon.def, final: statUpdates[2] },
              spa: { ...pokemon.spa, final: statUpdates[3] },
              spd: { ...pokemon.spd, final: statUpdates[4] },
              spe: { ...pokemon.spe, final: statUpdates[5] },
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
    const iv = type === "iv" ? value : team[selectedIndex][stat]["iv"];
    const ev = type === "ev" ? value : team[selectedIndex][stat]["ev"];
    const bonus = stat === "hp" ? team[selectedIndex]["level"] + 10 : 5;
    const version = props.version < 2 ? "old" : "new";
    const stage =
      type === "stage"
        ? stages[value - 1][version]
        : stages[team[selectedIndex][stat]["stage"] - 1][version];
    var nature = 1;
    if (natures[team[selectedIndex]["nature"] - 1]["info"][0] === stat)
      nature += 0.1;
    if (natures[team[selectedIndex]["nature"] - 1]["info"][1] === stat)
      nature -= 0.1;

    setTeam(
      team.map((pokemon, index) =>
        index === selectedIndex
          ? {
              ...pokemon,
              [stat]: {
                ...pokemon[stat],
                [type]: value,
                final: Math.floor(
                  (Math.floor(
                    ((2 * pokemon[stat]["base"] + iv + Math.floor(ev / 4)) *
                      pokemon["level"]) /
                      100
                  ) +
                    bonus) *
                    stage *
                    nature
                ),
              },
            }
          : pokemon
      )
    );
  };

  const finalStats = (updates) => {
    const level = updates.hasOwnProperty("level")
      ? updates["level"]
      : team[selectedIndex]["level"];
    const pokemonNature = updates.hasOwnProperty("nature")
      ? updates["nature"]
      : team[selectedIndex]["nature"];
    const version = props.version < 2 ? "old" : "new";
    const statUpdates = stats.map((stat) => {
      stat = stat.value;
      const iv = team[selectedIndex][stat]["iv"];
      const ev = team[selectedIndex][stat]["ev"];
      const bonus = stat === "hp" ? level + 10 : 5;
      var nature = 1;
      if (natures[pokemonNature - 1]["info"][0] === stat) nature += 0.1;
      if (natures[pokemonNature - 1]["info"][1] === stat) nature -= 0.1;
      return Math.floor(
        (Math.floor(
          ((2 * team[selectedIndex][stat]["base"] + iv + Math.floor(ev / 4)) *
            level) /
            100
        ) +
          bonus) *
          stages[team[selectedIndex][stat]["stage"] - 1][version] *
          nature
      );
    });
    return statUpdates;
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
