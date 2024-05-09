import { WrapperContent } from "@/app/components/WrapperContent"

const AlbumsPage = async () => {
    const albumsRaw = await fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json())

    const albums = albumsRaw.slice(0, 10)

    return (
        <>
            <h1 className="flex justify-center items-center m-10">Albums</h1>
            <WrapperContent>
                <ul className="flex flex-col gap-2">
                    {albums.map((album: { id: string, title: string }) => (
                        <li key={album.id}>
                            {album.title}
                        </li>
                    ))}
                </ul>
            </WrapperContent>
        </>
    )
}

export default AlbumsPage