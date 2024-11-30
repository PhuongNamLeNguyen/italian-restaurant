import { Link } from "react-router-dom";
import blog from "../../../data/blog";
import "./BlogRelated.scss";

const BlogRelated = ({ currentBlog }) => {
    const relatedBlog = blog
        .filter((item) => item.id !== currentBlog.id)
        .slice(0, 2);

    return (
        <section className="blog-related">
            <h2 className="blog-related__heading">Related Blog post</h2>
            <ul className="blog-related__list">
                {relatedBlog.map((blog) => {
                    return (
                        <li key={blog.id} className="blog">
                            <div className="blog__img">
                                <img src={blog.mainImage} alt=""></img>
                            </div>
                            <div className="blog__details">
                                <h3 className="blog__title">{blog.title}</h3>
                                <div className="row">
                                    <span>{blog.date}</span>
                                    <span>{blog.author}</span>
                                </div>
                                <div className="blog__link">
                                    <Link to={`/blog/${blog.id}`}>
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default BlogRelated;
