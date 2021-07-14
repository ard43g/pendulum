import "./App.css";
import InputsContainer from "./components/inputsContainer/InputsContainer";
import PendulumContainer from "./components/pendulumContainer/PendulumContainer";

function App() {
    return (
        <div className="app">
            <PendulumContainer />
            <InputsContainer />
        </div>
    );
}

export default App;
