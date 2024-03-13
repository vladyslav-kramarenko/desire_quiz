import React from 'react';
import "./ThankYouPage.css";
const ThankYouPage = () => {
    return (
        <main className="thank-you-page">
            <div className="background-image">
                <h1 className="title">Дякуємо за заявку</h1>
                <p className="subtitle">Менеджер зв'яжеться з вами найближчим часом</p>
                <a className={"visit-website-link"} href={"https://desire-antalya.com"} >
                    <button className={"visit-website-btn orange-btn"}>Відвідати сайт</button>
                    </a>
            </div>
        </main>
    );
};

export default ThankYouPage;
