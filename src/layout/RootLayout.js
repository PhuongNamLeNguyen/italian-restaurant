import TopBar from "../components/TopBar/TopBar";
import Footer from "../components/Footer/Footer";

const RootLayout = ({ children, pages }) => {
    return (
        <>
            <TopBar pages={pages} />
            {children}
            <Footer pages={pages} />
        </>
    );
};

export default RootLayout;
