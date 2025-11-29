import mongoose from "mongoose";

const MONGOURL = process.env.MONGO_URL || "mongodb://localhost:27017/Todowithnextjs"

if (!MONGOURL) throw new Error("Please define Mongo Url env variable ")

let cached = global.mongoose

if (!cached) {
    global.mongoose = { conn: null, promise: null }
    cached = global.mongoose
}

const ConnectDB = async () => {
    if (cached.conn) return cached.conn
    if (!cached.promise) {
        const opts = { bufferCommands: false }
        cached.promise = await mongoose.connect(MONGOURL, opts).then((mongoose) => {
            console.log("mongoDB connected");
            return mongoose
        })
    }

    cached.conn = cached.promise
    return cached.conn
}

export default ConnectDB