export default function Types(props) {
  return (
    <>
      <div className="flex justify-center items-center font-extrabold">
        {props.pokemon.types.length > 1 ? (
          <div>Types: </div>
        ) : (
          <div>Type: </div>
        )}
      </div>
      <div className="flex gap-2 col-span-3">
        {props.pokemon.types.map((type, index) => {
          return (
            <div
              className={
                "p-2 h-8 w-20 rounded-lg flex justify-center items-center capitalize text-sm text-white shadow-md cursor-default bg-type-" +
                type
              }
              key={index}
            >
              {type}
            </div>
          );
        })}
      </div>
    </>
  );
}
