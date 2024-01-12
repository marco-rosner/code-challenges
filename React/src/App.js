import React, { useState } from "react";
import { ContactsForm } from "./ContactsForm";

export const App = () => {
  const [entries, setEntries] = useState([{ name: 'Jose', phone: 1235433}, { name: 'Maria', phone: 4321 }]);

  const addContacts = ({ name, phone }) => {
    const newEntries = [
      ...entries,
      { name, phone }
    ]

    newEntries.sort((a, b) => {
      const userNameA = a.name.toLowerCase()
      const userNameB = b.name.toLowerCase()

      if(userNameA > userNameB) return 1
      if(userNameA < userNameB) return -1
      return 0

    })

    // setEntries(newEntries)
    console.log(newEntries)
  }

  return (
    <div className="App">
      <ContactsForm addContacts={addContacts} />
    </div>
  );
}