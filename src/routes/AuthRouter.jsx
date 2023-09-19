import { Navigate, Route, Routes } from "react-router-dom";
import Employees from "../pages/Employees";
import EmployeesRegister from "../pages/EmployeesRegister";


const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/empleados" element={<Employees/>}/>
            <Route path="/empleados/registro" element={<EmployeesRegister/>}/>
            <Route path="/*" element={<Navigate to='/empleados'/>}/>
        </Routes>
    );
}

export default AuthRoutes;