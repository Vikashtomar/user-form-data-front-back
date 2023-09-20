import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        maxLength: 50,
        minLength:1,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        maxLength: 50,
        minLength: 1,
    },
    password:{
        type:String,
        required:true,
        unique:false,
        maxLength: 50,
        minLength:5,
    },
   number:{
        type:Number,
        required:true,
        unique:false,
        maxLength: 20,
        minLength:5,
    },
        

})

const user =  mongoose.model ('user',userSchema)
export default user;
