import axios from "axios";
import { useContext, useState } from "react";


const AuthContext = useContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })
    axios.defaults.headers.common["Authorization"] = auth.token

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider}