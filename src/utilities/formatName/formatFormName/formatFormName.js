import { formatPokemonName } from "../formatPokemonName";

export const formatFormName = (speciesName, formName) => {
    return speciesName === formName
        ? formatPokemonName(speciesName)
        : [
              formatPokemonName(speciesName),
              formName
                  .split(speciesName)[1]
                  .split("-")
                  .slice(1)
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" "),
          ].join("-");
};
