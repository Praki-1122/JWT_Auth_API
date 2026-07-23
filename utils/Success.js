export const CreateSuccess = (statusCode , successMessage , data)=>{
    const successObject = {
        status : statusCode,
        message : successMessage,
        data : data
    }
    return successObject;
}