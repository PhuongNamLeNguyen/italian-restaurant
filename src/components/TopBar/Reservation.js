import { Link } from "react-router-dom";

const Reservation = ({ linkActive, onRouteBooking }) => {
    return (
        <div
            className={
                linkActive === -1
                    ? "top-bar__reservation active"
                    : "top-bar__reservation"
            }
        >
            <Link to="/booking" onClick={onRouteBooking}>
                Table Reservation
            </Link>
        </div>
    );
};

export default Reservation;
