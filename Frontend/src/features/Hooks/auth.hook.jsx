import {loginAPI,registerAPI} from "../Services/auth.service"
import { useContext } from "react"
import {context} from "../App.Context"




export  function useAuth(){
    
    const usecontext = useContext(context);
    const {user,setuser,loading,setloading }= usecontext
    
async function loginHandler(username,password){
    setloading(true);
    const responce = await loginAPI(username,password);
    setuser(responce.user);
    console.log(responce.user)
    setloading(false)
}



async function registerHandler(username,email,password){


    try{
        setloading(true);
        const responce = await registerAPI(username,email,password);
        console.log(responce)
        setuser(responce.user);
        setloading(false)

    }
    catch(err){
        console.log("STATUS:", err.response?.status)
        console.log("MESSAGE:", err.response?.data?.message)
        console.log(err.response?.data?.message);
    }finally {
        setloading(false);
    }
}
return {
    user,
    loading,
    loginHandler,
    registerHandler

}
}