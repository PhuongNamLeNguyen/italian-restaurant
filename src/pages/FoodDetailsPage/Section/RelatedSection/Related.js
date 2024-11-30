import "./Related.scss";
import foods from "../../../../data/foods";
import FoodsSlide from "../../../../components/FoodsSlide/FoodsSlide";
import FoodsSlideItem from "../../../../components/FoodsSlideItem/FoodsSlideItem";

const Related = ({ food }) => {
    const relatedFood = foods
        .filter((item) => item.category === food.category)
        .filter((item) => item.name !== food.name);

    return (
        <section className="related">
            <div className="container">
                <h3 className="related__heading">Related Items</h3>
            </div>
            <FoodsSlide foodsLength={relatedFood.length} itemCount={3}>
                {relatedFood.map((food, index) => {
                    return <FoodsSlideItem key={index} food={food} />;
                })}
            </FoodsSlide>
        </section>
    );
};

export default Related;
