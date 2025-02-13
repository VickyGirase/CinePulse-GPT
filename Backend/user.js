const mongoose = require("mongoose")
const validator = require("validator")


const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required: true
    },
    lastName: {
        type:String,
    },
    emailId :{
        type:String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error("use valid email id" + value)
            }
        },
    },
    password :{
        type:String,
        required : true,
        validate(value){
            if(!validator.isStrongPassword(value)) {
                throw new Error("Enter strong password" + value)
            }
        },
       
    },
    age :{
        type:Number,
    },
    gender :{
        type:String,
    },
},
{
    timestamps:true
})


module.exports = mongoose.model("User", userSchema)