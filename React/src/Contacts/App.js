import React, { useState } from "react";
import { ContactsForm } from "./ContactsForm";
import { ContactsTable } from "./ContactsTable";

const initialState = [{ userName: 'Jose', phone: 1235433}, { userName: 'Maria', phone: 4321 }]

export const App = () => {
  const [entries, setEntries] = useState(initialState);

  const addContacts = ({ userName, phone }) => {
    const newEntries = [
      ...entries,
      { userName, phone }
    ]

    newEntries.sort((a, b) => {
      const userNameA = a.userName.toLowerCase()
      const userNameB = b.userName.toLowerCase()

      if(userNameA > userNameB) return 1
      if(userNameA < userNameB) return -1
      return 0

    })

    setEntries(newEntries)
  }

  return (
    <div className="App">
      <ContactsForm addContacts={addContacts} />
      <ContactsTable entries={entries} />
    </div>
  );
}