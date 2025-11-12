import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Car Service Dashboard</h1>
            </header>
            <main className="dashboard-main">
                <section className="service-summary">
                    <h2>Service Summary</h2>
                    <p>Upcoming appointments: <strong>1</strong></p>
                    <p>Service history: <strong>5</strong></p>
                </section>
                <section className="quick-actions">
                    <h2>Quick Actions</h2>
                    <button>Book New Service</button>
                    <button>View Service History</button>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;