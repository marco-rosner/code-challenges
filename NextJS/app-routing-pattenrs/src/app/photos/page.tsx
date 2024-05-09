import { Photos } from "../components/photos"

const PhotosPage = () => {
    return (
        <>
            {/* @ts-expect-error Async Server Component */}
            <Photos title="Intercepted Route" page="photos" />
        </>
    )
}

export default PhotosPage