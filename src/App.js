import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./router/ScrollToTop";

import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Menu from "./pages/MenuPage/Menu";
import FoodDetails from "./pages/FoodDetailsPage/FoodDetails";
import Blog from "./pages/BlogPage/Blog";
import BlogDetails from "./pages/BlogDetailsPage/BlogDetails";
import ComingSoon from "./pages/ComingSoonPage/ComingSoon";
import Booking from "./pages/BookingPage/Booking";
import Error from "./pages/Error";

import RootLayout from "./layout/RootLayout";

const pages = [
    { path: "/", name: "Home", element: <Home /> },
    { path: "/about", name: "About", element: <About /> },
    { path: "/menu", name: "Menu", element: <Menu /> },
    { path: "/blog", name: "Blog", element: <Blog /> },
    { path: "/coming-soon", name: "Coming Soon", element: <ComingSoon /> },
    { path: "/booking", name: "Booking", element: <Booking /> },
];

function App() {
    return (
        <Router>
            <ScrollToTop></ScrollToTop>
            <Routes>
                <Route path="/" element={<RootLayout pages={pages} />}>
                    {pages.map((page, index) => {
                        return (
                            <Route
                                key={index}
                                path={page.path}
                                element={page.element}
                            />
                        );
                    })}
                    <Route
                        path="/menu/:foodName"
                        element={<FoodDetails />}
                    ></Route>
                    <Route
                        path="/blog/:blogId"
                        element={<BlogDetails />}
                    ></Route>
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
