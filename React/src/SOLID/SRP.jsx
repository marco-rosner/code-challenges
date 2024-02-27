// SRP - Single Responsability Principle
// Single propose, Low coupling, and High cohesion

import { useEffect } from "react"

export const RegularComponent = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch('...')
            .then((data) => data.json())
            .then(setItems)
            .catch((error) => {
                console.error(error)
                setError(!!error)
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) return (<>Loading...</>)

    return (
        <table>
            <th>
                <td>Name</td>
                <td>Birth</td>
            </th>
            {items.map(item => {
                <tr>
                    <td>{item.name}</td>
                    <td>{item.birth}</td>
                </tr>
            })}
        </table>
    )
}


// Splitting the Regular components in custom hook (useItems),
// View Compoennt (SRP Component) and Parent Component.
export const App = () => {
    const { items, loading, error } = useItems()

    if (loading) return (<>Loading...</>)

    return (
        <>
            <SRPComponent items={items} />
        </>
    )
}

export const SRPComponent = ({ items }) => {
    return (
        <table>
            <th>
                <td>Name</td>
                <td>Birth</td>
            </th>
            {items.map(item => {
                <tr>
                    <td>{item.name}</td>
                    <td>{item.birth}</td>
                </tr>
            })}
        </table>
    )
}