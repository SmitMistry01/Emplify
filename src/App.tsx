import "./App.css";
import Login from "./components/Auth/Login";
import { useContext, useEffect, useState } from 'react';
import AdminDash from "./components/Dashboard/Admin/AdminDash";
import EmpDash from "./components/Dashboard/Emp/EmpDash";
import { AuthContext } from "./Providers/AuthProvider";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Header from './components/Dashboard/Header';

function App() {
  const [user, setUser] = useState<null | 'admin' | 'employee'>(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    if (email === "admin@company.com" && password === "123") {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } 
    else if (authData) {
      const employee = authData.employees.find(
        (e: { email: string; password: string }) => 
          e.email === email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ 
          role: "employee", 
          data: employee 
        }));
      }
    }
    else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {user && <Header onLogout={handleLogout} />}
        <Routes>
          <Route 
            path="/login" 
            element={user ? <Navigate to="/" /> : <Login handleLogin={handleLogin} />} 
          />
          <Route 
            path="/" 
            element={
              !user ? (
                <Navigate to="/login" />
              ) : user === 'admin' ? (
                <AdminDash />
              ) : (
                <EmpDash  onLogout = {handleLogout} data={loggedInUser} />
              )
            } 
          />
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;