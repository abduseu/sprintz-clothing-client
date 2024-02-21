import { NavLink } from "react-router-dom";

//Navlink
const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/cart">My Cart</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
</>

const Header = () => {
    return (
        <div>
            <ul>
                {links}
            </ul>
        </div>
    );
};

export default Header;