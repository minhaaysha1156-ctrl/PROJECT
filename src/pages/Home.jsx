import { Link } from 'react-router-dom';
import { FileText, CheckCircle, HeartHandshake, ShieldAlert } from 'lucide-react';
import Button from '../components/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Your Safety. Your Voice. Your Shield.</h1>
                    <p>Empowering women with a secure platform for reporting abuse and accessing emergency support.</p>
                    <div className="hero-buttons">
                        <Link to="/report">
                            <Button variant="primary" size="large">REPORT NOW</Button>
                        </Link>
                        <Link to="/emergency">
                            <Button variant="emergency" size="large">
                                <ShieldAlert size={20} /> EMERGENCY ALERT
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps-container">
                    <div className="step-card">
                        <div className="icon-circle">
                            <FileText size={32} />
                        </div>
                        <h3>Report</h3>
                        <p>File a complaint securely, with options for anonymous reporting.</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step-card">
                        <div className="icon-circle">
                            <CheckCircle size={32} />
                        </div>
                        <h3>Review</h3>
                        <p>Authorities review your report and take immediate action.</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step-card">
                        <div className="icon-circle">
                            <HeartHandshake size={32} />
                        </div>
                        <h3>Support</h3>
                        <p>Get legal aid, counseling, and emergency assistance.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
