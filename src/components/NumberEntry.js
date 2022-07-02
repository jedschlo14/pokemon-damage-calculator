export const NumberEntry = ({ value, min, max, onChange, color }) => {
    const handleChange = (newValue) => {
        if (newValue === "" || newValue < min) onChange(min);
        else if (newValue > max) newValue = onChange(max);
        else onChange(parseInt(newValue));
    };

    return (
        <div
            className={
                "flex justify-center items-center " +
                (value > 999 ? "text-xs " : "") +
                (color ? "text-special" : "")
            }
        >
            <input
                className="w-14 h-1 p-3 bg-white rounded-xl shadow-inner text-center font-semibold"
                value={value}
                placeholder="-"
                onChange={(e) =>
                    handleChange(e.target.value.replace(/\D/g, ""))
                }
            ></input>
        </div>
    );
};
