import general from "../../data/general";

const restaurants = general.restaurants;

const BookingLocation = () => {
    return (
        <section className="booking__location">
            <div className="container">
                <ul className="list">
                    {restaurants.slice(0, 3).map((restaurant, index) => {
                        return (
                            <li className="restaurant" key={index}>
                                <h3 className="restaurant__name">
                                    {restaurant.name}
                                </h3>
                                <p>{restaurant.address}</p>
                                <p>{restaurant.phone}</p>
                                <p>{restaurant.hours}</p>
                                <button>Get Directions</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default BookingLocation;
