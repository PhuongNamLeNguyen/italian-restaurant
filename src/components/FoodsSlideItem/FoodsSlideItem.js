import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";
import "./FoodsSlideItem.scss";

const FoodsSlideItem = ({ food }) => {
    return (
        <li className="foods-slide__item">
            <div className="food__img">
                <img loading="lazy" src={food.image} alt={food.name}></img>
            </div>
            <div className="row">
                <span className="food__name">{food.name}</span>
                <span className="food__price">${food.price}</span>
            </div>
            <p className="food__desc">{food.description}</p>
            <div className="row">
                <Link
                    className="food__link"
                    to={`/menu/${food.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                    Order now
                </Link>
                <RatingStars starSize={26} rating={food.rating} />
            </div>
        </li>
    );
};

export default FoodsSlideItem;
