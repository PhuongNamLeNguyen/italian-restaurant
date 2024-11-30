import { Outlet } from "react-router-dom";

import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import Logo from "../Logo/Logo";
import OpeningStatus from "./OpeningStatus";
import Reservation from "./Reservation";

import { useState } from "react";

import "./TopBar.scss";

const TopBar = ({ pages }) => {
    const [linkActive, setLinkActive] = useState(0);
    const [visibleNavigation, setVisibleNavigation] = useState(false);

    const handleLinkActive = (index) => {
        setLinkActive(index);
        setVisibleNavigation(!visibleNavigation);
    };

    const handleLogoLink = () => {
        setLinkActive(0);
    };

    const handleVisibleNavigaion = () => {
        setVisibleNavigation(!visibleNavigation);
    };

    const handleRouteBooking = () => {
        setLinkActive(-1);
        setVisibleNavigation(false);
    };

    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <MenuToggle onVisibleNavigation={handleVisibleNavigaion} />
                    <Navigation
                        visibleNavigation={visibleNavigation}
                        pages={pages}
                        linkActive={linkActive}
                        onLinkActive={handleLinkActive}
                    />
                    <Logo
                        className="top-bar__logo"
                        onLogoLink={handleLogoLink}
                    />
                    <OpeningStatus />
                    <Reservation
                        linkActive={linkActive}
                        onRouteBooking={handleRouteBooking}
                        onVisibleNavigation={handleVisibleNavigaion}
                    />
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default TopBar;
