import React from 'react';
import './HomePage.css';
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <main className="home-page">
            <div className="background-image">
                <h1 className="title">Вигідні інвестиції у
                    нерухомість в Анталії 🇹🇷</h1>
                <p className="subtitle">Пройдіть опитування та дізнайтесь вартість об'єкту нерухомості.</p>

                <Link to="/questions">
                    <button className="start-quiz-btn">Почати опитування</button>
                </Link>
            </div>
        </main>
    );
}

export default HomePage;