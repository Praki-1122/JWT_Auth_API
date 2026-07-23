export const CreateError = (statusCode , errorMessage , data)=>{
    const errorObject = {
        status : statusCode,
        message : errorMessage,
        data : data
    }
    return errorObject;
}