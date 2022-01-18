export default function NumberEntry(props) {
  const onChange = (value) => {
    if (value === "") value = props.min;
    if (value < props.min) value = props.min;
    if (value > props.max) value = props.max;
    value = parseInt(value);
    props.onChange(value);
  };

  return (
    <div
      className={
        "flex justify-center items-center " +
        (props.value > 999 ? "text-xs " : "") +
        (props.color ? "text-special" : "")
      }
    >
      <input
        className="w-14 h-1 p-3 bg-white rounded-xl shadow-inner text-center font-semibold"
        value={props.value}
        placeholder="-"
        onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
      ></input>
    </div>
  );
}
