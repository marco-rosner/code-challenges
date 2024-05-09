const Layout = ({ children, users, albums }: { children: React.ReactElement, users: React.ReactElement, albums: React.ReactElement }) => {
    return (
        <>
            <h1 className="flex justify-center m-10">Parallel Layout</h1>

            {children}

            <div className="flex gap-4 p-4 justify-around">
                {users}
                {albums}
            </div>
        </>
    )
}

export default Layout