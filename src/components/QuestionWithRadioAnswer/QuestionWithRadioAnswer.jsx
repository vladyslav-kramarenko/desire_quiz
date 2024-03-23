import Button from "../Button/Button";
import './QuestionWithRadioAnswer.css';
import {useIntl} from "react-intl";

function QuestionWithRadioAnswer({questionId, possibleAnswers, setAnswers, answers}) {
    const intl = useIntl();


    const selectedAnswerId = answers[questionId];

    const handleAnswerClick = (selectedAnswerId) => {
        setAnswers(currentAnswers => ({
            ...currentAnswers,
            [questionId]: selectedAnswerId,
        }));
    };

    return (
        <div className="question-body">
            <h1 className="question">{intl.formatMessage({id: questionId})}</h1>
            <div className="answers">
                {possibleAnswers.map((answer, index) => (
                    <div key={index} className="button-div">
                        <Button
                            onClick={() => handleAnswerClick(answer.id)}
                            className={selectedAnswerId === answer.id ? 'selected' : ''}
                        >
                            {answer.image &&
                                <img
                                    className="question-img"
                                    src={answer.image}
                                    alt={intl.formatMessage({id: answer.id})}
                                />
                            }
                            {intl.formatMessage({id: answer.id})}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionWithRadioAnswer;