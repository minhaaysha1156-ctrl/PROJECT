import { useState } from 'react';
import { Search, CheckCircle, Clock, UserCheck, CheckSquare, MessageSquare } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Status.css';

const Status = () => {
    const [complaintId, setComplaintId] = useState('');
    const [statusData, setStatusData] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        // Simulate finding status
        if (complaintId) {
            setStatusData({
                id: complaintId,
                currentStep: 2,
                steps: [
                    { label: 'Submitted', date: 'Oct 24, 10:00 AM', completed: true },
                    { label: 'Under Review', date: 'Oct 24, 02:30 PM', completed: true },
                    { label: 'Officer Assigned', date: 'In Progress', completed: false },
                    { label: 'Resolved', date: 'Pending', completed: false },
                ],
                remarks: "Your complaint is currently being reviewed by the cyber crime cell. Officer details will be shared shortly."
            });
        }
    };

    return (
        <div className="status-container">
            <h1>Track Complaint Status</h1>
            <Card className="search-card">
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Enter Complaint ID (e.g. CMP-123456)"
                        value={complaintId}
                        onChange={(e) => setComplaintId(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="primary" className="search-button">
                        <Search size={20} /> Track
                    </Button>
                </form>
            </Card>

            {statusData && (
                <div className="status-result">
                    <Card className="status-timeline-card">
                        <h3>Complaint ID: {statusData.id}</h3>
                        <div className="timeline">
                            {statusData.steps.map((step, index) => (
                                <div key={index} className={`timeline-item ${step.completed ? 'completed' : ''} ${index === 1 ? 'active' : ''}`}>
                                    <div className="timeline-icon">
                                        {step.completed ? <CheckCircle size={20} /> : <Clock size={20} />}
                                    </div>
                                    <div className="timeline-content">
                                        <h4>{step.label}</h4>
                                        <p>{step.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="remarks-card">
                        <h3><MessageSquare size={20} /> Admin Remarks</h3>
                        <p>{statusData.remarks}</p>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default Status;
