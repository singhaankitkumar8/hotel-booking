import express from 'express'
import "dotenv/config";
import cors from "cors";
import connectDB from './configs/db.js'
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js'
import userRouter from './routes/userRoute.js';
import hotelRouter from './routes/hotelRoute.js';
import connectCloudinary from "./configs/cloudinary.js"
import roomRouter from './routes/roomRoute.js';
import bookingRouter from './routes/bookingRoute.js';
import { stripeWebhooks } from './controllers/stripeWebhooks.js';

// dotenv.config({
//     path:'./.env'
// })

connectDB()
connectCloudinary()

const app = express()

app.use(cors())    //Enable cross origin resource sharing


//Middlewares
app.use(express.json())
app.use(clerkMiddleware())     //clerk middleware

//API to listen to stripe webhook
app.post('/api/stripe', express.raw({type: "application/json"}),stripeWebhooks)

//API to listen to clerk webhook
app.use("/api/clerk" , clerkWebhooks)

app.get('/',(req , res) => res.send("Api is working..."))
app.use('/api/user' , userRouter)
app.use('/api/hotels',hotelRouter)
app.use('/api/rooms',roomRouter);
app.use('/api/bookings',bookingRouter)

const PORT = process.env.PORT || 8000;

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
})