import React, { useState } from 'react'
import axios from "axios"

const Register = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    async function submitHandler(e){
        e.preventDefault()

        await axios.post('http://localhost:3000/api/auth/register',{
            username,
            email,
            password
        }, {withCredentials: true})
        .then((res)=>{
            console.log((res.data));
        })
        
    }

  return (
    <div>
          <main>
            <div className="formCard">
                <h1>Register</h1>
                <form onSubmit={submitHandler}> 
                    <input onChange={(e)=>{
                        setusername(e.target.value)
                    }} type="text" name='username' placeholder='Enter username' />
                    <input onChange={(e)=>{
                        setemail(e.target.value)
                    }} type="text" name='email' placeholder='Enter email' />
                    <input onChange={(e)=>{
                        setpassword(e.target.value)
                    }} type="password" name='password' placeholder='Enter password' />
                    <button>Register</button>
                </form>
            </div>
        </main>
    </div>
  )
}

export default Register