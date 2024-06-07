import React, { useState } from 'react'

export const App = () => {
    const [nums, setNums] = useState([])
    const [dial, setDial] = useState('')
    const [op, setOp] = useState('')

    const onClickNum = (e) => {
        setDial(prev => prev + e.target.textContent)
    }

    const onClickOp = (e) => {
        setOp(e.target.textContent)
        setNums(prev => [...prev, Number(dial)])
        setDial('')
    }

    const onClickEquals = () => {
        setNums(prev => [...prev, Number(dial)])
        const numsOp = [...nums, Number(dial)]

        const result = numsOp.reduce((acc, cur) => {
            switch (op) {
                case '+':
                    return acc + cur
                case '-':
                    return acc - cur
                case 'x':
                    return acc * cur
                case '/':
                    return acc / cur
            }
        })

        setDial(result)
    }

    const onClickClear = () => {
        setNums([])
        setDial('')
    }

    return (
        <div className="app">
            <div className="header">
                <div>
                    <span>React App</span>
                </div>
            </div>
            <div className="content">
                <input type="text" id="num1" name="num1" value={dial} />
                <div>
                    <button onClick={onClickNum}>1</button>
                    <button onClick={onClickNum}>2</button>
                    <button onClick={onClickNum}>3</button>
                    <button onClick={onClickOp}>/</button>
                </div>
                <div>
                    <button onClick={onClickNum}>4</button>
                    <button onClick={onClickNum}>5</button>
                    <button onClick={onClickNum}>6</button>
                    <button onClick={onClickOp}>x</button>
                </div>
                <div>
                    <button onClick={onClickNum}>7</button>
                    <button onClick={onClickNum}>8</button>
                    <button onClick={onClickNum}>9</button>
                    <button onClick={onClickOp}>-</button>
                </div>
                <div>
                    <button onClick={onClickNum}>0</button>
                    <button onClick={onClickNum}>.</button>
                    <button onClick={onClickOp}>+</button>
                    <button onClick={onClickEquals}>=</button>
                    <button onClick={onClickClear}>c</button>
                </div>
            </div>
            <div className="footer">
                Made by Marco Rosner
            </div>
        </div>
    )
}