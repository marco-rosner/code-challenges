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

    newEntries.sort((a, b) => a.userName.localeCompare(b.userName))

    setEntries(newEntries)
  }

  return (
    <div className="App">
      <ContactsForm addContacts={addContacts} />
      <ContactsTable entries={entries} />
    </div>
  );
}