import { MongoClient } from "mongodb"
import { serverConfig } from "@/config/serverConfig"

/**
 * Explicit "connect()" call is not required
 * since 4.7
 * MongoClient manages its connection pool automatically
 * and 
 * 
 * TODO: errors could be better managed though
 * 
 */
export const client = new MongoClient(
    serverConfig.mongodbUri
)
export const db = client.db(serverConfig.mongodbDb)
console.log("Creating a new MongoClient and accessing db")
