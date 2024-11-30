import blog from "../../../data/blog";
import { Link } from "react-router-dom";
import "./LatestBlog.scss";

const LatestBlog = () => {
    return blog.slice(0, 1).map((blog, index) => {
        return (
            <section key={index} className="latest-blog">
                <div className="container">
                    <div className="latest-blog__img-box">
                        <img src={blog.mainImage} alt=""></img>
                    </div>
                    <div className="latest-blog__text-box">
                        <h2 className="latest-blog__heading">{blog.title}</h2>
                        <div className="row">
                            <span>{blog.date}</span>
                            <span>{blog.author}</span>
                        </div>
                        <p className="latest-blog__desc">{blog.mainDesc}</p>
                        <div className="latest-blog__link">
                            <Link to={`/blog/${blog.id}`}>Read more</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    });
};

export default LatestBlog;
