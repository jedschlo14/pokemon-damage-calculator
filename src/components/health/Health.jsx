/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { NumberEntry } from "components/inputs/numberEntry";
import { ProgressBar } from "./progressBar";
import { HealthEditWrapper, HealthWrapper } from "./Health.styles";

export const Health = ({ pokemon, changeStat }) => {
    return (
        <HealthWrapper>
            <HealthEditWrapper>
                <div>Current HP:</div>
                <NumberEntry
                    min={0}
                    max={pokemon.stats.hp.final}
                    value={pokemon.stats.hp.current}
                    onChange={(e) => changeStat(e, "hp", "current")}
                />
                <div>/ {pokemon.stats.hp.final}</div>
                <div>(</div>
                <NumberEntry
                    allowDecimal
                    min={0}
                    max={100}
                    value={pokemon.stats.hp.currentPct}
                    onChange={(e) => changeStat(e, "hp", "currentPct")}
                />
                <div>%)</div>
            </HealthEditWrapper>
            <ProgressBar percent={parseFloat(pokemon.stats.hp.currentPct)} />
        </HealthWrapper>
    );
};
