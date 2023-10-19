import { Navigate, Route, Routes } from 'react-router-dom';
import CubikaApp from '../app/pages/CubikaApp';


const CubikaRoutes = () => {
    return (
        <Routes>
            <Route path='/dashboard/app' element={<CubikaApp title={'app'}/>}/>
            <Route path='/dashboard/commerce' element={<CubikaApp title={'commerce'}/>}/>
            <Route path='/dashboard/user' element={<CubikaApp title={'user'}/>}/>
            <Route path='/dashboard/products' element={<CubikaApp title={'products'}/>}/>
            <Route path='/dashboard/blog' element={<CubikaApp title={'blog'}/>}/>
            <Route path='/dashboard/analytics' element={<CubikaApp title={'analytics'}/>}/>
            <Route path={'/*' || '/dashboard/*'} element={<Navigate to='/dashboard/app'/>}/> 
        </Routes>
    );
}

export default CubikaRoutes;