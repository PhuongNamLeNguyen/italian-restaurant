import foods from "../../../../data/foods";
import general from "../../../../data/general";

import "./Stats.scss";

const foodsByPrice = foods.sort((a, b) => b.price - a.price);
const mostExpensive = foodsByPrice.at(0);

const { restaurantsCount, foodsCount, openYear } = general;

const currentYear = new Date().getFullYear();
const experienceYear = currentYear - openYear;

const statsList = [
    {
        number: `${
            restaurantsCount >= 10 ? restaurantsCount : "0" + restaurantsCount
        }`,
        name: "Number Restaurant",
    },
    { number: foodsCount, name: "New Food Menu Dishes" },
    { number: experienceYear, name: "Year of Experience" },
];

const Stats = () => {
    return (
        <section
            className="stats"
            style={{ backgroundImage: `url(${mostExpensive.image})` }}
        >
            <div className="container">
                <ul className="list">
                    {statsList.map((stats, index) => {
                        return (
                            <li key={index} className="item">
                                <span>{stats.number}</span>
                                <span>{stats.name}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Stats;
