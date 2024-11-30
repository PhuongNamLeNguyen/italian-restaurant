import { useState } from "react";
import RatingStars from "../../../../components/RatingStars/RatingStars";
import "./Testimonials.scss";
const testimonials = [
    {
        guestName: "John Doe",
        rating: 5,
        date: "2023-08-01",
        testimonial:
            "The food was delicious and beautifully presented. I can't wait to come back for more amazing dishes!",
    },
    {
        guestName: "Jane Smith",
        rating: 5,
        date: "2023-08-05",
        testimonial:
            "Great atmosphere with friendly staff. I enjoyed every moment and will definitely recommend this place to friends!",
    },
    {
        guestName: "Emily Johnson",
        rating: 5,
        date: "2023-08-10",
        testimonial:
            "A fantastic dining experience! The pasta was incredible, and the service made it even better. Highly recommend!",
    },
    {
        guestName: "Michael Brown",
        rating: 5,
        date: "2023-08-15",
        testimonial:
            "Delicious food paired with excellent service. This restaurant is a must-visit for anyone looking for quality dining.",
    },
    {
        guestName: "Sarah Davis",
        rating: 5,
        date: "2023-08-20",
        testimonial:
            "Wonderful experience! The dessert was heavenly, and the overall atmosphere made for a perfect evening out.",
    },
    {
        guestName: "David Wilson",
        rating: 4.5,
        date: "2023-08-25",
        testimonial:
            "An unforgettable meal with a delightful ambiance. Can't wait to return and try more of the menu!",
    },
    {
        guestName: "Laura Garcia",
        rating: 4.5,
        date: "2023-09-01",
        testimonial:
            "Perfect spot for a romantic dinner! The ambiance was cozy, and the food was simply divine. Loved it!",
    },
    {
        guestName: "James Martinez",
        rating: 4.5,
        date: "2023-09-05",
        testimonial:
            "Exceptional quality food and beautiful presentation. Truly a delightful experience that I would recommend to everyone!",
    },
    {
        guestName: "Jessica Anderson",
        rating: 5,
        date: "2023-09-10",
        testimonial:
            "I loved the variety on the menu. There’s something for everyone, making it a great dining option!",
    },
    {
        guestName: "Robert Thomas",
        rating: 5,
        date: "2023-09-15",
        testimonial:
            "A hidden gem! The flavors were incredible, and the atmosphere was welcoming. Highly recommend this restaurant to all!",
    },
];

const Testimonials = () => {
    const [tesIndex, setTesIndex] = useState(0);

    const handleDecreaseIndex = () => {
        if (tesIndex > 0) {
            setTesIndex((currIndex) => currIndex - 1);
        }
    };
    const handleIncreaseIndex = () => {
        if (tesIndex < testimonials.length - 3) {
            setTesIndex((currIndex) => currIndex + 1);
        }
    };

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="testimonials__heading">Reviews about us</h2>
                <p className="testimonials__desc">
                    Have you ever wondered what our past customers have thought
                    about us? Read their reviews about us and learn about our
                    services.
                </p>
                <ul
                    className="testimonials__list"
                    style={{
                        transform: `translateX(calc(-${370 * tesIndex}px - ${
                            tesIndex === 0 ? 0 : 30 * tesIndex
                        }px))`,
                        transition: "all ease-in-out 0.3s",
                    }}
                >
                    {testimonials.map((tes, index) => {
                        return (
                            <li className="item" key={index}>
                                <div className="item__img">
                                    <img
                                        src={`./img/guests/guest-0${
                                            index + 1
                                        }.avif`}
                                        alt=""
                                    ></img>
                                </div>
                                <p className="item__tes">{tes.testimonial}</p>
                                <div className="row">
                                    <span className="item__name">
                                        {tes.guestName}
                                    </span>
                                    <RatingStars
                                        starSize={20}
                                        rating={tes.rating}
                                    ></RatingStars>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className="testimonials__slide">
                    <button className="btn" onClick={handleDecreaseIndex}>
                        <img src="./icon/i-arrow-left.svg" alt=""></img>
                    </button>
                    <button className="btn" onClick={handleIncreaseIndex}>
                        <img src="./icon/i-arrow-right.svg" alt=""></img>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
