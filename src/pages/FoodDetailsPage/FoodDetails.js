import "./FoodDetails.scss";
import { useParams } from "react-router-dom";
import foods from "../../data/foods";

import FoodInfo from "./Section/FoodInfoSection/FoodInfo";
import Tabs from "./Section/TabsSection/Tabs";
import Related from "./Section/RelatedSection/Related";
import AddReview from "./Section/AddReviewSection/AddReview";

const FoodDetails = () => {
    const { foodName } = useParams();
    const foodFullName = foodName.replace(/-/g, " ");

    const foodByName = foods.find(
        (food) => food.name.toLowerCase() === foodFullName
    );

    return (
        <div className="food-details">
            <FoodInfo food={foodByName} />
            <Tabs food={foodByName} />
            <AddReview />
            <Related food={foodByName} />
        </div>
    );
};

export default FoodDetails;
