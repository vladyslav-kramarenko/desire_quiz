import React from "react";
import './NotFoundPage.css'
import {Link} from "react-router-dom";
import {useIntl} from "react-intl";

const NotFoundPage = () => {
    const intl = useIntl();
    return (
        <main className="home-page">
            <div className="background-image">
                <h1 className="title">
                    {intl.formatMessage({id: 'pageNotFound'})}
                </h1>
                <p className="subtitle">
                    {intl.formatMessage({id: 'pageNotFoundDescription'})}
                </p>
                <Link to="/">
                    <button className="go-home-btn  orange-btn">
                        {intl.formatMessage({id: 'goHomeButton'})}
                    </button>
                </Link>
            </div>
        </main>
    );
};


export default NotFoundPage;
