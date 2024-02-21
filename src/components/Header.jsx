import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { GiSprint } from "react-icons/gi";

const Header = () => {
    const { user, logOut } = useAuth()

    const handleSignout = () => {
        logOut()
            .then(() => {
                console.log('Signout Successful!')
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    //Navlink
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/cart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    const linksPrivate = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add-product">Add Product</NavLink></li>
        <li><NavLink to="/cart">My Cart</NavLink></li>
    </>

    return (
        <div className="py-4">
            {/* Logo & Button */}
            <div className="flex flex-col md:flex-row md:gap-10 items-center justify-between mb-2">
                <div>
                    <Link to="/" className="text-3xl font-semibold flex items-center gap-2"><GiSprint />SPRINTZ</Link>
                </div>
                <div className="mt-6 md:mt-0">
                    <div>
                        <ul className={`flex items-center gap-4 font-semibold list-none uppercase`}>
                            {user ?
                                <>
                                    {linksPrivate}
                                    <div className="dropdown dropdown-end dropdown-hover">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded">
                                            <li className="whitespace-nowrap">{user.displayName}</li>
                                            {/* <li><Link to={'/'}>Dashboard</Link></li> */}
                                            <li><Link onClick={handleSignout}>Signout</Link></li>
                                        </ul>
                                    </div>
                                </> :
                                links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;