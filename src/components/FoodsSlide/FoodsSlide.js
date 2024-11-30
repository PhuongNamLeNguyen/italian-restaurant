import { useState } from "react";

import "./FoodsSlide.scss";

const FoodsSlide = ({ children, foodsLength, itemCount }) => {
    const windowWidth = window.innerWidth;

    const [slideState, setSlideState] = useState({ index: 0, translateX: 0 });

    const decreaseFoodsInSlide = () => {
        if (slideState.index > 0) {
            setSlideState((prevState) => ({
                index: prevState.index - 1,
                translateX:
                    prevState.translateX + (windowWidth > 576 ? 400 : 450), //width: 370 + gap: 80
            }));
        }
    };

    const increaseFoodsInSlide = () => {
        if (slideState.index < foodsLength - itemCount) {
            setSlideState((prevState) => ({
                index: prevState.index + 1,
                translateX:
                    prevState.translateX - (windowWidth > 576 ? 400 : 450),
            }));
        }
    };

    const foodsSlide = {
        transform: `translateX(${slideState.translateX}px)`,
        transition: `all 0.3s ease`,
    };

    return (
        <div className="container">
            <div className="foods-slide">
                <div
                    className="foods-slide__btn left"
                    onClick={decreaseFoodsInSlide}
                >
                    <img
                        src="/icon/i-arrow-left.svg"
                        alt=""
                        width={windowWidth > 567 ? 40 : 30}
                    ></img>
                </div>
                <ul className="foods-slide__list" style={foodsSlide}>
                    {children}
                </ul>
                <div
                    className="foods-slide__btn right"
                    onClick={increaseFoodsInSlide}
                >
                    <img
                        src="/icon/i-arrow-right.svg"
                        alt=""
                        width={windowWidth > 567 ? 40 : 30}
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default FoodsSlide;
