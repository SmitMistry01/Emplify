import "./App.css";
import Login from "./components/Auth/Login";
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import AdminDash from "./components/Dashboard/Admin/AdminDash";
import EmpDash from "./components/Dashboard/Emp/EmpDash";

function App() {
  const [user,setUser] = useState<null | 'admin' | 'employee'>(null);

const handleLogin = (email: string, password: string) => {
    if(email == "admin@company.com" && password == "123"){
      setUser('admin');
    }
    else if(email == "john@dev.com" && password == "123"){
      setUser('employee');
    }
    else{
      alert("Invalid Credentials");
    }
  }

  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  },)
  return (
    <>
      <div>
        {!user ? <Login handleLogin = {handleLogin} />: ""}
        {user === "admin" ? <AdminDash /> : user === "employee" ? <EmpDash /> : ""}
      </div>
    </>
  );
}

export default App;
