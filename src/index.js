//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";


dotenv.config({
    path: './env'
})

connectDB();




















// import expresss from "express"

// const app = expresss()

// ( async () => {
//     try{
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error agaya",error);
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on ${process.env.PORT}`);
//         })

//     }catch(error){
//         console.error("Error agaya",error)
//         throw err
//     }
// } )()