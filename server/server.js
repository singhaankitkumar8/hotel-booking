import express from 'express'
import "dotenv/config";
import cors from "cors";
import connectDB from './configs/db.js'
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js'

// dotenv.config({
//     path:'./.env'
// })

connectDB()

const app = express()

app.use(cors())    //Enable cross origin resource sharing


//Middlewares
app.use(express.json())
app.use(clerkMiddleware())     //clerk middleware

//API to listen to clerk webhook
app.use("/api/clerk" , clerkWebhooks)

app.get('/',(req , res) => res.send("Api is working..."))

const PORT = process.env.PORT || 8000;

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
})