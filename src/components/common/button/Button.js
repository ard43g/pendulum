import "./Button.css";

const Button = ({ onClick, disabled, value }) => {
    let label = value;
    if (label === "space" || label === "earth") {
        label = `to ${value}`;
    }
    return (
        <button className="button" onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
