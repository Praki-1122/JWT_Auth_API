import Role from '../models/Role_Type.js'

export const GetRoles = async (req, res)=>{
    try {
        var roles = await Role.find()
        if(roles != null)
            return res.status(200).json(roles)
        else
            return res.status(400).send('No Roles found')
    } catch (error) {
        console.log(error)
                return res.status(500).send("Internal error")

    }
};

export const CreateRole = async (req, res, next)=>{
    try{
        if(req.body != null){
        const newRole = new Role (req.body);
        await newRole.save();
        return res.status(200).send("Role Created")
        }
        else{
            return res.status(400).send("Request Body is missing")   
        }
    }
    catch(error){
        console.log(error) 
        return res.status(500).send("Internal error")
    }
}

export const UpdateRole = async (req, res, next)=>{
    try {
       
        const roleupated = await Role.findById({_id : req.params.id });
       if(roleupated != null)
       {
        console.log(roleupated);
        const newupdate = await Role.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true}); 
        return res.status(200).send("role Updated");
       }
       return res.status(400).send('role not found');
    } 
    catch (error) {
        console.log(error)
                return res.status(500).send("Internal error");
    }
} 

export const DeleteRole = async (req, res, next)=>{
    try {
          const role = Role.findById({_id: req.params._id})
          console.log(role)
            if(role != null)
            {
                await Role.deleteOne({_id: req.params.id});
                return res.status(200).send("Role Deleted")
            }
        return res.status(400).send("role Not found")
    } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Error")
    }
  
}

