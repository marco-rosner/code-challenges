import { useEffect } from "react"

export const ContactsForm = ({ addContacts }) => {
    
    useEffect(() => {
        addContacts({ name: 'Marco', phone: 123432})
    })

    return (
        <b> ContactsForm </b>
    )
}