import mongoose from "mongoose";


const userCredentialModel = new mongoose.Schema({
     UserName :{
        type : String,
        require : true
    },Password :{
        type : String,
        require : true
    }
})

export default mongoose.Model("UserCredential", userCredentialModel)

