import { myAxios } from "./helper";


export const signUp= (user)=>{
    return myAxios
    .post('/auth',user)
    .then((response)=> response.data);
};