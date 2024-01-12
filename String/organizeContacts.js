function organizeContacts(contacts) {
    contacts.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1

        return 0
    })

    return contacts
}

contactsUnsorted = [
    {
        name: 'Marco',
        phone: 12343
    },
    {
        name: 'João',
        phone: 64534
    },
    {
        name: 'Maria',
        phone: 43214
    },
    {
        name: 'Zezo',
        phone: 42345
    }
]

console.log('result >', organizeContacts(contactsUnsorted))

