import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <Shield className="logo-icon" />
                    SheShield
                </Link>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/report" className="nav-links" onClick={() => setIsOpen(false)}>
                            Report
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources" className="nav-links" onClick={() => setIsOpen(false)}>
                            Resources
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-links-mobile" onClick={() => setIsOpen(false)}>
                            Login
                        </Link>
                    </li>
                </ul>
                <Link to="/login">
                    <button className="btn-login">Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
