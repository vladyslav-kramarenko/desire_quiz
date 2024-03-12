import React, {useState} from 'react';
import './QuestionPage.css';
import hotel from './hotel.jpg';
import flat from './flat.jpg';
import penthouse from './penthouse.jpg';

import ArrowButton from "../../components/ArrowButton/ArrowButton";
import QuestionWithRadioAnswer from "../../components/QuestionWithRadioAnswer/QuestionWithRadioAnswer";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

const QuestionPage = () => {
    const [answers, setAnswers] = useState({
        purpose: '',
        investExperience: '',
        type: '',
        name: '',
        phone: ''
    });

    const [currentQuestion, setCurrentQuestion] = useState(1);

    const renderQuestion = () => {
        switch (currentQuestion) {
            case 1:
                return <QuestionWithRadioAnswer
                    question="ДЛЯ ЯКИХ ЦІЛЕЙ РОЗГЛЯДАЄТЕ НЕРУХОМІСТЬ?"
                    possibleAnswers={[
                        {text: 'Для життя', image: ''},
                        {text: 'Для інвестиції', image: ''}
                    ]}
                    setAnswers={setAnswers}
                    currentQuestion="purpose"
                    answers={answers}
                />
            case 2:
                return <QuestionWithRadioAnswer
                    question="ІНВЕСТУВАЛИ В ЗАКОРДОННУ НЕРУХОМІСТЬ РАНІШЕ?"
                    possibleAnswers={[
                        {text: 'Так', image: ''},
                        {text: 'Ні', image: ''}
                    ]}
                    setAnswers={setAnswers}
                    currentQuestion="investExperience"
                    answers={answers}
                />
            case 3:
                return <QuestionWithRadioAnswer
                    question="ЯКИЙ ТИП НЕРУХОМОСТІ ВАС ЦІКАВИТЬ?"
                    possibleAnswers={[
                        {text: 'Готельні номери', image: hotel},
                        {text: 'Квартира', image: flat},
                        {text: 'Пентхаус', image: penthouse}
                    ]}
                    setAnswers={setAnswers}
                    currentQuestion="type"
                    answers={answers}
                />
            default:
                return null;
        }
    }

    const isAnswerChosen = () => {
        let currentAnswerKey;
        switch (currentQuestion) {
            case 1:
                currentAnswerKey = 'purpose';
                break;
            case 2:
                currentAnswerKey = 'investExperience';
                break;
            case 3:
                currentAnswerKey = 'type';
                break;
            default:
                return false;
        }
        const currentAnswer = answers[currentAnswerKey];
        return currentAnswer !== '';
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const renderContactInfo = () => {
        return (
            <ContactInfo/>
        );
    };

    const renderArrows = () => {
        return (
            <div className={"arrows"}>
                <ArrowButton
                    variant={"secondary"}
                    direction={"backward"}
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    disabled={currentQuestion === 1}
                />
                <ArrowButton
                    variant={"primary"}
                    direction={"forward"}
                    onClick={handleNextClick}
                />
            </div>
        );
    };

    const handleNextClick = () => {
        if (!isAnswerChosen()) {
            setIsModalOpen(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    return (
        <main className={"questions-page"}>
            {currentQuestion <= 3 ? renderQuestion() : renderContactInfo()}
            {currentQuestion <= 3 && renderArrows()}
            <ModalMessage
                isOpen={isModalOpen}
                message="Виберіть відповідь, перш ніж продовжити."
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
};

export default QuestionPage;
