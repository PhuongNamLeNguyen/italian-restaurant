import "./Daily.scss";

import Button from "../../../../components/Button/Button";

import foods from "../../../../data/foods";

const foodsByPrice = foods.sort((a, b) => b.price - a.price);
const mostExpensiveFood = foodsByPrice[0];

const discount = 20;

const Daily = () => {
    return (
        <section className="daily">
            <div className="container">
                <h2 className="daily__heading">Our Daily Offers</h2>
                <div className="daily__offers">
                    <div className="offers__banner">
                        <div className="offers__img">
                            <img
                                src={mostExpensiveFood.image}
                                alt={mostExpensiveFood.name}
                            ></img>
                        </div>
                        <div className="content">
                            <h3>
                                Lunch Time <strong>{discount}%</strong> off
                            </h3>
                            <p>
                                We love food, lots of different and food, just
                                like you.
                            </p>
                            <Button
                                bgColor="#FB8F2C"
                                textColor="#fff"
                                width="145px"
                                height="42px"
                            >
                                Order Now
                            </Button>
                        </div>
                    </div>
                    <ul className="offers__list">
                        {foodsByPrice.slice(1, 4).map((food, index) => {
                            return (
                                <li className="food" key={index}>
                                    <div className="food__img">
                                        <img
                                            src={food.image}
                                            alt={food.name}
                                        ></img>
                                    </div>
                                    <div className="col">
                                        <h4 className="food__name">
                                            {food.name}
                                        </h4>
                                        <p className="food__desc">
                                            {food.description
                                                .split(" ")
                                                .slice(0, 8)
                                                .join(" ") + " ..."}
                                        </p>
                                    </div>
                                    <p className="food__price">
                                        <span>${food.price}</span>
                                        <span>
                                            $
                                            {(
                                                (food.price * 100) /
                                                (100 - discount)
                                            ).toFixed(2)}
                                        </span>
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Daily;
