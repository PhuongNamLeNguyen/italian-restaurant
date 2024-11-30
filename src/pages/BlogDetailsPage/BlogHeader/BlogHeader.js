import { Link } from "react-router-dom";

const BlogHeader = ({ blog }) => {
    return (
        <div key={blog.id} className="blog-details__header">
            <h1 className="blog-details__heading">{blog.title}</h1>
            <p className="blog-details__desc">{blog.mainDesc}</p>
            <div className="blog-details__img">
                <img src={blog.mainImage} alt=""></img>
            </div>
            <div className="row">
                <div className="col">
                    <span>{blog.date}</span>
                    <span>{blog.author}</span>
                </div>
                <div className="col">
                    <button className="blog-details__copy-link">
                        <img src="/icon/i-link-chain.svg" alt=""></img>
                        <span>Copy link</span>
                    </button>
                    <Link to="/">
                        <img src="/icon/i-facebook-fill.svg" alt=""></img>
                    </Link>
                    <Link to="/">
                        <img src="/icon/i-twitter-fill.svg" alt=""></img>
                    </Link>
                    <Link to="/">
                        <img src="/icon/i-linkedin-fill.svg" alt=""></img>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;
