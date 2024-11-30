import "./Introduce.scss";

const introduceText = [
    {
        heading: "We are a mexican restaurant makes delicious.",
        desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum lobortis taciti curabitur gravida fermentum interdum proin. Suscipit ornare mattis nam curae sodales velit. ",
    },
    {
        heading: "The story of our first restaurant branch.",
        desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    },
];

const IntroduceRow = ({ heading, desc, imgNumber }) => {
    return (
        <div className="row">
            <div className="introduce__text-box">
                <h2 className="introduce__heading">{heading}</h2>
                <p className="introduce__desc">{desc}</p>
            </div>
            <div className="introduce__img-box">
                <img
                    src={`./img/views/restaurant-view-0${imgNumber}.avif`}
                    alt=""
                ></img>
            </div>
        </div>
    );
};

const Introduce = () => {
    return (
        <section className="introduce">
            <div className="container">
                {introduceText.map((intro, index) => {
                    return (
                        <IntroduceRow
                            key={index}
                            heading={intro.heading}
                            desc={intro.desc}
                            imgNumber={index + 1}
                        ></IntroduceRow>
                    );
                })}
            </div>
        </section>
    );
};

export default Introduce;
