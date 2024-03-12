import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import ThankYouPage from './pages/ThankTouPage/ThankYouPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        saveUTMParams();
    }, []);
  return (
      <Router>
        <Header />
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/questions" element={<QuestionPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        <Footer />
      </Router>
  );
}

const saveUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    utmParams.forEach(param => {
        if (urlParams.has(param)) {
            localStorage.setItem(param, urlParams.get(param));
        }
    });
};

export default App;
