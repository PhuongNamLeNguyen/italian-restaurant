import { useState } from "react";

import "./IntroMenu.scss";
import foods from "../../../../data/foods";

const categories = [...new Set(foods.map((food) => food.category))];

const IntroMenu = () => {
    const [isActive, setIsActive] = useState(categories[0]);
    const [visibleCategory, setVisibleCategory] = useState(categories[0]);

    const handleVisibleCategory = (category) => {
        setVisibleCategory(() => category);
        setIsActive(() => category);
    };

    return (
        <div className="intro-menu">
            <div className="container">
                <div className="intro-menu__text-box">
                    <p className="intro-menu__sub-heading">Our menu</p>
                    <h2 className="intro-menu__heading">
                        Choose & Taste What You Like{" "}
                    </h2>
                    <p className="intro-menu__desc">
                        A list of top Bangladeshi food including mains, drinks,
                        and deserts you must try while in Bangladesh, for an
                        authentic experience. Check now!
                    </p>
                </div>
                <ul className="intro-menu__categories">
                    {categories.map((category, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => handleVisibleCategory(category)}
                                className={
                                    isActive === category ? "active" : ""
                                }
                            >
                                {category}
                            </li>
                        );
                    })}
                </ul>
                <ul className="intro-menu__list">
                    {foods
                        .filter((food) => food.category === visibleCategory)
                        .sort((a, b) => b.price - a.price)
                        .slice(0, 4)
                        .map((food, index) => {
                            return (
                                <li key={index}>
                                    <div className="food__img">
                                        <img
                                            src={food.image}
                                            alt={food.name}
                                            loading="lazy"
                                        ></img>
                                    </div>
                                    <span className="food__name">
                                        {food.name}
                                    </span>
                                    <span className="food__price">
                                        ${food.price}
                                    </span>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default IntroMenu;
