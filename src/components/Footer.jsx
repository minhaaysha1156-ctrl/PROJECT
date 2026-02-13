import { Phone, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>SheShield</h3>
                    <p>Your Safety. Your Voice. Your Shield.</p>
                </div>
                <div className="footer-section">
                    <h4>Emergency Helplines</h4>
                    <ul>
                        <li><Phone size={16} /> Women Helpline: <strong>181</strong></li>
                        <li><Phone size={16} /> Police: <strong>100</strong> / <strong>112</strong></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/report">File Report</a></li>
                        <li><a href="/resources">Legal Resources</a></li>
                        <li><a href="/status">Track Status</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Made with <Heart size={16} color="var(--secondary-color)" fill="var(--secondary-color)" /> for Women's Safety</p>
            </div>
        </footer>
    );
};

export default Footer;
