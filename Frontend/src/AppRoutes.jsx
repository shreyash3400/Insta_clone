import React from 'react'
import {Routes,BrowserRouter,Route} from "react-router"
import Login from "./features/auth/form/Login"
import Register from "./features/auth/form/Register"
const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes