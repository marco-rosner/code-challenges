import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useDebounce } from "../CustomHooks/useDebounce"
import { useUsers } from "./useUsers"

export const App = () => {
    const [users, setUsers] = useState([])
    const [order, setOrder] = useState('asc')
    const [searchTerm, setSearchTerm] = useState('')
    const { data } = useUsers()
    const searchTermDebounced = useDebounce(searchTerm)

    useEffect(() => {
        setUsers(data)
    }, [data])

    useEffect(() => {
        const filteredUsers = users.filter(
            user => user.name.toLowerCase().includes(searchTermDebounced.toLowerCase())
        )

        setUsers(searchTermDebounced === '' ? data : filteredUsers)
    }, [searchTermDebounced])

    const onChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSortClick = () => {
        if (order === 'asc') {
            const sortedUsers = users.sort((a, b) => b.name.localeCompare(a.name))
            setOrder('desc')
            setUsers(sortedUsers)
        } else {
            const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name))
            setOrder('asc')
            setUsers(sortedUsers)
        }
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh' }}
        >
            <Box sx={{ minHeight: '20vh' }}>
                <TextField label="Search users" onChange={onChange} />
            </Box>
            <Box sx={{ minHeight: '60vh', minWidth: '80vw' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={order === 'desc'}
                                    direction={order}
                                    onClick={onSortClick}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Mobile</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Grid>
    )
}