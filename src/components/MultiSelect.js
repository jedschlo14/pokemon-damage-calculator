import Select from "react-select";
// import { useState } from "react";

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#7dd3fc",
      primary: "#0284c7",
    },
  };
}

export default function MultiSelect(props) {
  // const [value, setValue] = useState([]);

  // const handleChange = (selectedOption) => {
  //   setValue(selectedOption);
  // };

  return (
    <div className="rounded-x">
      <Select
        options={props.data}
        theme={customTheme}
        defaultValue={props.data[0]}
        // value={value}
        isMulti
        // onChange={(e) => handleChange(e.value)}
      />
    </div>
  );
}
