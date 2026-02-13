import { Phone, ExternalLink, Users, BookOpen } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resources-container">
            <div className="resources-header">
                <h1>Support & Resources</h1>
                <p>Access helplines, legal information, and support organizations.</p>
            </div>

            <div className="resources-grid">
                <Card className="resource-card emergency-contact">
                    <div className="card-header">
                        <Phone size={32} />
                        <h2>Emergency Contacts</h2>
                    </div>
                    <ul className="contact-list">
                        <li>
                            <span>Women Helpline</span>
                            <strong>181</strong>
                        </li>
                        <li>
                            <span>Police</span>
                            <strong>100 / 112</strong>
                        </li>
                        <li>
                            <span>Domestic Abuse</span>
                            <strong>1091</strong>
                        </li>
                        <li>
                            <span>Cyber Crime</span>
                            <strong>1930</strong>
                        </li>
                    </ul>
                </Card>

                <div className="resources-column">
                    <Card className="resource-card">
                        <div className="card-header">
                            <BookOpen size={32} color="var(--primary-color)" />
                            <h2>Know Your Rights</h2>
                        </div>
                        <div className="link-list">
                            <a href="#" className="resource-link">
                                Protection of Women from Domestic Violence Act
                                <ExternalLink size={16} />
                            </a>
                            <a href="#" className="resource-link">
                                Sexual Harassment at Workplace (Prevention) Act
                                <ExternalLink size={16} />
                            </a>
                            <a href="#" className="resource-link">
                                Cyber Crime Prevention & Reporting Guide
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </Card>

                    <Card className="resource-card">
                        <div className="card-header">
                            <Users size={32} color="var(--primary-color)" />
                            <h2>Support Organization</h2>
                        </div>
                        <p>Find nearby NGOs and support groups that can help you with legal aid, counseling, and shelter.</p>
                        <Button variant="outline" size="small" className="ngo-btn">
                            Find NGOs Near Me
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Resources;
