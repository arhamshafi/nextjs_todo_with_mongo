import ConnectDB from "@/config/mongodb"
import todoSchema from "@/model/todoSchema"
import { NextResponse } from "next/server"


export const POST = async (req) => {
    try {

        await ConnectDB()
        const { inp } = await req.json()
        if (!inp.trim()) return NextResponse.json({ success: false, err: "Title is required" }, { status: 400 })

        await todoSchema.create({ title: inp.trim() })
        return NextResponse.json({ success: true, message: "Todo Created" })
    } catch (err) {
        return NextResponse.json({ success: false, err: "Failed to fecth todos" }, { status: 400 })
    }
}

export const GET = async () => {
    try{

        await ConnectDB()
        const todos = await todoSchema.find({}).sort({ createdAt : -1 })
        return NextResponse.json({ success : true , todos})
    } catch(err){
        return NextResponse.json({success : false , err : "Error While Getting"})
    }
}