import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router'
import {useAuth} from '../../hooks/auth.hook'


const Register = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const {registerHandler} = useAuth()

    async function submitHandler(e){
        e.preventDefault()

        registerHandler(username,email,password)
        
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
                    <Link to={'/login'}>Have a Account</Link>
                </form>
            </div>
        </main>
    </div>
  )
}

export default Register