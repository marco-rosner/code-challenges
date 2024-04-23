import React, { useState } from 'react';
import { Question } from './Question';
import { Result } from './Result';

const style = {
    container: {
        padding: '20px',
        border: '1px solid #E0E0E0',
        borderRadius: '15px',
        width: 'max-content',
        marginBottom: '40px',
    },
    feedback: {
        marginTop: '10px',
        fontSize: '14px',
    }
};

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        correct: 'Paris',
    },
    {
        question: 'What is the capital of Germany?',
        options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
        correct: 'Berlin',
    },
];

export const App = () => {
    const [score, setScore] = useState([])

    return (
        <div style={style.container}>
            {score.length !== questions.length ?
                (<>
                    <Question questions={questions} setScore={setScore} />
                    <div id="feedback" style={style.feedback}>{score[score.length - 1]}</div>
                </>) :
                (<Result score={score} questionTotal={questions.length} />)
            }
        </div >
    );
}