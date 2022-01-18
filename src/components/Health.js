import NumberEntry from "./NumberEntry";
import ProgressBar from "./ProgressBar";

export default function Health(props) {
  const final =
    props.pokemon.stats.hp.final === -1
      ? Math.floor(
          ((2 * props.pokemon.stats.hp.base +
            props.pokemon.stats.hp.iv +
            Math.floor(props.pokemon.stats.hp.ev / 4)) *
            props.pokemon.level) /
            100
        ) +
        props.pokemon.level +
        10
      : props.pokemon.stats.hp.final;

  const current =
    props.pokemon.stats.hp.current === -1
      ? final
      : props.pokemon.stats.hp.current;

  return (
    <>
      <div className="col-span-6 flex justify-center items-center gap-8">
        <div className="flex justify-center items-center gap-1">
          <div>Current HP:</div>
          <NumberEntry
            min={0}
            max={final}
            value={current}
            onChange={(e) => props.changeStat(e, "hp", "current")}
          />
          <div>/ {final}</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div>(</div>
          <NumberEntry
            min={0}
            max={100}
            value={props.pokemon.stats.hp.currentPct}
            onChange={(e) => props.changeStat(e, "hp", "currentPct")}
          />
          <div>%)</div>
        </div>
      </div>
      <div className="col-span-6">
        <ProgressBar pokemon={props.pokemon} />
      </div>
    </>
  );
}
