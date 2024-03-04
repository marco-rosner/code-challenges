import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { UserPostCountCell } from "./UserPostCountCell"

export const UserTable = ({ users }) => {

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Numbers of Posts</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>{user.name}</TableCell>
                    {users.map((user) => (
                        <UserPostCountCell key={user.id} user={user} />
                    ))}
                </TableRow>
            </TableBody>
        </Table>
    )
}