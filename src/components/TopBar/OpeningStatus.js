import { useState } from "react";

const OpeningStatus = () => {
    const [currentHour, setCurrentHour] = useState(new Date().getHours());
    const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());

    setTimeout(() => {
        setCurrentHour(new Date().getHours());
        setCurrentMinute(new Date().getMinutes());
    }, 1000);

    return (
        <div className="top-bar__opening-status">
            <p>
                {currentHour > 11 && currentHour < 23
                    ? `(${currentHour}:${currentMinute}) - We're open`
                    : `(${currentHour}:${currentMinute}) - We're close`}
            </p>
        </div>
    );
};

export default OpeningStatus;
