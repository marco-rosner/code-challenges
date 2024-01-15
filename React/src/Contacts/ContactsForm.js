import { useReducer } from "react"

export const ContactsForm = ({ addContacts }) => {
    const initialState = { userName: '', phone: '' }

    const formReducer = (state, { type, payload }) => {
        switch (type) {
            case "RESET":
                return initialState
            default:
                return { ...state, [type]: payload }
        }
    }

    const [formState, dispatch] = useReducer(formReducer, initialState)

    const onChange = ({ target: { name, value } }) => dispatch({ type: name, payload: value })

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                addContacts(formState)
                dispatch({ type: "RESET" })
            }}
        >
            <label>Name:</label>
            <br />
            <input name="userName" onChange={onChange} value={formState.userName} />
            <br />
            <label>Phone:</label>
            <br />
            <input name="phone" onChange={onChange} value={formState.phone} />
            <br />
            <input type="submit" value="Add" />
        </form>
    )
}