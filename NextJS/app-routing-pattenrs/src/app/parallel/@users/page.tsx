import { WrapperContent } from "@/app/components/WrapperContent"

const UsersPage = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

    return (
        <>
            <h1 className="flex justify-center items-center m-10">Users</h1>
            <WrapperContent>
                <ul className="flex flex-col gap-2">
                    {users.map((user: { id: string, name: string, email: string }) => (
                        <li key={user.id}>
                            {`${user.name} - ${user.email}`}
                        </li>
                    ))}
                </ul>
            </WrapperContent>
        </>
    )
}

export default UsersPage