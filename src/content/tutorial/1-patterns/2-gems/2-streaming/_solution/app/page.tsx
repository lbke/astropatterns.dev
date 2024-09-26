export default function FilePage() {
    return (
        <div>
            <h1>Streaming a private image</h1>
            {/** Will prevent any sort of caching on any browser */}
            <img src="/api/serve-picture?solved=1" />
        </div>
    )
}