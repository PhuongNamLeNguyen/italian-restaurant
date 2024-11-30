import "./Banner.scss";

const bannerLabel = [
    "Self Services",
    "Best Food",
    "Fast Delivery",
    "Super Taste",
];

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <ul className="banner__list">
                    {bannerLabel.map((label, index) => {
                        return (
                            <li key={index} className="item">
                                <img
                                    className="item__img"
                                    src={`./icon/i-banner-${index + 1}.svg`}
                                    alt=""
                                ></img>
                                <span className="item__label">{label}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Banner;
