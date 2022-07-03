/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { NumberEntry } from "components/numberEntry";
import { ProgressBar } from "./progressBar";
import { HealthEditWrapper, HealthWrapper } from "./Health.styles";

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
        <HealthWrapper>
            <HealthEditWrapper>
                <div>Current HP:</div>
                <NumberEntry
                    min={0}
                    max={final}
                    value={current}
                    onChange={(e) => changeStat(e, "hp", "current")}
                />
                <div>/ {final}</div>
                <div>(</div>
                <NumberEntry
                    min={0}
                    max={100}
                    value={pokemon.stats.hp.currentPct}
                    onChange={(e) => changeStat(e, "hp", "currentPct")}
                />
                <div>%)</div>
            </HealthEditWrapper>
            <ProgressBar percent={pokemon.stats.hp.currentPct} />
        </HealthWrapper>
    );
};
