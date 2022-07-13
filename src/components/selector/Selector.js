import Select from "react-select";

// const customStyles = {
//   // menu: (provided, state) => ({
//   // ...provided,
//   // width: state.selectProps.width,
//   // borderBottom: "1px dotted pink",
//   // color: state.selectProps.menuColor,
//   // padding: 20,
//   // }),
//   // control: (_, { selectProps: { width } }) => ({
//   //   width: width,
//   // }),
//   // singleValue: (provided, state) => {
//   //   const opacity = state.isDisabled ? 0.5 : 1;
//   //   const transition = "opacity 300ms";
//   //   return { ...provided, opacity, transition };
//   // },
//   control: (styles) => ({
//     ...styles,
//     height: 30,
//     // backgroundColor: "#234567",
//     // borderRadius: "20%",
//   }),
// };

const styles = {
    control: (base) => ({
        ...base,
        minHeight: 32,
    }),
    dropdownIndicator: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
    }),
};

const customTheme = (theme) => {
    return {
        ...theme,
        colors: {
            ...theme.colors,
            primary25: "#7dd3fc",
            primary: "#0284c7",
        },
    };
};

export const Selector = ({ id, data, onChange, centered }) => {
    return (
        <div className={centered ? "text-center text-sm" : ""}>
            <Select
                components={{
                    IndicatorSeparator: () => null,
                }}
                options={data}
                styles={styles}
                theme={customTheme}
                menuPlacement="auto"
                value={data[id - 1]}
                onChange={(e) => onChange(e.value)}
            />
        </div>
    );
};
