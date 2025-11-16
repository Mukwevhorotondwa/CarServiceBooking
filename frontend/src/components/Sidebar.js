import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Car Service</h2>
            </div>
            <ul className="sidebar-menu">
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/bookings">Bookings</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;