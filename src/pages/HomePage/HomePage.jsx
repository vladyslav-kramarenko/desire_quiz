import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <main className="home-page">
            <div className="background-image">
                <h1 className="title">Вигідні інвестиції у
                    нерухомість в Анталії 🇹🇷</h1>
                <p className="subtitle">Пройдіть опитування та дізнайтесь вартість об'єкту нерухомості.</p>
                <button className="start-quiz-btn">Почати опитування</button>
            </div>
        </main>
    );
}

export default HomePage;