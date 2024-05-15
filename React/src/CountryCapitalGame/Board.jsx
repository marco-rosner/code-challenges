import React, { useState, useEffect } from "react";
import { Button } from "./Button";

export const CountryCapitalGame = ({ data }) => {
    const countries = Object.keys(data)
    const capitals = Object.values(data)
    const [randomData, setRandomData] = useState([...capitals, ...countries].sort(() => 0.5 - Math.random()))
    const [choices, setChoices] = useState([])
    const [isWrong, setIsWrong] = useState(false)

    const isSelected = (item) => choices.find((val) => val === item)

    const onClick = (dataSelected) => setChoices((prev) => [...prev, dataSelected])

    const onSelect = () => {
        const isChoicesCorrect = data[choices[0]]?.includes(choices[1]) || data[choices[1]]?.includes(choices[0])
        const isSameAnswer = choices[0]?.includes(choices[1])

        if (choices.length === 2) {
            isChoicesCorrect ?
                setRandomData((prev) => prev.filter((val) => !val.includes(choices[0]) && !val.includes(choices[1]))) :
                setIsWrong(isSameAnswer ? false : true)
        }

        if (choices.length === 3) {
            setIsWrong(false)
            setChoices([choices[2]])
        }

    }

    useEffect(() => onSelect(), [choices])

    return (
        <>
            {
                randomData.length === 0 ?
                    (<span>Congratulations</span>) :
                    randomData.map(item => (
                        <Button item={item} isWrong={isWrong} isSelected={isSelected} onClick={onClick} />
                    ))
            }
        </>
    )
}