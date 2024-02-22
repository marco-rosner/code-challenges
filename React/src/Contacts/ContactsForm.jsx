import { Button, Grid, TextField } from "@mui/material"
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
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"

            >
                <TextField
                    name="userName"
                    label="Name"
                    onChange={onChange}
                    value={formState.userName}
                    required
                />
                <TextField
                    name="phone"
                    label="Phone"
                    margin="normal"
                    onChange={onChange}
                    value={formState.phone}
                    required
                />
                <Button variant="contained" color="secondary" type="submit">Add</Button>
            </Grid>
        </form>
    )
}