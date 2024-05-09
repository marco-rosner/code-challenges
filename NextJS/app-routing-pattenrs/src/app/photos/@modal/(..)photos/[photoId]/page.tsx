import { Modal } from "@/app/components/modal"
import { Photo } from "@/app/components/photo"
import { Suspense } from "react"

const InterceptedImage = ({ params }: { params: { photoId: string } }) => {
    return (
        <Modal title="Intercepted Route">
            <div className="min-h-[100px] flex items-center justify-center">
                <Suspense fallback={<>Loading...</>}>
                    {/* @ts-expect-error Async Server Component */}
                    <Photo imageId={params.photoId} />
                </Suspense>
            </div>
        </Modal>
    )
}

export default InterceptedImage