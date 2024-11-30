import "./Reserve.scss";
import { useState } from "react";
import Button from "../../../../components/Button/Button";
import foods from "../../../../data/foods";

const foodsLength = foods.length;
const randomNumber = Math.round(Math.random() * foodsLength + 1);

const months = [
    "Jan", //31 = 0
    "Feb", //29
    "Mar", //31 = 2
    "Apr",
    "May", //31 = 4
    "Jun",
    "Jul", //31 = 6
    "Aug", //31 = 7
    "Sep",
    "Oct", //31 = 9
    "Nov",
    "Dec", //31 = 11
];

const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();

const Reserve = () => {
    const [date, setDate] = useState(currentDate);
    const [monthIndex, setMonthIndex] = useState(currentMonth);

    const handleDecreaseDate = () => {
        if (monthIndex === currentMonth && date > currentDate)
            setDate(() => date - 1);
        if (monthIndex !== currentMonth && date > 1) setDate(() => date - 1);
    };
    const handleIncreaseDate = () => {
        switch (monthIndex) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                if (date < 31) setDate(() => date + 1);
                break;
            case 3:
            case 5:
            case 8:
            case 10:
                if (date < 30) setDate(() => date + 1);
                break;
            default:
                break;
        }
    };

    const handleDecreaseMonthIndex = () => {
        if (monthIndex === currentMonth + 1) setDate(() => currentDate);
        if (monthIndex > currentMonth) setMonthIndex(() => monthIndex - 1);
    };
    const handleIncreaseMonthIndex = () => {
        if (monthIndex < 11) setMonthIndex(() => monthIndex + 1);
        setDate(() => 1);
    };

    const [guests, setGuests] = useState(1);
    const handleDecreaseGuests = () => {
        if (guests > 1) setGuests(guests - 1);
    };
    const handleIncreaseGuests = () => {
        if (guests < 10) setGuests(guests + 1);
    };

    return (
        <section className="reserve">
            <div className="container">
                <div className="reserve__text-box">
                    <h3 className="reserve__heading">Reserve ! Book Now</h3>
                    <form className="form">
                        <div className="form__group">
                            <label className="form__label">Set Date</label>
                            <input
                                className="form__input"
                                type="text"
                                value={date}
                                disabled
                            ></input>
                            <div className="form__arrow">
                                <img
                                    onClick={handleDecreaseDate}
                                    src="./icon/i-decrease.svg"
                                    alt=""
                                ></img>
                                <img
                                    onClick={handleIncreaseDate}
                                    src="./icon/i-increase.svg"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                        <div className="form__group">
                            <label className="form__label">Set Month</label>
                            <input
                                className="form__input"
                                type="text"
                                value={months[monthIndex]}
                                disabled
                            ></input>
                            <div className="form__arrow">
                                <img
                                    onClick={handleDecreaseMonthIndex}
                                    src="./icon/i-decrease.svg"
                                    alt=""
                                ></img>
                                <img
                                    onClick={handleIncreaseMonthIndex}
                                    src="./icon/i-increase.svg"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                        <div className="form__group">
                            <label className="form__label">Set Guests</label>
                            <input
                                className="form__input"
                                type="text"
                                value={guests}
                                disabled
                            ></input>
                            <div className="form__arrow">
                                <img
                                    onClick={handleDecreaseGuests}
                                    src="./icon/i-decrease.svg"
                                    alt=""
                                ></img>
                                <img
                                    onClick={handleIncreaseGuests}
                                    src="./icon/i-increase.svg"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                    </form>
                    <Button
                        className="form__btn"
                        bgColor="#111114"
                        textColor="#fff"
                        width="310px"
                        height="56px"
                    >
                        Book now
                    </Button>
                </div>
                <div className="reserve__img-box">
                    <img
                        loading="lazy"
                        src={foods[randomNumber].image}
                        alt=""
                    ></img>
                </div>
            </div>
        </section>
    );
};

export default Reserve;
