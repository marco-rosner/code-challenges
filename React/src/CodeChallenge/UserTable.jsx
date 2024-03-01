import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { TableUserInfo } from "./TableUserInfo"

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
                {users.map((user) => (
                    <TableUserInfo key={user.id} user={user} />
                ))}
            </TableBody>
        </Table>
    )
}