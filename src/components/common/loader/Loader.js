import "./Loader.css";
const Loader = () => {
    return (
        <div className="loader">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="50px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="32"
                    strokeWidth="8"
                    stroke="#0075ff"
                    strokeDasharray="50.26548245743669 50.26548245743669"
                    fill="none"
                    strokeLinecap="round"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        dur="1s"
                        repeatCount="indefinite"
                        keyTimes="0;1"
                        values="0 50 50;360 50 50"
                    ></animateTransform>
                </circle>
                <circle
                    cx="50"
                    cy="50"
                    r="23"
                    strokeWidth="8"
                    stroke="#3f618a"
                    strokeDasharray="36.12831551628262 36.12831551628262"
                    strokeDashoffset="36.12831551628262"
                    fill="none"
                    strokeLinecap="round"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        dur="1s"
                        repeatCount="indefinite"
                        keyTimes="0;1"
                        values="0 50 50;-360 50 50"
                    ></animateTransform>
                </circle>
            </svg>
        </div>
    );
};

export default Loader;
