import "./FoodList.scss";

import FoodsSlide from "../../../../components/FoodsSlide/FoodsSlide";
import FoodsSlideItem from "../../../../components/FoodsSlideItem/FoodsSlideItem";

const FoodList = ({ foods }) => {
    const windowWidth = window.innerWidth;

    return (
        <FoodsSlide
            foodsLength={foods.length}
            itemCount={windowWidth > 576 ? 3 : 1}
        >
            {foods.map((food, index) => {
                return (
                    <FoodsSlideItem food={food} key={index}></FoodsSlideItem>
                );
            })}
        </FoodsSlide>
    );
};

export default FoodList;
