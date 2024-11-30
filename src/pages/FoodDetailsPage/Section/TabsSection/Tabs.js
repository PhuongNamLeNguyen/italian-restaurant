import "./Tabs.scss";
import { useState } from "react";
import RatingStars from "../../../../components/RatingStars/RatingStars";

const Tabs = ({ food }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleActiveIndex = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="tabs">
            <div className="container">
                <div className="tabs__header">
                    <ul className="list">
                        {[
                            "Description",
                            `Reviews (${food.reviews.length})`,
                        ].map((item, index) => {
                            return (
                                <li
                                    className={
                                        activeIndex === index ? "active" : ""
                                    }
                                    key={index}
                                    onClick={() => handleActiveIndex(index)}
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="tabs__content">
                    <ul className={activeIndex === 0 ? "list" : "list hidden"}>
                        {activeIndex === 0 &&
                            food.deepDescription.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                    </ul>
                    <ul className={activeIndex === 1 ? "list" : "list hidden"}>
                        {activeIndex === 1 &&
                            food.reviews.map((guest, index) => {
                                return (
                                    <li className="guest" key={index}>
                                        <div className="guest__avatar">
                                            <img
                                                src={guest.avatar}
                                                alt=""
                                            ></img>
                                        </div>
                                        <div className="guest__info">
                                            <div className="row">
                                                <span className="guest__name">
                                                    {guest.name}
                                                </span>
                                                <RatingStars
                                                    starSize={20}
                                                    rating={guest.rating}
                                                />
                                                <span className="guest__date">
                                                    {guest.date}
                                                </span>
                                            </div>
                                            <p className="guest__review">
                                                {guest.review}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Tabs;
