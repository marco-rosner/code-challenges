import Link from "../../../node_modules/next/link"
import { WrapperContent } from "../components/WrapperContent"

const Page = async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())

    return (
        <>
            <h1 className="flex justify-center m-10">Posts</h1>
            <WrapperContent>
                <ul className="flex flex-col gap-2">
                    {posts.map((post: { id: string, title: string }) => (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </WrapperContent>
        </>
    )
}

export default Page