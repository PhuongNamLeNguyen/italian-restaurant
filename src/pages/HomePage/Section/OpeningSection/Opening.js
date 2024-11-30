import "./Opening.scss";
import general from "../../../../data/general";
import foods from "../../../../data/foods";

const contactInfo = general.contactInfo;
const openingTimes = general.openingTimes;

const appetizers = foods.filter((food) => food.category === "Appetizers");
const appetizersByRating = appetizers.sort((a, b) => b.rating - a.rating);

const Opening = () => {
    return (
        <div className="opening">
            <div className="container">
                <div className="opening__contact">
                    <div className="background-img">
                        <img
                            src={appetizersByRating[0].image}
                            alt={appetizersByRating[0].name}
                            loading="lazy"
                        ></img>
                    </div>
                    <div className="content">
                        <h3 className="label">Find Us Here</h3>
                        <ul>
                            {Object.entries(contactInfo).map(
                                ([_, value], index) => {
                                    return <li key={index}>{value}</li>;
                                }
                            )}
                        </ul>
                    </div>
                </div>
                <div className="opening__times">
                    <h3 className="label">Openning Times</h3>
                    <ul>
                        {openingTimes.map((opening, index) => {
                            return (
                                <li key={index}>
                                    <span>{opening.day}</span>
                                    <span>{opening.times}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Opening;
