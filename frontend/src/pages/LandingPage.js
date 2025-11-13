import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <header>
                <h1>Welcome to the Mobile Workshop Platform</h1>
                <p>Your one-stop solution for car maintenance and repair.</p>
                <div className="cta-buttons">
                    <button className="cta-primary">Book a Service</button>
                    <Link to="/signup" className="cta-secondary">Sign Up</Link>
                </div>
            </header>
            <main>
                <section className="services">
                    <h2>Our Services</h2>
                    <div className="service-cards">
                        <div className="service-card">
                            <h3>Major Service</h3>
                            <p>Comprehensive check-up including engine, brakes, and transmission.</p>
                        </div>
                        <div className="service-card">
                            <h3>Minor Service</h3>
                            <p>Includes oil change, filter replacements, and a general safety check.</p>
                        </div>
                        <div className="service-card">
                            <h3>Brake & Clutch</h3>
                            <p>Specialized services for brake and clutch repairs and replacements.</p>
                        </div>
                    </div>
                </section>
                <section className="testimonials">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonial-cards">
                        <div className="testimonial-card">
                            <p>"The best and most convenient car service I've ever used!"</p>
                            <h4>- Gusba Banana</h4>
                        </div>
                        <div className="testimonial-card">
                            <p>"Professional, reliable, and fair pricing. Highly recommended."</p>
                            <h4>- Ndivho Mudzanani</h4>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2025 Mobile Workshop Platform</p>
            </footer>
        </div>
    );
};

export default LandingPage;