import "./AddReview.scss";
import Button from "../../../../components/Button/Button";
import RatingStars from "../../../../components/RatingStars/RatingStars";
import { useState } from "react";

const AddReview = () => {
    const [ratingStar, setRatingStar] = useState(5);

    return (
        <section className="add-review">
            <div className="container">
                <h3 className="add-review__heading">Add a review</h3>
                <p className="add-review__desc">
                    Your email address will not be published. Required fields
                    are marked *
                </p>
                <form className="add-review__form">
                    <div className="row">
                        <div className="form__group">
                            <label>Your name *</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                            ></input>
                            <div className="icon">
                                <img src="/icon/i-user.svg" alt=""></img>
                            </div>
                        </div>
                        <div className="form__group">
                            <label>Your email address *</label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                            ></input>
                            <div className="icon">
                                <img src="/icon/i-mail.svg" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="form__group rating">
                        <label>Rating</label>
                        <input
                            type="number"
                            placeholder={ratingStar}
                            value={
                                ratingStar >= 0 && ratingStar <= 5
                                    ? ratingStar
                                    : 5
                            }
                            onChange={(e) => setRatingStar(e.target.value)}
                        ></input>
                        <RatingStars
                            starSize={20}
                            rating={
                                ratingStar >= 1 && ratingStar <= 5
                                    ? ratingStar
                                    : 5
                            }
                        ></RatingStars>
                    </div>
                    <div className="form__group">
                        <label>Write review</label>
                        <textarea
                            name="message"
                            rows="3"
                            placeholder="Write down your review"
                        ></textarea>
                    </div>
                    <div className="form__group">
                        <input type="checkbox"></input>
                        <label>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                        </label>
                    </div>
                    <Button bgColor="#fb8f2c" height="40px">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default AddReview;
