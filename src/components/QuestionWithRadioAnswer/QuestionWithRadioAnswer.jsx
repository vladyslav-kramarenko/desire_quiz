import Button from "../Button/Button";
import {useEffect, useState} from "react";
import './QuestionWithRadioAnswer.css';

function QuestionWithRadioAnswer({question, possibleAnswers, setAnswers, currentQuestion, answers}) {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    useEffect(() => {
        setSelectedAnswer(answers[currentQuestion]);
    }, [currentQuestion, answers]);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer.text);
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [currentQuestion]: answer.text
        }));
    };

    return (
        <div className={"question-body"}>
            <h1 className={"question"}>{question}</h1>
            <div className={"answers"}>
                {possibleAnswers.map((answer, index) => (
                    <div className={"button-div"}>
                        <Button
                            key={index}
                            onClick={() => handleAnswerClick(answer)}
                            className={answer.text === selectedAnswer ? 'selected' : ''}
                        >
                            {answer.image && <img className={"question-img"} src={answer.image} alt={answer.text}/>}
                            {answer.text}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionWithRadioAnswer;