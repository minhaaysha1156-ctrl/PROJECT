import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import './EmergencyButton.css';

const EmergencyButton = () => {
    return (
        <Link to="/emergency" className="emergency-float-btn">
            <AlertTriangle size={32} />
            <span className="emergency-text">SOS</span>
        </Link>
    );
};

export default EmergencyButton;
