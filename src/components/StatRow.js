import { NumberEntry, Selector } from "components";
import { stages, natures } from "data";

export const StatRow = ({
    version,
    statLabel,
    statValue,
    pokemon,
    changeStat,
}) => {
    const other = (stat) => {
        if (pokemon.stats[statValue][stat] === -1) return "";
        return pokemon.stats[statValue][stat];
    };

    const final = () => {
        const versionOldOrNew = version < 2 ? "old" : "new";
        if (pokemon.stats[statValue].final !== -1)
            return (
                pokemon.stats[statValue].final *
                stages[pokemon.stats[statValue]["stage"] - 1][versionOldOrNew]
            );
        const level = pokemon["level"];
        if (level === 0) return 0;
        const pokemonNature = pokemon["nature"];
        const iv = pokemon.stats[statValue]["iv"];
        const ev = pokemon.stats[statValue]["ev"];
        const bonus = statValue === "hp" ? level + 10 : 5;
        var nature = 1;
        if (natures[pokemonNature - 1]["info"][0] === statValue) nature += 0.1;
        if (natures[pokemonNature - 1]["info"][1] === statValue) nature -= 0.1;
        return Math.floor(
            (Math.floor(
                ((2 * pokemon.stats[statValue]["base"] +
                    iv +
                    Math.floor(ev / 4)) *
                    level) /
                    100
            ) +
                bonus) *
                stages[pokemon.stats[statValue]["stage"] - 1][versionOldOrNew] *
                nature
        );
    };

    return (
        <>
            <div className="flex justify-center items-center font-extrabold">
                {statLabel}
            </div>
            <div className="flex justify-center items-center">
                {pokemon.stats[statValue].base}
            </div>
            {version < 2 ? (
                <>
                    <NumberEntry
                        value={other("iv")}
                        min={0}
                        max={31}
                        onChange={(e) => changeStat(e, statValue, "iv")}
                    />
                    <NumberEntry
                        value={other("ev")}
                        min={0}
                        max={65535}
                        onChange={(e) => changeStat(e, statValue, "ev")}
                    />
                </>
            ) : (
                <>
                    <NumberEntry
                        value={other("iv")}
                        min={0}
                        max={31}
                        onChange={(e) => changeStat(e, statValue, "iv")}
                    />
                    <NumberEntry
                        value={other("ev")}
                        min={0}
                        max={255}
                        onChange={(e) => changeStat(e, statValue, "ev")}
                    />
                </>
            )}
            <NumberEntry
                value={final()}
                min={0}
                max={2499}
                color={pokemon.stats[statValue].stage === 7 ? false : true}
                onChange={(id) => changeStat(id, statValue, "final")}
            />
            {statValue === "hp" ? (
                <div></div>
            ) : (
                <Selector
                    id={pokemon.stats[statValue].stage}
                    centered
                    data={stages}
                    onChange={(id) => changeStat(id, statValue, "stage")}
                />
            )}
        </>
    );
};
