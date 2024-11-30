import { Fragment } from "react";

const BlogArticle = ({ blog }) => {
    return (
        <article>
            {blog.article.map((article, index) => {
                return (
                    <Fragment key={index}>
                        {article.heading && <h2>{article.heading}</h2>}
                        {article.paragraph && <p>{article.paragraph}</p>}
                        {article.image && (
                            <img src={article.image} alt=""></img>
                        )}
                        {article.quote && (
                            <blockquote>{article.quote}</blockquote>
                        )}
                        {article.unorderList &&
                            Array.isArray(article.unorderList) && (
                                <ul>
                                    {article.unorderList.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ul>
                            )}
                        {article.orderList &&
                            Array.isArray(article.orderList) && (
                                <ol>
                                    {article.orderList.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ol>
                            )}
                    </Fragment>
                );
            })}
        </article>
    );
};

export default BlogArticle;
