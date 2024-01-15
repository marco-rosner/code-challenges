export const ContactsTable = ({ entries }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {entries.map(({ userName, phone}) => {
                    return (
                        <tr>
                            <td>{userName}</td>
                            <td>{phone}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}