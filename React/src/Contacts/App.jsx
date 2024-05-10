import { Grid } from "@mui/material";
import React, { useState } from "react";
import { ContactsForm } from "./ContactsForm";
import { ContactsTable } from "./ContactsTable";

const initialState = [{ userName: 'Jose', phone: 1235433 }, { userName: 'Maria', phone: 4321 }]

export const App = () => {
  const [entries, setEntries] = useState(initialState);

  const addContacts = ({ userName, phone }) => {
    const newEntries = [...entries, { userName, phone }]

    newEntries.sort((a, b) => a.userName.localeCompare(b.userName))

    setEntries(newEntries)
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
      <ContactsForm addContacts={addContacts} />
      <ContactsTable entries={entries} />
    </Grid>
  );
}