import mongoose, { Schema } from "mongoose";
//const { type } = require("express/lib/response");


const userRegisterSchema = new mongoose.Schema({
  
    FirstName :{
        type : String,
        require : true
    },
    LastName :{
        type : String,
        require : false
    },
    Email :{
        type : String,
        require : true,
        unique : true
    },
    MobileNumber :{
        type : String,
        require : false
    },
      UserName :{
        type : String,
        require : true,
        unique : true
    },
    Password :{
        type : String,
        require : true
    },
    isAdmin:{
        type : Boolean,
        require : false
    },
   Roles:{
    type : [Schema.Types.ObjectId], // this is secondatry key 
    require: true,
    ref : "roles" // refering to the collection 
   } 
},{
    timestamps:true
})



// const userLoginSchema = new mongoose.Schema({
//     UserName :{
//         type : String,
//         require : true
//     },Password :{
//         type : String,
//         require : true
//     },
// })
// const userDetailsSchema = new mongoose.Schema({
//     UserName :{
//         type : String,
//         require : true
//     },
//     UserId :{
//         type : Int32Array,
//         require : true
//     },
//     RoleName :{
//         type : String,
//         require : true
//     },
//     RoleId :{
//         type : String,
//         require : true
//     },
//     FirstName :{
//         type : String,
//         require : true
//     },LastName :{
//         type : String,
//         require : false
//     },Email :{
//         type : String,
//         require : true
//     },MobileNumber :{
//         type : String,
//         require : true
//     }
// })



export default mongoose.model("User", userRegisterSchema)
