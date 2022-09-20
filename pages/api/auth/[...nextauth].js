import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.JWT_SECRET
});


// install next-auth
// buat .env dan file ini (dapatin credential di console > create credential (top))
// edit _app.js bungkus pakai sessionprovider
// buat pages/login.js