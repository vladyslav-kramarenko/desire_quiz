import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import ThankYouPage from './pages/ThankTouPage/ThankYouPage';
import PolicyPage from "./pages/PolicyPage/PolicyPage";
import {saveUTMParams} from "./util/saveUTMParams";
import {IntlProvider} from "react-intl";
import messages from "./util/i18n";
import {LocaleContext} from "./contexts/LocaleContext";

function App() {
    useEffect(() => {
        saveUTMParams();
    }, []);

    const [locale, setLocale] = useState(
        navigator.language.split('-')[0] in messages ? navigator.language.split('-')[0] : 'en'
    );

    return (
        <LocaleContext.Provider value={{locale, setLocale}}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<HomePage/>}/>
                        <Route path="/questions" element={<QuestionPage/>}/>
                        <Route path="/thank-you" element={<ThankYouPage/>}/>
                        <Route path="/policy" element={<PolicyPage/>}/>
                    </Routes>
                </Router>
            </IntlProvider>
        </LocaleContext.Provider>
    );
}

export default App;
