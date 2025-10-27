import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();    //χρησιμοποιώ το dotenv 

const MONGO_URI = process.env.MONGO_URI || "mystring"   //διαβάζω τα environmental variables μες το .env , αν δεν υπάρχει τιμή παίρνει mystring 
export const connectDB = async() => { 
    try {
        await mongoose.connect(MONGO_URI) //connection string 
        console.log("MongoDB connected")
    }catch (err) {
        console.log("MongoDB connection error:", err)
        process.exit(1)
    }
}