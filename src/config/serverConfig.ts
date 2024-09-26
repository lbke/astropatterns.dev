// Copy ".env.example" to ".env" to define environment variables
// https://docs.astro.build/en/reference/api-reference/#importmeta
// Astro adds imports.meta.env via Vite
// https://vitejs.dev/guide/env-and-mode
if (!import.meta.env.MONGODB_URI) {
    throw new Error("MONGODB_URI not set")
}
export const serverConfig = {
    mongodbUri: import.meta.env.MONGODB_URI!,
    mongodbDb: import.meta.env.MONGODB_DB!,
    isProd: import.meta.env.NODE_ENV === "production"
}