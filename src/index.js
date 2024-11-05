//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";
import { app } from "./app.js";


dotenv.config({
    path: './env'
})


connectDB()
.then(() =>{
        app.on("error",(error)=>{
                         console.error("Error agaya",error);
        })
        app.listen(process.env.PORT || 8000, () =>{
            console.log(`server is listening on port : ${process.env.PORT}`);
        })
})
.catch( (err) =>{
    console.log("mongo db connec failed",err);
})




















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