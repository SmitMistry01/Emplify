import "./App.css";
import Login from "./components/Auth/Login";
import { useContext, useEffect, useState } from 'react';
import AdminDash from "./components/Dashboard/Admin/AdminDash";
import EmpDash from "./components/Dashboard/Emp/EmpDash";
import { AuthContext } from "./Providers/AuthProvider";

function App() {
  const [user, setUser] = useState<null | 'admin' | 'employee'>(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(JSON.parse(loggedInUser).role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email: string, password: string) => {
    if (email === "admin@company.com" && password === "123") {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } 
    else if (authData){
      const employee = authData.employees.find((e: { email: string; password: string }) => e.email === email && e.password === password)
      if(employee){
        setUser('employee');
        setLoggedInUser(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
      }
    }
    else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ):""}
      {user === 'admin' ? <AdminDash /> : user === 'employee' ? <EmpDash data={loggedInUser} /> : null}
    </div>
  );
}

export default App;