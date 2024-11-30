import "./Home.scss";

import Hero from "./Section/HeroSection/Hero";
import Stats from "./Section/StatsSection/Stats";
import Popular from "./Section/PopularSection/Popular";
import Opening from "./Section/OpeningSection/Opening";
import IntroMenu from "./Section/IntroMenuSection/IntroMenu";
import Views from "./Section/ViewsSection/Views";
import Reserve from "./Section/ReserveSection/Reserve";
import Daily from "./Section/DailySection/Daily";
import Banner from "./Section/BannerSection/Banner";
import Chefs from "./Section/ChefsSection/Chefs";
import Blog from "./Section/BlogSection/Blog";
import Newsletter from "./Section/NewsletterSection/Newsletter";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Stats />
            <Popular />
            <Opening />
            <IntroMenu />
            <Views />
            <Reserve />
            <Daily />
            <Banner />
            <Chefs />
            <Blog />
            <Newsletter />
        </div>
    );
};

export default Home;
