import { useState } from 'react';
import { Upload, Calendar, MapPin, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Report.css';

const Report = () => {
    const [submitted, setSubmitted] = useState(false);
    const [complaintId, setComplaintId] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        const randomId = 'CMP-' + Math.floor(100000 + Math.random() * 900000);
        setComplaintId(randomId);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="report-container">
                <Card className="success-card">
                    <CheckCircle size={64} color="var(--primary-color)" />
                    <h2>Complaint Submitted Successfully</h2>
                    <p>Your Complaint ID is:</p>
                    <div className="complaint-id">{complaintId}</div>
                    <p>Please save this ID to track your complaint status.</p>
                    <Button variant="primary" onClick={() => window.location.href = '/status'}>
                        Track Status
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="report-container">
            <h1>File a Complaint</h1>
            <Card className="report-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Type of Abuse</label>
                        <select required>
                            <option value="">Select Category</option>
                            <option value="domestic">Domestic Violence</option>
                            <option value="workplace">Workplace Harassment</option>
                            <option value="cyber">Cyber Crime</option>
                            <option value="stalking">Stalking</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description of Incident</label>
                        <textarea
                            rows="5"
                            placeholder="Please describe what happened..."
                            required
                        ></textarea>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label><Calendar size={16} /> Date & Time</label>
                            <input type="datetime-local" required />
                        </div>
                        <div className="form-group">
                            <label><MapPin size={16} /> Location</label>
                            <input type="text" placeholder="Incident Location" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Upload Evidence (Optional)</label>
                        <div className="file-upload">
                            <input type="file" id="evidence" hidden />
                            <label htmlFor="evidence" className="upload-label">
                                <Upload size={24} />
                                <span>Drag & drop or click to upload photos/videos</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-group checkbox-group">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isAnonymous}
                                onChange={() => setIsAnonymous(!isAnonymous)}
                            />
                            <span className="slider round"></span>
                        </label>
                        <span>File Anonymously</span>
                    </div>

                    <Button type="submit" variant="primary" size="large" className="submit-btn full-width gap-top">
                        Submit Report
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Report;
