import "./Chefs.scss";
import { useState } from "react";
import general from "../../../../data/general";

const chefs = general.chefs;

const Chefs = () => {
    const [isActive, setIsActive] = useState(0);

    const handleNameActive = (index) => {
        setIsActive(index);
    };

    return (
        <section className="chefs">
            <div className="container">
                <h2 className="chefs__heading">They will cook for you</h2>
                <p className="chefs__desc">
                    Our Diners can enjoy cooking for themselves, or visiting a
                    curated selection of restaurants in the area. They will cook
                    for you and make sure you have a home away from home at all
                    times.
                </p>
                <div className="row">
                    <ul className="chefs__list">
                        {chefs.map((chef, index) => {
                            return (
                                <li key={index} className="chef">
                                    <span
                                        className={
                                            isActive === index
                                                ? "chef__name active"
                                                : "chef__name"
                                        }
                                        onClick={() => handleNameActive(index)}
                                    >
                                        {chef.name}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="chefs__img">
                        <img
                            src={`./img/chefs/chef-${isActive + 1}.png`}
                            alt=""
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chefs;
