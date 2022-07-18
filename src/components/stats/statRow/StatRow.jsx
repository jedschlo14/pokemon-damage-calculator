/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { CenteredFlexbox } from "assets/styles/Common.styles";
import { NumberEntry } from "components/inputs/numberEntry";
import { Autocomplete } from "components/inputs/autocomplete";
import { stages, natureValues } from "data";
import { StatRowTitle } from "./StatRow.styles";
import { Fragment } from "react";

export const StatRow = ({
    generation,
    statLabel,
    stat,
    pokemon,
    changeStat,
}) => {
    const displayStat = (type) => {
        if (type === "final") {
            const generationOldOrNew = generation <= 2 ? "old" : "new";
            const nature = natureValues[pokemon.nature];
            const natureMultiplier =
                1 +
                (nature.increased === stat ? 0.1 : 0) -
                (nature.decreased === stat ? 0.1 : 0);
            return Math.floor(
                pokemon.stats[stat].final *
                    stages[pokemon.stats[stat].stage - 1][generationOldOrNew] *
                    natureMultiplier
            );
        }
        return pokemon.stats[stat].calculateFinal
            ? pokemon.stats[stat][type]
            : "";
    };

    return (
        <Fragment>
            <StatRowTitle>{statLabel}:</StatRowTitle>
            <NumberEntry
                value={displayStat("base")}
                min={0}
                max={255}
                onChange={(e) => changeStat(e, stat, "base")}
            />
            <NumberEntry
                value={displayStat("iv")}
                min={0}
                max={31}
                onChange={(e) => changeStat(e, stat, "iv")}
            />
            <NumberEntry
                value={displayStat("ev")}
                min={0}
                max={generation < 2 ? 65535 : 255}
                onChange={(e) => changeStat(e, stat, "ev")}
            />
            <NumberEntry
                value={displayStat("final")}
                min={0}
                max={2499}
                color={pokemon.stats[stat].stage === 7 ? 0 : 1}
                onChange={(id) => changeStat(id, stat, "final")}
            />
            {stat === "hp" ? (
                <div></div>
            ) : (
                <CenteredFlexbox>
                    <Autocomplete
                        centered
                        width="4rem"
                        id={pokemon.stats[stat].stage}
                        data={stages}
                        onChange={(id) => changeStat(id, stat, "stage")}
                    />
                </CenteredFlexbox>
            )}
        </Fragment>
    );
};
