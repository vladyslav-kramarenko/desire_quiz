import React from 'react';
import "./ThankYouPage.css";
import {useIntl} from "react-intl";
const ThankYouPage = () => {
    const intl = useIntl();
    function getUtmUrl() {
        const languagePath = {
            en: '',
            ua: '/uk',
            ru: '/ru',
            tr: '/tr',
        };
        let basePath = `https://desire-antalya.com${languagePath[intl.locale] || ''}/`;

        const params = {
            utm_source: localStorage.getItem('utm_source'),
            utm_medium: localStorage.getItem('utm_medium'),
            utm_campaign: localStorage.getItem('utm_campaign'),
            utm_term: localStorage.getItem('utm_term'),
            utm_content: localStorage.getItem('utm_content')
        };
        const urlParams = new URLSearchParams(params);

        return basePath + (urlParams.toString() ? "?" + urlParams.toString() : '');
    }

    return (
        <main className="thank-you-page">
            <div className="background-image">
                <h1 className="title">{intl.formatMessage({id: 'thankYouTitle'})}</h1>
                <p className="subtitle">{intl.formatMessage({id: 'thankYouSubtitle'})}</p>
                <a className="visit-website-link" href={getUtmUrl()}>
                    <button
                        className="visit-website-btn orange-btn">
                        {intl.formatMessage({id: 'visitSiteButton'})}
                    </button>
                </a>
            </div>
        </main>
    );
};

export default ThankYouPage;
