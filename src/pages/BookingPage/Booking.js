import "./Booking.scss";
import BookingForm from "./BookingForm";
import BookingLocation from "./BookingLocation";

const Booking = () => {
    return (
        <div className="booking">
            <div className="booking__hero">
                <div className="booking__bg-img">
                    <img src="/img/foods/margherita-pizza.jpeg" alt=""></img>
                </div>
                <div className="container">
                    <h2 className="booking__heading">Online Reservation</h2>
                    <p className="booking__desc">
                        Book your table for lunch or dinner.
                    </p>
                    <BookingForm></BookingForm>
                </div>
            </div>
            <BookingLocation></BookingLocation>
        </div>
    );
};

export default Booking;
