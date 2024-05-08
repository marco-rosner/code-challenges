import { WrapperContent } from "@/app/components/WrapperContent"

const Page = async ({ params }: { params: { postId: string } }) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then(res => res.json())

    return (
        <WrapperContent>
            <span>{post.title}</span>
        </WrapperContent>
    )
}

export default Page