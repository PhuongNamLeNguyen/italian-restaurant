import "./Hero.scss";

import foods from "../../../../data/foods";
import { Link } from "react-router-dom";

const foodsByRating = foods.sort((a, b) => b.rating - a.rating);

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__text-box">
                    <p className="hero__sub-heading">Hi, new friend!</p>
                    <h1 className="hero__heading">
                        We do not cook, we create your emotions!
                    </h1>
                    <p className="hero__desc">
                        There's evidence that cooking, like other creative
                        practices, can boost well-being, self-esteem, and other
                        measures of mental health.
                    </p>
                    <Link className="hero__link" to="/menu">
                        Our menu
                    </Link>
                </div>
                <div className="hero__img-box">
                    {foodsByRating.slice(0, 1).map((food) => {
                        return (
                            <div key={food.id} className="main-img">
                                <img
                                    loading="lazy"
                                    src={food.image}
                                    alt={food.name}
                                ></img>
                                <span>{`Price: $${food.price}`}</span>
                            </div>
                        );
                    })}
                    {foodsByRating.slice(1, 4).map((food, index) => {
                        return (
                            <div key={index} className="sub-img">
                                <img
                                    loading="lazy"
                                    key={index}
                                    src={food.image}
                                    alt={food.name}
                                ></img>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Hero;
