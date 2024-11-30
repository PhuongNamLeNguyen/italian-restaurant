import "./Chefs.scss";

import general from "../../../../data/general";

const chefs = general.chefs;

const Chefs = () => {
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
                <ul className="chefs__list">
                    {chefs.map((chef, index) => {
                        return (
                            <li className="chef" key={index}>
                                <div className="chef__img">
                                    <img src={chef.image} alt=""></img>
                                </div>
                                <h3 className="chef__name">{chef.name}</h3>
                                <p className="chef__job">{chef.job}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Chefs;
