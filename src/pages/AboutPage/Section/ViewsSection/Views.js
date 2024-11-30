import "./Views.scss";
import { useState } from "react";

const Views = () => {
    const [isPlay, setIsPlay] = useState(false);

    const handlePlayVideo = () => {
        const video = document.querySelector("video");
        if (video && !isPlay) {
            video.play();
            setIsPlay(true);
        }
    };

    const handlePauseVideo = () => {
        const video = document.querySelector("video");
        if (video && isPlay) {
            video.pause();
            setIsPlay(false);
        }
    };

    return (
        <section className="views">
            <div className="container">
                <h2 className="views__heading">
                    A closer look at our restaurant
                </h2>
                <p className="views__desc">
                    Experience breathtaking views at our restaurant, where
                    modern elegance meets cozy ambiance. Enjoy a relaxing
                    atmosphere with stylish decor, natural lighting, and scenic
                    surroundings, creating the perfect dining experience.
                </p>
                <div className="views__video">
                    <video
                        src="./video/restaurant-views.mp4"
                        type="video/mp4"
                        controls
                        loop
                        muted
                        onPlay={handlePlayVideo}
                        onPause={handlePauseVideo}
                        onTouchStart={
                            isPlay ? handlePauseVideo : handlePlayVideo
                        }
                    ></video>
                    {!isPlay && (
                        <div className="play-icon" onClick={handlePlayVideo}>
                            <img src="./icon/i-play.svg" alt=""></img>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Views;
