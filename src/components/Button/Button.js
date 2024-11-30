import "./Button.scss";

const Button = ({
    children,
    bgColor = "black",
    textColor = "white",
    width = "180px",
    height = "30px",
    padding = "20px",
}) => {
    const buttonStyles = {
        backgroundColor: bgColor,
        color: textColor,
        height: height,
        maxWidth: width,
        padding: `0 ${padding}`,
        textWrap: "nowrap",
    };
    return (
        <button
            className="button"
            style={buttonStyles}
            onClick={(e) => e.preventDefault()}
        >
            {children}
        </button>
    );
};

export default Button;
