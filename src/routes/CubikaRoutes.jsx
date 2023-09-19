import { Navigate, Route, Routes } from 'react-router-dom';
import CubikaApp from '../app/pages/CubikaApp';


const CubikaRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<CubikaApp/>}/>
            <Route path='/*' element={<Navigate to='/home'/>}/> 
        </Routes>
    );
}

export default CubikaRoutes;