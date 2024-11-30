import "./Footer.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import general from "../../data/general";

const contactInfoValues = Object.entries(general.contactInfo).map(
    ([_, value]) => value
);

const socialMedia = general.socialMedia;

const Footer = ({ pages }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="col">
                    <Logo />
                    <div className="download">
                        <p className="download__label">
                            Download the WowWraps app today.
                        </p>
                        <div className="row">
                            <img src="/img/app-store.svg" alt=""></img>
                            <img src="/img/google-play.svg" alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <span className="footer__label">Useful Link</span>
                    <ul>
                        {pages.map((page, index) => {
                            return (
                                <li key={index}>
                                    <Link to={page.path}>{page.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="col">
                    <span className="footer__label">Contact Info</span>
                    <ul>
                        {contactInfoValues.map((value, index) => {
                            return <li key={index}>{value}</li>;
                        })}
                    </ul>
                </div>
                <div className="col">
                    <span className="footer__label">Follow us</span>
                    <ul>
                        {Object.entries(socialMedia).map(
                            ([key, value], index) => {
                                return (
                                    <li key={index}>
                                        <Link to={value}>
                                            {key.charAt(0).toUpperCase() +
                                                key.slice(1)}
                                        </Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
                <div className="col">
                    <span className="footer__label">Legal</span>
                    <ul>
                        <li>Website by uihut.com</li>
                        <li>©2022. All Rights Reserved</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
