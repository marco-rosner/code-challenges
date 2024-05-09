export const Photo = async ({ imageId }: { imageId: string }) => {
    const photo = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${imageId}`,
    ).then((res) => res.json());

    const image = await fetch(photo.url)
        .then((res) => res.arrayBuffer())
        .then((value) => Buffer.from(value).toString('base64'));

    return <img src={`data:image/png;base64, ${image}`} alt={photo.title} />
}