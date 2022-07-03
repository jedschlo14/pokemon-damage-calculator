export const ProgressBar = ({ pokemon }) => {
    const final =
        pokemon.stats.hp.final === -1
            ? Math.floor(
                  ((2 * pokemon.stats.hp.base +
                      pokemon.stats.hp.iv +
                      Math.floor(pokemon.stats.hp.ev / 4)) *
                      pokemon.level) /
                      100
              ) +
              pokemon.level +
              10
            : pokemon.stats.hp.final;

    const current =
        pokemon.stats.hp.current === -1 ? final : pokemon.stats.hp.current;
    const pct = Math.floor((current / final) * 100);

    return (
        <div className="w-full bg-progress-empty h-2 rounded">
            <div
                className={
                    "w-" + String(pct) + "% bg-progress-fill h-2 rounded"
                }
            ></div>
        </div>
    );
};
