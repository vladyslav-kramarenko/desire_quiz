import React from 'react';
import "./ThankYouPage.css";
const ThankYouPage = () => {
    function getUtmUrl() {
        let url = "https://desire-antalya.com/uk/";
        const params = {
            utm_source: localStorage.getItem('utm_source'),
            utm_medium: localStorage.getItem('utm_medium'),
            utm_campaign: localStorage.getItem('utm_campaign'),
            utm_term: localStorage.getItem('utm_term'),
            utm_content: localStorage.getItem('utm_content')
        };
        const urlParams = new URLSearchParams(params);
        if(urlParams.toString()) {
            url += "?" + urlParams.toString();
        }
        return url;
    }

    return (
        <main className="thank-you-page">
            <div className="background-image">
                <h1 className="title">Дякуємо за заявку</h1>
                <p className="subtitle">Менеджер зв'яжеться з вами найближчим часом</p>
                <a className={"visit-website-link"} href={getUtmUrl()} >
                    <button className={"visit-website-btn orange-btn"}>Відвідати сайт</button>
                    </a>
            </div>
        </main>
    );
};

export default ThankYouPage;
