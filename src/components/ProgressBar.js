export default function ProgressBar(props) {
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
  const pct = Math.floor((current / final) * 100);

  return (
    <div className="w-full bg-progress-empty h-2 rounded">
      <div
        className={"w-" + String(pct) + "% bg-progress-fill h-2 rounded"}
      ></div>
    </div>
  );
}
