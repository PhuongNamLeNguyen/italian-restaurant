import "./Slogan.scss";
import foods from "../../../../data/foods";
import Button from "../../../../components/Button/Button";

const mostRatingFoods = foods.sort((a, b) => b.rating - a.rating)[0];

const Slogan = () => {
    return (
        <section className="slogan">
            <div className="container">
                <div className="slogan__bg-img">
                    <img
                        src={mostRatingFoods.image}
                        alt={mostRatingFoods.name}
                    ></img>
                </div>
                <div className="slogan__content">
                    <h2 className="slogan__heading">
                        Food is not just eating energy
                    </h2>
                    <p className="slogan__desc">It’s an experience.</p>
                    <Button bgColor="#FB8F2C" height="44px">
                        Order Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Slogan;
