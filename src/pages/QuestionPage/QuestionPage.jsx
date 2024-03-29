import React, {useState} from 'react';
import './QuestionPage.css';

import ArrowButton from "../../components/ArrowButton/ArrowButton";
import QuestionWithRadioAnswer from "../../components/QuestionWithRadioAnswer/QuestionWithRadioAnswer";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

import {useIntl} from "react-intl";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import questionsData from '../../data/questionsData'; // Adjust path as necessary

const QuestionPage = () => {
    const intl = useIntl();
    const [answers, setAnswers] = useState({});
    const questions = questionsData;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];

    const isAnswerChosen = () => {
        const currentAnswer = answers[currentQuestion.id];
        return currentAnswer !== undefined && currentAnswer !== '';
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const renderContactInfo = () => {
        return (
            <ContactInfo answers={answers}/>
        );
    };

    const renderArrows = () => {
        return (
            <div className="arrows">
                <ArrowButton
                    variant="secondary"
                    direction="backward"
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                    disabled={currentQuestionIndex === 0}
                />
                <ArrowButton
                    variant="primary"
                    direction="forward"
                    onClick={handleNextClick}
                    disabled={currentQuestionIndex >= questions.length}
                />
            </div>
        );
    };

    const handleNextClick = () => {
        if (!isAnswerChosen()) {
            setIsModalOpen(true);
        } else
            setCurrentQuestionIndex(currentQuestionIndex + 1);
    };


    return (
        <main className="questions-page">
            {currentQuestionIndex < questions.length && (
                <ProgressBar currentStep={currentQuestionIndex + 1} totalSteps={questions.length}/>
            )}

            {currentQuestionIndex < questions.length ? (
                <QuestionWithRadioAnswer
                    questionId={questions[currentQuestionIndex].id}
                    possibleAnswers={questions[currentQuestionIndex].answers}
                    setAnswers={setAnswers}
                    answers={answers}
                />
            ) : renderContactInfo()}

            {currentQuestionIndex < questions.length && renderArrows()}

            <ModalMessage
                isOpen={isModalOpen}
                message={intl.formatMessage({id: 'answerNotChosenModal'})}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );


};

export default QuestionPage;
