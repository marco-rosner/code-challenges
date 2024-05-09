import { Photo } from "@/app/components/photo"

const Image = async ({ params }: { params: { photoId: string } }) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.photoId}`).then(res => res.json())

    return (
        <>
            <h1>Photo Route</h1>
            <div className="w-[600px] self-center">
                {/* @ts-expect-error Async Server Component */}
                <Photo imageId={params.photoId} />
            </div>
        </>
    )
}

export default Image