import { useState, useEffect } from 'react';
import { AlertOctagon, MapPin, VolumeX, Volume2 } from 'lucide-react';
import Button from '../components/Button';
import './Emergency.css';

const Emergency = () => {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [silentMode, setSilentMode] = useState(false);
    const [locationActive, setLocationActive] = useState(false);

    useEffect(() => {
        // Simulate location activation
        const timer = setTimeout(() => setLocationActive(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleEmergency = () => {
        setSending(true);
        // Simulate API call
        setTimeout(() => {
            setSending(false);
            setSent(true);
        }, 2000);
    };

    if (sent) {
        return (
            <div className="emergency-container sent">
                <div className="emergency-content">
                    <AlertOctagon size={80} color="white" />
                    <h1>ALERT SENT!</h1>
                    <p>Help is on the way. Your location is being tracked.</p>
                    <p>Police and Emergency Contacts have been notified.</p>
                    <Button
                        variant="secondary"
                        size="large"
                        onClick={() => setSent(false)}
                    >
                        Cancel Alert
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={`emergency-container ${silentMode ? 'silent' : ''}`}>
            <div className="emergency-header">
                <div className="location-status">
                    <MapPin size={20} color={locationActive ? "#4caf50" : "#ccc"} />
                    <span>{locationActive ? "Location Active" : "Locating..."}</span>
                </div>
                <button
                    className="silent-toggle"
                    onClick={() => setSilentMode(!silentMode)}
                >
                    {silentMode ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    {silentMode ? "Silent Mode ON" : "Silent Mode OFF"}
                </button>
            </div>

            <div className="emergency-main">
                <button
                    className={`sos-button ${sending ? 'sending' : ''}`}
                    onClick={handleEmergency}
                    disabled={sending}
                >
                    {sending ? 'SENDING...' : 'SOS'}
                </button>
                <p className="sos-instruction">Tap to send Emergency Alert</p>
                <p className="sos-detail">Sharing live location with trusted contacts and police control room.</p>
            </div>
        </div>
    );
};

export default Emergency;
