import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/test" className="brand">agencytype</Link>
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;