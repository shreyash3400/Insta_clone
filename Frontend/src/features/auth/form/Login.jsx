import React, { useState } from 'react'
import "../style/style.scss"
import axios from 'axios'
const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    async function submitHandler(e){
        e.preventDefault();

        await axios.post('http://localhost:3000/api/auth/login',{
            username,
            password
        } ,{withCredentials: true})
        .then((res)=>{
            console.log(res.data);
        })
    }
  return (
    <div>
        <main>
            <div className="formCard">
                <h1>Login</h1>
                <form onSubmit={submitHandler}>
                    <input onChange={(e)=>{
                        setusername(e.target.value);
                    }} type="text" name='username' placeholder='Enter username' />
                    <input onChange={(e)=>{
                        setpassword(e.target.value)
                    }} type="password" name='password' placeholder='Enter password' />
                    <button>Login</button>
                </form>
            </div>
        </main>
    </div>
  )
}

export default Login