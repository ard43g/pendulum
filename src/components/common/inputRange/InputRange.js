import "./InputRange.css";

const InputRange = ({ name, value, onChange }) => {
    const labelName = `${name[0].toUpperCase()}${name.slice(1)}`;
    const changeValue = (e) => {
        onChange(e.target.value, e.target.name);
    };
    return (
        <div className="range__route">
            <input type="range" id={name} name={name} min="5" max="100" value={value} step="1" onChange={changeValue} />
            <label htmlFor={name}>{labelName}</label>
            <div className="range__count">{value}</div>
        </div>
    );
};

export default InputRange;
