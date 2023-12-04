import { Navigate, useRoutes } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import CubikaApp from '../pages/CubikaApp';
import DashboardApp from '../pages/DashboardApp';
import UserPage from '../pages/UserPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <AppLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace />, index: true },
        { path: 'app', element: <DashboardApp/> },
        { path: 'commerce', element: <CubikaApp title={'cubika'} /> },
        { path: 'user', element: <UserPage /> },
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