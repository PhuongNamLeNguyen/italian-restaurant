import "./Newsletter.scss";
import foods from "../../../../data/foods";
import FormGetMail from "../../../../components/Form/FormGetMail/FormGetMail";

const mostExpensiveFood = foods.sort((a, b) => b.price - a.price)[0];

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="newsletter__bg-img">
                <img
                    src={mostExpensiveFood.image}
                    alt={mostExpensiveFood.name}
                ></img>
            </div>
            <div className="container">
                <div className="newsletter__text-box">
                    <h2 className="newsletter__heading">Newsletter</h2>
                    <p className="newsletter__desc">
                        Subscribe to our newsletter and receive 15% discount
                        from your order.
                    </p>
                </div>
                <div className="newsletter__form">
                    <FormGetMail />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
