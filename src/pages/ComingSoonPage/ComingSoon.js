import "./ComingSoon.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useState } from "react";

const targetTime = new Date("01-01-2025");

const ComingSoon = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const gapTime = targetTime - currentTime;

    setTimeout(() => {
        setCurrentTime(new Date());
    }, 1000);

    const daysLeft = gapTime / 1000 / 60 / 60 / 24;
    const hoursLeft = (gapTime / 1000 / 60 / 60) % 24;
    const minutesLeft = (gapTime / 1000 / 60) % 60;
    const secondsLeft = (gapTime / 1000) % 60;

    const timesLeft = [
        { name: "Days", left: daysLeft },
        { name: "Hours", left: hoursLeft },
        { name: "Minutes", left: minutesLeft },
        { name: "Seconds", left: secondsLeft },
    ];

    return (
        <section className="coming-soon">
            <div className="container">
                <div className="coming-soon__content">
                    <h2 className="coming-soon__heading">
                        Subscribe Newsletter & get letest news
                    </h2>
                    <p className="coming-soon__desc">
                        Our being able to do what we like best, every pleasure
                        is to be welcomed and every pain avoided certain.
                    </p>
                    <ul className="coming-soon__count-down">
                        {timesLeft.map((value, index) => {
                            return (
                                <li key={index}>
                                    <span>
                                        <strong>
                                            {Math.floor(value.left)}
                                        </strong>
                                        {value.name}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                    <Button bgColor="#FB8F2C" height="44px">
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
                <div className="coming-soon__img-box">
                    <img src="/img/foods/bbq-chicken-pizza.jpg" alt=""></img>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
