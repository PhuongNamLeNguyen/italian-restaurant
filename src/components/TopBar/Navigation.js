import { Link, useLocation } from "react-router-dom";
// Pages list on navigation: Home, About, Menu, Blog, Contact, Coming Soon, Booking

const Navigation = ({ pages, visibleNavigation, onLinkActive }) => {
    const { pathname } = useLocation();

    return (
        <nav
            className={
                visibleNavigation ? "top-bar__nav visible" : "top-bar__nav"
            }
        >
            <ul className="list">
                {pages.slice(0, pages.length - 1).map((page, index) => {
                    const isActive =
                        pathname === page.path ||
                        pathname.startsWith(page.path + "/");
                    return (
                        <li key={index} className="item">
                            <Link
                                className={isActive ? "link active" : "link"}
                                to={page.path}
                                onClick={onLinkActive}
                            >
                                {page.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
