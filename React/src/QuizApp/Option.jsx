const style = {
    options: {
        marginBottom: '5px',
    }
}

export const Option = ({ opt, i, setAnswer }) => (
    <div style={style.options} >
        <input type="radio" id={`option${i}`} name="option" value={opt} onChange={() => setAnswer(opt)} />
        <label for={`option${i}`}>{opt}</label>
    </div>
)