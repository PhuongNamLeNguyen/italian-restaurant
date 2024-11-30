import "./BlogDetails.scss";
import { useParams } from "react-router-dom";
import blog from "../../data/blog";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogArticle from "./BlogArticle/BlogArticle";
import BlogRelated from "./BlogRelated/BlogRelated";

const BlogDetails = () => {
    const { blogId } = useParams();
    const blogById = blog.filter((item, _) => item.id === blogId);

    return blogById.map((blog, _) => {
        return (
            <div key={blog.id} className="blog-details">
                <div className="container">
                    <BlogHeader blog={blog} />
                    <BlogArticle blog={blog} />
                    <BlogRelated currentBlog={blog} />
                </div>
            </div>
        );
    });
};

export default BlogDetails;
