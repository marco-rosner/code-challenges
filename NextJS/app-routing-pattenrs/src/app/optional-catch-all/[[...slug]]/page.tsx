import { WrapperContent } from "@/app/components/WrapperContent"

const Page = ({ params }: { params: { slug: string[] } }) => {
    return (
        <>
            <h1 className="flex justify-center m-10">Optional Catch All</h1>
            <WrapperContent>
                <pre>{JSON.stringify(params.slug, null, 2)}</pre>
            </WrapperContent>
        </>
    )
}

export default Page