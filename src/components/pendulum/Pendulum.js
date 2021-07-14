import Loader from "../common/loader/Loader";
import ImageClock from "../imageClock/ImageClock";
import "./Pendulum.css";
const Pendulum = ({ start, mode }) => {
    return (
        <section className="pendulum__wrapper">
            <div className="pendulum__block">
                <div className="pendulum__image">
                    <ImageClock height={300} width={300} />
                </div>
                <div className="pendulum__pivot"></div>
                <div className={`pendulum__rod ${start ? mode : ""}`}>
                    <div className="pendulum__bob"></div>
                </div>
                <div className="pendulum__loader">{start && <Loader />}</div>
            </div>
        </section>
    );
};

export default Pendulum;
