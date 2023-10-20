import { Navigate, useRoutes } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import CubikaApp from '../pages/CubikaApp';
import DashboardApp from '../pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <AppLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace />, index: true },
        { path: 'app', element: <DashboardApp/> },
        { path: 'commerce', element: <CubikaApp title={'commerce'} /> },
        { path: 'user', element: <CubikaApp title={'user'} /> },
        { path: 'products', element: <CubikaApp title={'productos'} /> },
        { path: 'blog', element: <CubikaApp title={'blog'} /> },
        { path: 'analytics', element: <CubikaApp title={'analytics'} /> },
      ],
    },
    {
        path: '*',
        element: <Navigate to="/dashboard" replace />,
      },
    
  ]);

  return routes;
}