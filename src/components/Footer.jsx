import { GiSprint } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer justify-between py-10">
            <aside className="flex flex-col justify-center h-full">
                <h2 className="text-3xl font-semibold flex items-center gap-2"><GiSprint />SPRINTZ</h2>
                <p>SPRINTZ - Online Clothing Store</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <Link to={'/manage'} className="link link-hover">Manage</Link>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </div>
    );
};

export default Footer;