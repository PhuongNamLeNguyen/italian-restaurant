import "./Vision.scss";

import foods from "../../../../data/foods";

const foodsByPizzaRating = foods
    .filter((food) => food.category === "Pizza")
    .sort((a, b) => b.rating - a.rating);

const vision = [
    {
        icon: "./icon/i-vision-01.svg",
        label: "Delicious Cuisine",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.",
    },
    {
        icon: "./icon/i-vision-02.svg",
        label: "Fast Delivery",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.",
    },
    {
        icon: "./icon/i-vision-03.svg",
        label: "Professional Chef",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.",
    },
];

const Vision = () => {
    return (
        <section className="vision">
            <div className="container">
                <h2 className="vision__heading">Our Vision & Mission</h2>
                <p className="vision__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Erat aliquam amet, cursus tellus non consequat laoreet eget
                    ornare. Tellus vulputate tellus a, lobortis et nisl. Quisque
                    vulputate eget et, aliquet libero, porttitor luctus
                    placerat.
                </p>
                <div className="row">
                    <ul className="vision__list">
                        {vision.map((vision, index) => {
                            return (
                                <li className="item" key={index}>
                                    <div className="item__img">
                                        <img src={vision.icon} alt=""></img>
                                    </div>
                                    <div className="col">
                                        <span className="item__label">
                                            {vision.label}
                                        </span>
                                        <p className="item__desc">
                                            {vision.desc}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="vision__img-box">
                        <img
                            src={foodsByPizzaRating[0].image}
                            alt={foodsByPizzaRating[0].name}
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
