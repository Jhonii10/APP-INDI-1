import { Navigate, useRoutes } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import DashboardApp from '../pages/DashboardApp';
import UserPage from '../pages/UserPage';
import ProductsPage from '../pages/ProductsPage';
import BlogPage from '../pages/BlogPage';
import AnalyticsPage from '../pages/AnalyticsPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <AppLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace />, index: true },
        { path: 'app', element: <DashboardApp/> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'analytics',   element: <AnalyticsPage/> },
      ],
    },
    {
        path: '*',
        element: <Navigate to="/dashboard" replace />,
    },
    
  ]);

  return routes;
}