import axios from "axios";
const api= axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true,
})

export async function loginAPI(username,password){
    const responce = await api.post("/login",{
        username,
        password
    });
    console.log(responce.data);
    return responce.data
}

export async function registerAPI(username,email,password){
    const responce  = await api.post("/register",{
        username,
        email,
        password
    })
    return responce.data
}