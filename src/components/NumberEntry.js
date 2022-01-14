export default function NumberEntry(props) {
  const onChange = (value) => {
    if (value < props.min) value = props.min;
    if (value > props.max) value = props.max;
    value = parseInt(value);
    props.onChange(value);
  };

  return (
    <div className="flex justify-center items-center">
      <input
        className="w-16 h-4 bg-white rounded-xl shadow-inner text-center font-semibold p-4"
        value={props.value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
      ></input>
    </div>
  );
}
