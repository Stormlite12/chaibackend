import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
import jwt from "jsonwebtoken"
import becrypt from "becrypt"

const videoSchema = new Schema(
    {
        videoFile:{
            type:String, //cloudinary URL (cloud hosting)
            required:true
        },
        thumbnail:{
            type:String, //cloudinary URL (cloud hosting)
            required:true  
        },
        title:{
            type:String, 
            required:true
        },
        description:{
            type:String, //cloudinary URL (cloud hosting)
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
            type:Number,
            default:0,
            required:true
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    
    },{timestamps:true})


videoSchema.plugin(mongooseAggregatePaginate)    


export const Video = mongoose.model("Video",videoSchema)