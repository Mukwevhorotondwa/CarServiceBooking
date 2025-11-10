import React from 'react';

const LandingPage = () => {
    return (
        <div>
            <header>
                <h1>Welcome to the Mobile Workshop Platform</h1>
                <p>Your one-stop solution for car maintenance and repair.</p>
            </header>
            <main>
                <section>
                    <h2>Our Services</h2>
                    <p>We offer a wide range of services to keep your car in top condition.</p>
                    <ul>
                        <li>Oil Change</li>
                        <li>Tire Rotation</li>
                        <li>Brake Inspection</li>
                        <li>And more...</li>
                    </ul>
                </section>
                <section>
                    <h2>How it works</h2>
                    <p>1. Request a service.</p>
                    <p>2. We come to you.</p>
                    <p>3. Your car gets serviced.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Mobile Workshop Platform</p>
            </footer>
        </div>
    );
};

export default LandingPage;