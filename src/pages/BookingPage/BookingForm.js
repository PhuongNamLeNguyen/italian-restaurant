import { useState } from "react";

const BookingForm = () => {
    const today = new Date().toISOString().split("T")[0];
    const [time, setTime] = useState("12:00");
    return (
        <form className="booking__form">
            <div className="form__group">
                <input type="text" placeholder="Your name"></input>
                <img src="/icon/i-user.svg" alt=""></img>
            </div>
            <div className="form__group">
                <input
                    type="tel"
                    placeholder="Your phone number"
                    maxLength="15"
                    inputMode="numeric"
                ></input>
                <img src="/icon/i-phone.svg" alt=""></img>
            </div>
            <div className="form__group">
                <input type="email" placeholder="Your mail address"></input>
                <img src="/icon/i-mail.svg" alt=""></img>
            </div>
            <div className="form__group">
                <select>
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3-4 People</option>
                    <option>{`>5 People`}</option>
                </select>
                <img
                    className="icon-absolute"
                    src="/icon/i-arrow-down.svg"
                    alt=""
                ></img>
            </div>
            <div className="form__group">
                <input
                    type="date"
                    placeholder="Your name"
                    defaultValue={today}
                ></input>
                <img
                    className="icon-absolute"
                    src="/icon/i-calendar.svg"
                    alt=""
                ></img>
            </div>
            <div className="form__group">
                <input
                    type="time"
                    placeholder="Your name"
                    defaultValue={time}
                    onChange={(e) => setTime(e.target.value)}
                ></input>
                <img
                    className="icon-absolute"
                    src="/icon/i-clock.svg"
                    alt=""
                ></img>
            </div>
            <div className="form__group">
                <button onClick={(e) => e.preventDefault()}>
                    Rerserve Your Table Now
                </button>
            </div>
        </form>
    );
};

export default BookingForm;
