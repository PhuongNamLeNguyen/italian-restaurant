import "./BlogList.scss";
import blog from "../../../data/blog";
import { Link } from "react-router-dom";
import { useState } from "react";

const amountNumber = blog.slice(1, blog.length).length;
const count = 4;

const BlogList = () => {
    const [startNumber, setStartNumber] = useState(1);

    const decreaseStartNumber = () => {
        if (startNumber > count) setStartNumber((curr) => curr - count);
    };

    const increaseStartNumber = () => {
        if (startNumber < amountNumber - count)
            setStartNumber((curr) => curr + count);
    };

    return (
        <section className="blog-list">
            <div className="container">
                <ul>
                    {blog
                        .slice(startNumber, count + startNumber)
                        .map((blog, index) => {
                            return (
                                <li key={index} className="blog-item">
                                    <div className="blog-item__img">
                                        <img src={blog.mainImage} alt=""></img>
                                    </div>
                                    <div className="blog-item__content">
                                        <h3 className="blog-item__heading">
                                            {blog.title}
                                        </h3>
                                        <div className="row">
                                            <span>{blog.date}</span>
                                            <span>{blog.author}</span>
                                        </div>
                                        <div className="blog-item__link">
                                            <Link to={`/blog/${blog.id}`}>
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
                <div className="blog-list__slide">
                    <div className="slide__number">
                        {Array.from({
                            length: Math.ceil(amountNumber / count),
                        }).map((_, index) => {
                            return (
                                <span
                                    className={
                                        Math.floor(startNumber / count) ===
                                        index
                                            ? "active"
                                            : ""
                                    }
                                    key={index}
                                    onClick={() =>
                                        setStartNumber(index * count + 1)
                                    }
                                >
                                    {index + 1}
                                </span>
                            );
                        })}
                    </div>
                    <div className="slide__arrow">
                        <div className="previous" onClick={decreaseStartNumber}>
                            <img src="/icon/i-arrow-left.svg" alt=""></img>
                            <span>Previous</span>
                        </div>
                        <div className="next" onClick={increaseStartNumber}>
                            <span>Next</span>
                            <img src="/icon/i-arrow-right.svg" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogList;
