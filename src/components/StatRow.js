import NumberEntry from "./NumberEntry";
import Selector from "./Selector";
import stages from "../data/Stages";
import natures from "../data/Natures";

export default function Stats(props) {
  const other = (stat) => {
    if (props.pokemon[props.statValue][stat] === -1) return "";
    return props.pokemon[props.statValue][stat];
  };

  const final = () => {
    const version = props.version < 2 ? "old" : "new";
    if (props.pokemon[props.statValue].final !== -1)
      return (
        props.pokemon[props.statValue].final *
        stages[props.pokemon[props.statValue]["stage"] - 1][version]
      );
    const level = props.pokemon["level"];
    if (level === 0) return 0;
    const pokemonNature = props.pokemon["nature"];
    const iv = props.pokemon[props.statValue]["iv"];
    const ev = props.pokemon[props.statValue]["ev"];
    const bonus = props.statValue === "hp" ? level + 10 : 5;
    var nature = 1;
    if (natures[pokemonNature - 1]["info"][0] === props.statValue)
      nature += 0.1;
    if (natures[pokemonNature - 1]["info"][1] === props.statValue)
      nature -= 0.1;
    return Math.floor(
      (Math.floor(
        ((2 * props.pokemon[props.statValue]["base"] +
          iv +
          Math.floor(ev / 4)) *
          level) /
          100
      ) +
        bonus) *
        stages[props.pokemon[props.statValue]["stage"] - 1][version] *
        nature
    );
  };

  return (
    <>
      <div className="flex justify-center items-center font-extrabold">
        {props.statLabel}
      </div>
      <div className="flex justify-center items-center">
        {props.pokemon[props.statValue].base}
      </div>
      {props.version < 2 ? (
        <>
          <NumberEntry
            value={other("iv")}
            min={0}
            max={31}
            onChange={(e) => props.changeStat(e, props.statValue, "iv")}
          />
          <NumberEntry
            value={other("ev")}
            min={0}
            max={65535}
            onChange={(e) => props.changeStat(e, props.statValue, "ev")}
          />
        </>
      ) : (
        <>
          <NumberEntry
            value={other("iv")}
            min={0}
            max={31}
            onChange={(e) => props.changeStat(e, props.statValue, "iv")}
          />
          <NumberEntry
            value={other("ev")}
            min={0}
            max={255}
            onChange={(e) => props.changeStat(e, props.statValue, "ev")}
          />
        </>
      )}
      <NumberEntry
        value={final()}
        min={0}
        max={2499}
        color={props.pokemon[props.statValue].stage === 7 ? false : true}
        large={final() > 999 ? true : false}
        onChange={(id) => props.changeStat(id, props.statValue, "final")}
      />
      {props.statValue === "hp" ? (
        <div></div>
      ) : (
        <Selector
          id={props.pokemon[props.statValue].stage}
          centered
          data={stages}
          onChange={(id) => props.changeStat(id, props.statValue, "stage")}
        />
      )}
    </>
  );
}
