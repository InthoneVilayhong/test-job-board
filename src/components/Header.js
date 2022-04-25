import Title from "./Title";
import "./Header.css";

const Header = (props) => {
    return (
        <div className="header">
            <Title name={props.name} />
        </div>
    );
};

export default Header;
