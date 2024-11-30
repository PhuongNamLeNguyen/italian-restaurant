import "./About.scss";

import Introduce from "./Section/IntroduceSection/Introduce";
import Vision from "./Section/VisionSection/Vision";
import Chefs from "./Section/ChefsSection/Chefs";
import Views from "./Section/ViewsSection/Views";
import Stats from "./Section/StatsSection/Stats";
import Testimonials from "./Section/TestimonialsSection/Testimonials";

const About = () => {
    return (
        <div className="about">
            <Introduce />
            <Vision />
            <Chefs />
            <Stats />
            <Views />
            <Testimonials />
        </div>
    );
};

export default About;
