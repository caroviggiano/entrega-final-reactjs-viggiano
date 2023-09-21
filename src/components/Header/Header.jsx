import "./Header.css"
import img from "./logo-ico.ico"

const Header = (props) =>  {
    return (
    <div className= "Header"> 
    <img className="logo" src= {img} alt="logo-alba" />
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    </div>
    );
};

export default Header