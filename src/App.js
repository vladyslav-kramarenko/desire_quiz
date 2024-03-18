import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import ThankYouPage from './pages/ThankTouPage/ThankYouPage';
import PolicyPage from "./pages/PolicyPage/PolicyPage";
import {saveUTMParams} from "./saveUTMParams";

function App() {
    useEffect(() => {
        saveUTMParams();
    }, []);
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/questions" element={<QuestionPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/policy" element={<PolicyPage />} />
          </Routes>
      </Router>
  );
}

export default App;
