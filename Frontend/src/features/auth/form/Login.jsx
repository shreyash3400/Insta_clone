import React, { useState } from 'react'
import "../style/style.scss"
import axios from 'axios'
import { Link } from 'react-router'
import Register from './Register'
import {useAuth} from '../../hooks/auth.hook'


const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {loginHandler,registerHandler,user,loading} = useAuth()

    async function submitHandler(e){
        e.preventDefault();
        const responce = loginHandler(username,password)
        
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
                    <Link to={'/register'}>Don't have <span>Account</span></Link>
                </form>
            </div>
        </main>
    </div>
  )
}

export default Login