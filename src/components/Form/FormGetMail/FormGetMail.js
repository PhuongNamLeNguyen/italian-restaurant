import "./FormGetMail.scss";

const FormGetMail = () => {
    return (
        <form className="form-get-mail">
            <input type="email" placeholder="Enter your email address"></input>
            <button className="submit">
                <img src="./icon/i-arrow-right.svg" alt=""></img>
            </button>
        </form>
    );
};

export default FormGetMail;
