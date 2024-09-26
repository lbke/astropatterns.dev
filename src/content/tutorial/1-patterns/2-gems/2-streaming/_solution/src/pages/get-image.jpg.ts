
import fs from "fs/promises"
import path from "path"

/**
 * You can add some advanced authorization logic here.
 */
export async function isAllowed(request: Request) {
    return true
}

export async function GET(request: Request) {
    console.log("Getting image from endpoint")
    if (!(await isAllowed(request))) {
        return new Response(null, { status: 403 })
    }
    // Photo from Josh Sorenson: https://www.pexels.com/fr-fr/photo/moniteur-d-ordinateur-a-ecran-plat-noir-1714208/
    // This is a hacky way to have an image file in a known folder,
    // your real file should NOT be in the "public" folder
    const filePath = path.resolve("./public/image.jpg")
    console.log("Opening file", filePath)
    const stats = await fs.stat(filePath);
    const fileHandle = await fs.open(filePath)
    const stream = fileHandle.readableWebStream(
        { type: "bytes" }
    )
    // Optionnaly: use "waitUntil" function from your hosting provider
    // to close the file after the stream has been consumed

    // At the time of writing (09/2024) there is a tiny issue with typings
    // @ts-ignore see https://github.com/nodejs/node/issues/54041#issuecomment-2260420439
    return new Response(stream, {
        status: 200,
        headers: new Headers({
            // we could get the mimetype automatically
            "content-type": "image/jpeg",
            "content-length": stats.size + "",
            // this is just so the image is not cached during practice
            // remove this header in production
            "cache-control": "no-store"
        })

    })
}