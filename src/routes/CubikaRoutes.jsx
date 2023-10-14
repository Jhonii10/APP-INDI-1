import { Navigate, Route, Routes } from 'react-router-dom';
import CubikaApp from '../app/pages/CubikaApp';


const CubikaRoutes = () => {
    return (
        <Routes>
            <Route path='/dashboard/app' element={<CubikaApp/>}/>
            <Route path='/dashboard/commerce' element={<CubikaApp/>}/>
            <Route path='/dashboard/user' element={<CubikaApp/>}/>
            <Route path='/dashboard/products' element={<CubikaApp/>}/>
            <Route path='/dashboard/blog' element={<CubikaApp/>}/>
            <Route path='/dashboard/analytics' element={<CubikaApp/>}/>
            <Route path={'/*' || '/dashboard/*'} element={<Navigate to='/dashboard/app'/>}/> 
        </Routes>
    );
}

export default CubikaRoutes;