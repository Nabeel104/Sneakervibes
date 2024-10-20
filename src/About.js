import React from "react";
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-intro">
                Welcome to <strong>SneakerVibes</strong>, your ultimate destination for authentic and stylish sneakers. 
                Founded by college students with a shared passion for footwear, we aim to bring the best sneaker trends 
                directly to you.
            </p>

            <div className="about-section">
                <h2 className="section-title">Our Story</h2>
                <p>
                    SneakerVibes was born out of a college project and a love for sneakers. What started as a simple 
                    idea among friends quickly turned into a full-fledged business. Nabeel Siddiqui and Aarpit Vaghela, 
                    both avid sneaker enthusiasts, decided to turn their passion into a profession. They envisioned a platform 
                    that would not only offer exclusive sneakers but also foster a community of sneaker lovers.
                </p>
            </div>

            <div className="about-section">
                <h2 className="section-title">Our Mission</h2>
                <p>
                    Our mission is to provide sneaker lovers with a curated collection of authentic sneakers from various brands. 
                    We strive to ensure that our customers have access to the latest trends and the most iconic footwear in the market.
                </p>
            </div>

            <div className="about-section">
                <h2 className="section-title">Why Choose Us?</h2>
                <ul className="about-list">
                    <li>💯 <strong>Authenticity Guaranteed</strong> - We ensure every sneaker we sell is 100% authentic.</li>
                    <li>🚚 <strong>Fast & Reliable Shipping</strong> - Enjoy swift delivery right to your doorstep.</li>
                    <li>🌍 <strong>Global Reach</strong> - We ship our sneakers worldwide, so everyone can enjoy them.</li>
                    <li>💬 <strong>Community Focused</strong> - Join a growing community of sneaker enthusiasts!</li>
                </ul>
            </div>

            <div className="about-founders">
                <h2 className="section-title">Meet the Founders</h2>
                <div className="founder-description">
                    <p>
                        <strong>Nabeel Siddiqui</strong> - A passionate sneakerhead and entrepreneur, Nabeel believes that 
                        sneakers are not just footwear, but a lifestyle. His vision is to make sneaker culture accessible to everyone.
                    </p>
                    <p>
                        <strong>Aarpit Vaghela</strong> - A creative thinker and designer, Aarpit aims to bring unique 
                        styles to the sneaker market. He is dedicated to curating the finest selections for sneaker enthusiasts.
                    </p>
                </div>
            </div>

            <p className="about-signature">- The SneakerVibes Team</p>
        </div>
    );
};

export default About;
