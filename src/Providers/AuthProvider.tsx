import { createContext, useState, useEffect} from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { ReactNode } from "react";

export const AuthContext = createContext<{ employees: any; admin: any } | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {

    const [userData, setUserData] = useState<{ employees: any; admin: any } | null>(null);
    useEffect(() =>{
        setLocalStorage()
        const {employees, admin} = getLocalStorage();
        setUserData({employees,admin});
    }, [])

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider