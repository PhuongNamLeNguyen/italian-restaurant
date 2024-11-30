import "./Views.scss";
import { useState } from "react";

const Views = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const [touchStart, setTouchStart] = useState(0);
    const [touchMove, setTouchMove] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = 5;
    const imageWidth = 500;

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchMove(e.touches[0].clientX);
        const deltaX = touchMove - touchStart;
        setTranslateX(() => currentIndex * -imageWidth + deltaX);
    };

    const handleTouchEnd = (e) => {
        const deltaX = touchMove - touchStart;
        let newIndex = currentIndex;
        if (deltaX > 50 && currentIndex > 0) {
            newIndex = currentIndex - 1;
        } else if (deltaX < -50 && currentIndex < totalImages - 1) {
            newIndex = currentIndex + 1;
        }
        setCurrentIndex(newIndex);
        setTranslateX(newIndex * -imageWidth);
    };

    return (
        <section className="views">
            <div className="container">
                <h2 className="views__heading">Visit Our Restaurant</h2>
                <p className="views__desc">
                    Quality country-style menu selection, friendly and efficient
                    service, combined with genuine value has kept Our Best
                    serving families like yours for over 28.
                </p>
                <div
                    style={
                        isMobile
                            ? {
                                  transform: `translateX(${translateX}px)`,
                                  transition: "transform 0.3s ease-out",
                              }
                            : {
                                  transform: `translateX(0px)`,
                                  transition: "transform 0.3s ease-out",
                              }
                    }
                    className="views__album"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {Array.from({ length: totalImages }).map((_, index) => (
                        <div key={index} className="album-img">
                            <img
                                loading="lazy"
                                src={`./img/views/restaurant-view-0${
                                    index + 1
                                }.avif`}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
                {window.matchMedia("(max-width: 768px)").matches && (
                    <div className="views__slide">
                        {Array.from({ length: totalImages }).map((_, index) => (
                            <span
                                key={index}
                                className={
                                    currentIndex === index
                                        ? "dot active"
                                        : "dot"
                                }
                            ></span>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Views;
