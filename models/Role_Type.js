import mongoose from "mongoose";
//const { type } = require("express/lib/response");
const RoleSchema = new mongoose.Schema({
    RoleName :{
        type : String,
        require : true
    },
},{
    timestamps : true
})

export default mongoose.model("Role" ,RoleSchema)
