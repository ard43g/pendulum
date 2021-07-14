import { connect } from "react-redux";
import { changeInputRange } from "../../reducers/mainReducer";
import { getInputs } from "../../selectors/mainSelector";
import InputRange from "../common/inputRange/InputRange";
const InputsContainer = ({ inputs, changeInputRange }) => {
    return inputs.map((i) => {
        return <InputRange key={i.name} name={i.name} value={i.value} onChange={changeInputRange} />;
    });
};

const mapStateToProps = (state) => {
    return {
        inputs: getInputs(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputRange: (value, name) => dispatch(changeInputRange(value, name)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputsContainer);
