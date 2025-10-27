import {Schema, model} from "mongoose";

const PhoneSchema = new Schema({
    type:String, 
    number:String
    },
    {_id:false} // αν δεν θέλω να μπαίνει το πεδίο Id σε κάθε νέα εγγραφή phone 
)

const UserSchema = new Schema({
    username: {
        type:String,
        required:[true,"Username is required field"],
        unique:true, 
        max:20,
        min:4, 
        trim:true, 
        lowercase:true},
    password: {type:String, required:true},
    firstname: {type:String},
    lastname: {type:String},
    email: {type:String, index: true },
    address: {          //1ος τρόπος (δήλωση κατευθείαν στο πεδίο)
        area:String ,
        street:String ,
        number:String ,
        po:String,
        municipality: String 
    },
    phone: {type:[PhoneSchema] , null : true}     //2ος τρόπος (δήλωση ως schema πιο πάνω)
},  
    {
        collection:"users",
        timestamps:true
    })

export default model("User",UserSchema)