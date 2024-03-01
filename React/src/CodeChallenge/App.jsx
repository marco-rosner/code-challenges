/* Part 1: 
* Display a list of users (name and email).
* Fetch data from https://jsonplaceholder.typicode.com/users/
*/

import { useFetch } from "./useFetch"
import { UserTable } from "./UserTable"

export const App = () => {

    const { data: users, isLoading, isError } = useFetch("https://jsonplaceholder.typicode.com/users/")

    if (isLoading) return <>Loading...</>

    return (
        isError ? (<>Error</>) : (<UserTable users={users} />)
    )
}

/* First solution to part 2
*
* const [postsCount, setPostCount] = useState([])
*
* useEffect(() => {
*     if (users.length === 0) return
*
*     Promise.all(usersPromises).then((posts) => setPostCount(posts))
* }, [users])
*/