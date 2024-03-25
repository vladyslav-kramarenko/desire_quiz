import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import ThankYouPage from './pages/ThankTouPage/ThankYouPage';
import {saveUTMParams} from "./util/saveUTMParams";
import PolicyPageUa from "./pages/PolicyPage/PolicyPageUa";
import PolicyPageEn from "./pages/PolicyPage/PolicyPageEn";
import PolicyPageRu from "./pages/PolicyPage/PolicyPageRu";
import PolicyPageTr from "./pages/PolicyPage/PolicyPageTr";
import {IntlProvider} from "react-intl";
import messages from "./util/i18n";
import {LocaleContext} from "./contexts/LocaleContext";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

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
                        <Route path="/policy" element={<PolicyPageUa/>} />
                        <Route path="/policy/en" element={<PolicyPageEn/>} />
                        <Route path="/policy/ua" element={<PolicyPageUa/>} />
                        <Route path="/policy/ru" element={<PolicyPageRu/>} />
                        <Route path="/policy/tr" element={<PolicyPageTr/>} />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Routes>
                </Router>
            </IntlProvider>
        </LocaleContext.Provider>
    );
}

export default App;
