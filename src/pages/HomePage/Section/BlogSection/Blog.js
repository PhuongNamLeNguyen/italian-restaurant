import "./Blog.scss";
import foods from "../../../../data/foods";
import { Link } from "react-router-dom";

const pizzaByPrice = foods
    .filter((food) => food.category === "Pizza")
    .sort((a, b) => b.price - a.price);

const Blog = () => {
    return (
        <section className="blog">
            <div className="container">
                <p className="blog__sub-heading">Our blog</p>
                <h2 className="blog__heading">Recent Articles</h2>
                <ul className="blog__list">
                    {pizzaByPrice.slice(0, 2).map((pizza, index) => {
                        return (
                            <li key={index} className="item">
                                <div className="item__img">
                                    <img
                                        src={pizza.image}
                                        alt={pizza.name}
                                    ></img>
                                </div>
                                <div className="item__details">
                                    <p className="date">August 6, 2022 </p>
                                    <h3 className="title">
                                        The Most Expensive Pizza in the Usa
                                    </h3>
                                    <p className="desc">
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque lauatium, totam rem aperiam
                                        perspiciatis unde omnis.
                                    </p>
                                    <div className="row">
                                        <span>
                                            Comments: <strong>165</strong>
                                        </span>
                                        <span>
                                            View: <strong>1265</strong>
                                        </span>
                                    </div>
                                    <Link className="link" to="/blog">
                                        Read now
                                    </Link>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Blog;
