import "./Blog.scss";
import LatestBlog from "./LatestBlog/LatestBlog";
import BlogList from "./BlogList/BlogList";

const Blog = () => {
    return (
        <div className="blog">
            <div className="container">
                <h2 className="blog__heading">
                    Restaurant Management & Growth Blog
                </h2>
            </div>
            <LatestBlog />
            <BlogList />
        </div>
    );
};

export default Blog;
