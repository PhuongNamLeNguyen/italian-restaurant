import "./FoodInfo.scss";
import { useState } from "react";
import RatingStars from "../../../../components/RatingStars/RatingStars";
import Button from "../../../../components/Button/Button";

const FoodInfo = ({ food }) => {
    const [numberCount, setNumberCount] = useState(1);

    const handleDecreaseCount = () => {
        if (numberCount > 1) setNumberCount(numberCount - 1);
    };

    const handleIncreaseCount = () => {
        if (numberCount < 20) setNumberCount(numberCount + 1);
    };

    return (
        <section className="food-info">
            <div className="container">
                <div className="food-info__img">
                    <img src={food.image} alt={food.name} />
                </div>
                <div className="food-info__details">
                    <h2 className="food-info__heading">{food.name}</h2>
                    <RatingStars starSize={20} rating={food.rating} />
                    <span className="food-info__price">${food.price}</span>
                    <p className="food-info__desc">{food.description}</p>
                    <form className="food-info__form">
                        <div className="number-count">
                            <span onClick={handleDecreaseCount}>-</span>
                            <span>{numberCount}</span>
                            <span onClick={handleIncreaseCount}>+</span>
                        </div>
                        <Button bgColor="#FB8F2C" height="42px" padding="30px">
                            ADD TO CART
                        </Button>
                    </form>
                    <ul className="food-info__list">
                        <li>
                            <span>
                                CODE: <strong>{food.code}</strong>
                            </span>
                        </li>
                        <li>
                            <span>
                                CATEGORY: <strong>{food.category}</strong>
                            </span>
                        </li>
                        <li>
                            <span>
                                TAGS:{" "}
                                {food.tags.map((tag, index) => (
                                    <strong key={index}>
                                        {tag}
                                        {index < food.tags.length - 1
                                            ? ", "
                                            : ""}
                                    </strong>
                                ))}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FoodInfo;
