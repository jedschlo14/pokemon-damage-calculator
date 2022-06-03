import Selector from "./Selector";

export default function Moves(props) {
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
                            id={props.pokemon["selectedMoves"][index]}
                            data={props.pokemon["moves"]}
                            onChange={(id) => props.selectMove(index, id)}
                        />
                    </div>
                );
            })}
        </>
    );
}
