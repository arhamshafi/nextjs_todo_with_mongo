import ConnectDB from "@/lib/mongodb"
import User from "@/model/User"
import { NextResponse } from "next/server"


export const POST = async (req) => {
    try {

        await ConnectDB()
        const body = await req.json()
        console.log(body);
        
        const existingUser = await User.findOne({ email: body.email.toLowerCase() })
        if (existingUser) return NextResponse.json({ success: false, message: "This Email Already Exists" } , {status : 400} )

        const newuser = await User.create({
            name: body.name.trim(),
            email: body.email.toLowerCase().trim(),
            number: body.number.trim(),
            password: body.password.trim()
        })
        // console.log( "new user here" , newuser)
        

        return NextResponse.json({ success: true, user: { name: newuser.name, email: newuser.email } } , {status : 200})

    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return NextResponse.json(
                { success: false, message: messages.join(', ') },
                { status: 400 }
            )
        }
        return NextResponse.json({ success: false, message: "internal Server Error" }, { status: 500 })
    }
}