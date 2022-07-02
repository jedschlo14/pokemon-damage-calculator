import { Selector } from "./Selector";

export const Moves = ({ pokemon, selectMove }) => {
    return (
        <>
            <div className="col-span-2"></div>
            <div className="col-span-2 flex justify-center items-center font-extrabold">
                Moves:
            </div>
            <div className="col-span-2"></div>
            {[...Array(4).keys()].map((_, index) => {
                return (
                    <div className="col-span-3 capitalize" key={index}>
                        <Selector
                            id={pokemon["selectedMoves"][index]}
                            data={pokemon["moves"]}
                            onChange={(id) => selectMove(index, id)}
                        />
                    </div>
                );
            })}
        </>
    );
};
