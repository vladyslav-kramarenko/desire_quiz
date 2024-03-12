import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import ThankYouPage from './pages/ThankYouPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Header />
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/questions" element={<QuestionPage />} />
              <Route path="/thankyou" element={<ThankYouPage />} />
          </Routes>
        <Footer />
      </Router>
  );
}

export default App;
