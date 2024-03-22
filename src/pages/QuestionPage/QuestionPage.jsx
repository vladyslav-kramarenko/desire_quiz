import React, {useState} from 'react';
import './QuestionPage.css';
import hotel from './hotel.jpg';
import flat from './flat.jpg';
import penthouse from './penthouse.jpg';

import ArrowButton from "../../components/ArrowButton/ArrowButton";
import QuestionWithRadioAnswer from "../../components/QuestionWithRadioAnswer/QuestionWithRadioAnswer";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

import {useIntl} from "react-intl";

const QuestionPage = () => {
    const intl = useIntl();
    const [answers, setAnswers] = useState({});
    const questions = [
        {
            id: 'purposeQuestion',
            answers: [
                { id: 'purposeAnswer1', image: '' },
                { id: 'purposeAnswer2', image: '' },
            ],
        },
        {
            id: 'investExperienceQuestion',
            answers: [
                { id: 'investExperienceAnswer1', image: '' },
                { id: 'investExperienceAnswer2', image: '' },
            ],
        },
        {
            id: 'propertyTypeQuestion',
            answers: [
                { id: 'propertyTypeAnswer1', image: hotel },
                { id: 'propertyTypeAnswer2', image: flat },
                { id: 'propertyTypeAnswer3', image: penthouse },
            ],
        },
    ];

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
            {currentQuestionIndex < questions.length ? (
                <QuestionWithRadioAnswer
                    question={intl.formatMessage({ id: questions[currentQuestionIndex].id })}
                    possibleAnswers={questions[currentQuestionIndex].answers.map(answer => ({
                        text: intl.formatMessage({ id: answer.id }),
                        image: answer.image,
                    }))}
                    setAnswers={(selectedAnswer) => setAnswers({...answers, [questions[currentQuestionIndex].id]: selectedAnswer})}
                    currentQuestion={questions[currentQuestionIndex].id}
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
