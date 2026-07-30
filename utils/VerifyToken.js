    import jwt from "jsonwebtoken"
    import { CreateError } from "./Error.js";


    export const verifyToken =  async(req , res , next) => {
    try {
    const authToken = req.cookies.jwtToken;
    if(!authToken)
    {return next(CreateError(401 ,"User is Unauthorized"))}
    const user = jwt.verify(authToken , process.env.JWT_SECRET_KEY ) ;
    req.user = user
    console.log("User Authenticated")
    next();

    } catch (error) {
    console.log(error)   
    return next(CreateError(401, "User is Unauthorized"));
    }
    }



export const verifyUser = (req, res, next) => {
try {
    if (
        req.user.id === req.params.id ||
        req.user.isAdmin
    ) {
        return next();
    }

    return next(CreateError(403, "Not Authorized"));
 
} catch (error) {
        return next(CreateError(401, "User is Unauthorized"));

}
   };


export const verifyAdmin = (req, res, next) => {
try {
    if (req.user.isAdmin) {
        return next();
    }
    return next(CreateError(403, "Not Authorized"));
} catch (error) {
        return next(CreateError(401, "User is Unauthorized"));

}
    
};