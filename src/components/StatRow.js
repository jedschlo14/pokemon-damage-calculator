import NumberEntry from "./NumberEntry";
import Selector from "./Selector";
import stages from "../data/Stages";

export default function Stats(props) {
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
            value={props.pokemon[props.statValue].iv}
            min={0}
            max={31}
            onChange={(e) => props.changeStat(e, props.statValue, "iv")}
          />
          <NumberEntry
            value={props.pokemon[props.statValue].ev}
            min={0}
            max={65535}
            onChange={(e) => props.changeStat(e, props.statValue, "ev")}
          />
        </>
      ) : (
        <>
          <NumberEntry
            value={props.pokemon[props.statValue].iv}
            min={0}
            max={31}
            onChange={(e) => props.changeStat(e, props.statValue, "iv")}
          />
          <NumberEntry
            value={props.pokemon[props.statValue].ev}
            min={0}
            max={255}
            onChange={(e) => props.changeStat(e, props.statValue, "ev")}
          />
        </>
      )}
      <NumberEntry
        value={props.pokemon[props.statValue].final}
        min={0}
        max={1000}
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
