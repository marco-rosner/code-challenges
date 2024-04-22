import React, { useState } from 'react';

const style = {
    container: {
        padding: '20px',
        border: '1px solid #E0E0E0',
        borderRadius: '15px',
        width: 'max-content',
        marginBottom: '40px',
    },
    question: {
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    options: {
        marginBottom: '5px',
    },
    button: {
        marginTop: '10px',
        padding: '10px 15px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#FFF',
        fontSize: '14px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    feedback: {
        marginTop: '10px',
        fontSize: '14px',
    },
};

const CORRECT = "Correct!"
const INCORRECT = "Incorrect!"

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
    const [answer, setAnswer] = useState('')
    const [next, setNext] = useState(1)
    const [question, setQuestion] = useState(questions[0])


    const onClick = () => {
        if (answer === question.correct) {
            score.push(CORRECT)
        } else {
            score.push(INCORRECT)
        }

        setScore(score)
        setAnswer('')
        setNext(next + 1)

        // clear checked status from radio button options
        for (let i = 0; i < question.options.length; i++) {
            document.getElementById(`option${i}`).checked = false
        }

        if (next === questions.length) {
            setQuestion(null)
        } else {
            setQuestion(questions[next])
        }
    }

    return (
        <div style={style.container}>
            {question ?
                (
                    <>
                        <div id="question" style={style.question}>{question.question}</div>
                        {question.options.map((opt, i) => (
                            <div key={i}>
                                <div style={style.options} >
                                    <input type="radio" id={`option${i}`} name="option" value={opt} onChange={() => setAnswer(opt)} />
                                    <label for={`option${i}`}>{opt}</label>
                                </div>
                            </div>
                        ))
                        }
                        <button style={style.button} id="submitBtn" onClick={onClick}>
                            Submit
                        </button>
                        <div id="feedback" style={style.feedback}>{score[score.length - 1]}</div>
                    </>
                ) : (
                    <div>Quiz Complete! You scored {score.reduce((acc, cur) => cur === CORRECT ? acc + 1 : acc, 0)} out of {questions.length}!</div>
                )
            }
        </div>
    );
}