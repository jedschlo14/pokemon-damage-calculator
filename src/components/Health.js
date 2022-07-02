import { NumberEntry, ProgressBar } from "components";

export const Health = ({ pokemon, changeStat }) => {
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

    return (
        <>
            <div className="col-span-6 flex justify-center items-center gap-8">
                <div className="flex justify-center items-center gap-1">
                    <div>Current HP:</div>
                    <NumberEntry
                        min={0}
                        max={final}
                        value={current}
                        onChange={(e) => changeStat(e, "hp", "current")}
                    />
                    <div>/ {final}</div>
                </div>
                <div className="flex justify-center items-center gap-1">
                    <div>(</div>
                    <NumberEntry
                        min={0}
                        max={100}
                        value={pokemon.stats.hp.currentPct}
                        onChange={(e) => changeStat(e, "hp", "currentPct")}
                    />
                    <div>%)</div>
                </div>
            </div>
            <div className="col-span-6">
                <ProgressBar pokemon={pokemon} />
            </div>
        </>
    );
};
