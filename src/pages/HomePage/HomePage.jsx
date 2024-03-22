import React from 'react';
import './HomePage.css';
import {Link} from "react-router-dom";
import {useIntl} from "react-intl";
import LocaleSwitcher from "../../components/LocaleSwitcher";

function HomePage() {
    const intl = useIntl();
    return (
        <main className="home-page">
            <div className="background-image">
                <div className={"locale-switcher"}>
                    <LocaleSwitcher />
                </div>
                <h1 className="title">{intl.formatMessage({id: 'homeTitle'})} 🇹🇷</h1>
                <p className="subtitle">{intl.formatMessage({id: 'homeSubtitle'})}</p>

                <Link to="/questions">
                    <button className="start-quiz-btn orange-btn">
                        {intl.formatMessage({id: 'startQuizButton'})}
                    </button>
                </Link>

            </div>
        </main>
    );
}

export default HomePage;