import { useEffect, useRef, useState } from "react"

export const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState('')
    const timeRef = useRef()

    useEffect(() => {
        timeRef.current = setTimeout(() => setDebouncedValue(value), delay)

        return () => clearTimeout(timeRef.current)
    }, [value, delay])

    return debouncedValue
}