import { useState } from "react";

const style = {
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
    }
};

const CORRECT = "Correct!"
const INCORRECT = "Incorrect!"

export const Question = ({ questions, setScore }) => {
    const [question, setQuestion] = useState(questions[0])
    const [answer, setAnswer] = useState('')
    const [next, setNext] = useState(1)

    const onClick = () => {
        if (answer === question.correct) {
            setScore(score => [...score, CORRECT])
        } else {
            setScore(score => [...score, INCORRECT])
        }

        setAnswer('')
        setNext(next + 1)

        // clear checked status from radio button options
        for (let i = 0; i < question.options.length; i++) {
            document.getElementById(`option${i}`).checked = false
        }

        if (next !== questions.length) {
            setQuestion(questions[next])
        }
    }

    return (
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
        </>
    )
}