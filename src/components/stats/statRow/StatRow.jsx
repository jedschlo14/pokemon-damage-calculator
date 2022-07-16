/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { CenteredFlexbox } from "assets/styles/Common.styles";
import { NumberEntry } from "components/inputs/numberEntry";
import { Autocomplete } from "components/inputs/autocomplete";
import { stages, natureValues } from "data";
import { Fragment } from "react";
import { StatRowTitle } from "./StatRow.styles";

export const StatRow = ({
    version,
    statLabel,
    statValue,
    pokemon,
    changeStat,
}) => {
    const displayStat = (stat) => {
        switch (stat) {
            case "final":
                const versionOldOrNew = version < 2 ? "old" : "new";
                if (pokemon.stats[statValue].final !== -1)
                    return (
                        pokemon.stats[statValue].final *
                        stages[pokemon.stats[statValue]["stage"] - 1][
                            versionOldOrNew
                        ]
                    );
                const level = pokemon["level"];
                if (level === 0) return 0;
                const iv = pokemon.stats[statValue]["iv"];
                const ev = pokemon.stats[statValue]["ev"];
                const bonus = statValue === "hp" ? level + 10 : 5;
                const nature = natureValues[pokemon.nature];
                const natureMultiplier =
                    1 +
                    (nature.increased === statValue ? 0.1 : 0) -
                    (nature.decreased === statValue ? 0.1 : 0);
                // const pokemonNature = pokemon["nature"];
                // const nature =
                //     1 +
                //     (natures[pokemonNature - 1].increased === statValue
                //         ? 0.1
                //         : 0) -
                //     (natures[pokemonNature - 1].decreased === statValue
                //         ? 0.1
                //         : 0);
                return Math.floor(
                    (Math.floor(
                        ((2 * pokemon.stats[statValue]["base"] +
                            iv +
                            Math.floor(ev / 4)) *
                            level) /
                            100
                    ) +
                        bonus) *
                        stages[pokemon.stats[statValue]["stage"] - 1][
                            versionOldOrNew
                        ] *
                        natureMultiplier
                );
            default:
                if (pokemon.stats[statValue][stat] === -1) return "";
                return pokemon.stats[statValue][stat];
        }
    };

    return (
        <Fragment>
            <StatRowTitle>{statLabel}</StatRowTitle>
            <CenteredFlexbox>{pokemon.stats[statValue].base}</CenteredFlexbox>
            <NumberEntry
                value={displayStat("iv")}
                min={0}
                max={31}
                onChange={(e) => changeStat(e, statValue, "iv")}
            />
            <NumberEntry
                value={displayStat("ev")}
                min={0}
                max={version < 2 ? 65535 : 255}
                onChange={(e) => changeStat(e, statValue, "ev")}
            />
            <NumberEntry
                value={displayStat("final")}
                min={0}
                max={2499}
                color={pokemon.stats[statValue].stage === 7 ? 0 : 1}
                onChange={(id) => changeStat(id, statValue, "final")}
            />
            {statValue === "hp" ? (
                <div></div>
            ) : (
                <CenteredFlexbox>
                    <Autocomplete
                        centered
                        id={pokemon.stats[statValue].stage}
                        data={stages}
                        onChange={(id) => changeStat(id, statValue, "stage")}
                    />
                </CenteredFlexbox>
            )}
        </Fragment>
    );
};
