import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export const ContactsTable = ({ entries }) => {
    return (
        <Paper sx={{ width: '50%', my: 10 }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map(({ userName, phone }, i) => {
                            return (
                                <TableRow hover key={`${i}`}>
                                    <TableCell align="center">{userName}</TableCell>
                                    <TableCell align="center">{phone}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}