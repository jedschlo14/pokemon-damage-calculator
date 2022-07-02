import { AddPokemon } from "./AddPokemon";

export const Team = ({ team, selectedIndex, addPokemon, selectIndex }) => {
    return (
        <div className="flex gap-4 p-4 ">
            {team.map((pokemon, index) => {
                return (
                    <div
                        className={
                            "w-16 h-16 rounded-2xl p-1 flex justify-center items-center duration-200 ease-out " +
                            (selectedIndex === index
                                ? "bg-button-selected shadow-inner "
                                : "bg-white hover:bg-button-hover shadow-md cursor-pointer duration-200")
                        }
                        key={index}
                        onClick={() => selectIndex(index)}
                    >
                        <img
                            className="w-full h-full object-fit"
                            src={pokemon.sprite}
                            alt={pokemon.name}
                        />
                    </div>
                );
            })}
            {team.length < 6 ? (
                <div
                    className="w-16 h-16 bg-white rounded-2xl p-1 flex justify-center items-center shadow-xl hover:bg-button-hover cursor-pointer duration-200"
                    onClick={() => addPokemon(team.length)}
                >
                    <AddPokemon />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};
