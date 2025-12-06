import ConnectDB from "@/lib/mongodb"
import User from "@/model/User"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"


const AuthOption = {
    providers: [
        Credentials({
            name: "credentials",
            async authorize(credentials) {
                try {

                    await ConnectDB()

                    const user = await User.findOne({ email: credentials.email.toLowerCase().trim() }).select("+password")
                    if (!user) throw new Error("Invalid Email or Password")
                    const ispasswordvalid = await user.ComparePass(credentials.password)
                    if (!ispasswordvalid) throw new Error("Invalid Password !!")

                    return { id: user._id.toString(), name: user.name, email: user.email }

                } catch (err) {
                    console.log("Login Error :", err.message);
                    throw new Error(err.message || 'Authentication failed');
                }
            }
        })
    ],

    session: {
        strategy: "jwt", maxAge: 60 * 60
    },

    jwt: { maxAge: 60 * 60 },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                    token.name = user.name ;
                    token.email = user.email
            }
            return token
        },
        async session({ session, token }) {


            if (token && session.user) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email
            }
            return session
        }
    },

    pages: {
        signIn: "/login",
        error: "/login",
    },
    debug: process.env.NODE_ENV === "development",
    secret: process.env.NEXTAUTH_SECRET

}

const handle = NextAuth(AuthOption)
export { handle as GET, handle as POST }