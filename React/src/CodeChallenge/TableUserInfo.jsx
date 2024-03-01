/* Part 2: 
Display number of posts in place of email in the list.
Fetch posts per user from https://jsonplaceholder.typicode.com/users/:userID/posts
*/

import { TableCell, TableRow } from "@mui/material"
import { useFetch } from "./useFetch"

export const TableUserInfo = ({ user }) => {
    const { data: posts, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)

    return (
        <TableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>{isLoading ? 'Loading' : isError ? 'Try again' : posts.length}</TableCell>
        </TableRow>
    )
}