import "./RatingStars.scss";

const RatingStars = ({ starSize, rating }) => {
    const ratingStarsStyle = {
        width: `${starSize * rating}px`,
        height: `${starSize}px`,
        maskSize: `${starSize}px`,
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="rating-stars" style={ratingStarsStyle}></div>
            <span>{rating}</span>
        </div>
    );
};

export default RatingStars;
