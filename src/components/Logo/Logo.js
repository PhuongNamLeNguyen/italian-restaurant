import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = ({ onLogoLink }) => {
    return (
        <div className="top-bar__logo">
            <Link className="logo" to="/" onClick={onLogoLink}>
                <img src="/icon/i-logo.svg" alt=""></img>
                <img src="/img/logo-name.svg" alt=""></img>
            </Link>
        </div>
    );
};

export default Logo;
