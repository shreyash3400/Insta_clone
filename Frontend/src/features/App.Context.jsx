import { Children, createContext, useState } from "react";



export const context = createContext()
export function ContextAPI({children}){

    const [user, setuser] = useState('');
    const [loading, setloading] = useState(false)

    return (
        <context.Provider value={{user,setuser,loading,setloading}}>
            {children}
        </context.Provider>
    )
}