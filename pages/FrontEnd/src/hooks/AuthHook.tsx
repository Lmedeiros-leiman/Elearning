import { createContext } from "react"
import axiosPrivate from "../api/axios"



const AuthContext = createContext({})

export const AuthProvider : React.FC< React.PropsWithChildren > = ({ children }) => {

    (async() => {
        const data = await axiosPrivate.post("/api/test")
        console.log(data)
    
    })()

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider