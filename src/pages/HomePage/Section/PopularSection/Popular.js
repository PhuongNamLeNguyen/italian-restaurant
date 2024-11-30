import "./Popular.scss";
import FoodsSlide from "../../../../components/FoodsSlide/FoodsSlide";
import foods from "../../../../data/foods";

import { Link } from "react-router-dom";
import FoodsSlideItem from "../../../../components/FoodsSlideItem/FoodsSlideItem";

const top20MostRating = foods.sort((a, b) => b.rating - a.rating).slice(0, 20);

const Popular = () => {
    return (
        <section className="popular">
            <div className="container">
                <h2 className="popular__heading">Most popular food</h2>
                <p className="popular__desc">
                    A list of most popular Bangladeshi food including mains,
                    drinks, and deserts you must try while in Bangladesh, for an
                    authentic experience. Check now!
                </p>
            </div>
            <FoodsSlide foodsLength={top20MostRating.length} itemCount={3}>
                {top20MostRating.map((food, index) => {
                    return (
                        <FoodsSlideItem
                            key={index}
                            food={food}
                        ></FoodsSlideItem>
                    );
                })}
            </FoodsSlide>
            <Link className="popular__link" to="/menu">
                <span>Explore All Food</span>
                <img width={16} src="./icon/i-arrow-right.svg" alt=""></img>
            </Link>
        </section>
    );
};

export default Popular;
