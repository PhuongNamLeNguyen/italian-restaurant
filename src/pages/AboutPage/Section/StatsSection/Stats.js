import "./Stats.scss";

const stats = [
    { label: "Ingredients", number: 241 },
    { label: "Clients Daily", number: 708 },
    { label: "Years of Experience", number: 18 },
    { label: "Fresh & Halal", number: 90 },
];

const Stats = () => {
    return (
        <section className="stats">
            <div className="container">
                <ul className="stats__list">
                    {stats.map((item, index) => {
                        return (
                            <li className="item" key={index}>
                                <span className="item__label">
                                    {item.label}
                                </span>
                                <span className="item__number">
                                    {item.number}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Stats;
