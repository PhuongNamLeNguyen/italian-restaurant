import "./Menu.scss";
import foods from "../../data/foods";
import FoodList from "./Section/FoodList/FoodList";
import Slogan from "./Section/Slogan/Slogan";

const categories = [
    "Appetizers",
    "Pizza",
    "Pasta",
    "Main Courses",
    "Desserts",
    "Beverages",
];

const Menu = () => {
    return (
        <div className="menu">
            <Slogan />
            {categories.map((category, index) => {
                const foodsList = foods.filter(
                    (food) => food.category === category
                );
                return (
                    <section key={index} className="foods-by-category">
                        <div className="container">
                            <h2 className="foods-by-category__heading">
                                {category}
                            </h2>
                            <div className="foods-by-category__img">
                                <img src="./icon/i-decor-list.svg" alt=""></img>
                            </div>
                        </div>
                        <FoodList foods={foodsList}></FoodList>
                    </section>
                );
            })}
        </div>
    );
};

export default Menu;
