import { useEffect } from "react";
import { connect } from "react-redux";
import { changeAnimateStart, changeMode } from "../../reducers/mainReducer";
import { getAmplitudeValue, getBobValue, getIsAnimated, getMode, getRodValue } from "../../selectors/mainSelector";
import Button from "../common/button/Button";
import Pendulum from "../pendulum/Pendulum";

const PendulumContainer = ({
    rodValue,
    bobValue,
    amplitudeValue,
    isAnimated,
    changeAnimateStart,
    mode,
    changeMode,
}) => {
    const amplitude = amplitudeValue <= 90 ? amplitudeValue : 90;
    const step = amplitude / 2 + -bobValue / 8;
    const timeAnim = (rodValue * 2 + bobValue * 2 + amplitude * 2) / 100;

    document.documentElement.style.setProperty("--bobBottom", (bobValue / 4) * -1 + "px");
    document.documentElement.style.setProperty("--bobSize", bobValue / 4 + "px");
    document.documentElement.style.setProperty("--startPosition", amplitude + "deg");
    document.documentElement.style.setProperty("--amplitude", amplitudeValue + "px");

    useEffect(() => {
        let interval;
        if (mode === "space" && isAnimated) {
            interval = setInterval(() => {
                let randomValue = (Math.random() * 100).toFixed(0);
                setTimeAnim(timeAnim, 2);
                setHeight(randomValue);
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isAnimated]);

    function setTimeAnim(time, rate = 1) {
        return document.documentElement.style.setProperty("--time", time * rate + "s");
    }

    function setHeight(value) {
        return document.documentElement.style.setProperty("--height", value + "px");
    }

    function setCenterPosition(amplitude, step, rate = -1) {
        document.documentElement.style.setProperty("--centerPosition", amplitude * rate + step + "deg");
    }

    function setBackground(bg) {
        return document.documentElement.style.setProperty("--background", bg);
    }

    setTimeAnim(timeAnim);
    setHeight(rodValue);

    if (mode === "earth") {
        setCenterPosition(amplitude, step);
        setBackground(
            "linear-gradient(90deg, rgba(120,213,91,1) 0%, rgba(105,192,200,1) 44%, rgba(180,204,67,1) 61%, rgba(62,148,216,1) 83%, rgba(240,214,59,1) 98%)"
        );
    } else {
        setCenterPosition(amplitude, step, 1);
        setBackground("linear-gradient(#e66465, #9198e5)");
    }

    const changeAnimate = () => {
        changeAnimateStart(true, timeAnim, mode);
    };

    const editMode = mode === "earth" ? "space" : "earth";
    const setMode = () => {
        changeMode(editMode);
    };

    return (
        <>
            <Pendulum start={isAnimated} mode={mode} />
            <Button onClick={changeAnimate} disabled={isAnimated} value={"Start"} />
            <Button onClick={setMode} disabled={isAnimated} value={editMode} />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        rodValue: getRodValue(state),
        bobValue: getBobValue(state),
        amplitudeValue: getAmplitudeValue(state),
        isAnimated: getIsAnimated(state),
        mode: getMode(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeAnimateStart: (boolean, time, mode) => dispatch(changeAnimateStart(boolean, time, mode)),
        changeMode: (mode) => dispatch(changeMode(mode)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PendulumContainer);
