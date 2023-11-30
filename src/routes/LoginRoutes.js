import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Product from '../pages/Product/Product'
import Map from '../pages/mapview/Map';
import MinimalLayout from 'layout/MinimalLayout';
import DataSubscriptionPage from 'pages/DataSubcriptionPage/DataSubcriptionPage';
import UserSettings from 'pages/UserSettings/UserSettingsPage';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />
    },
    {
      path: 'register',
      element: <AuthRegister />
    },
    {
      path: 'Product',
      element: <Product/>
    },
    {
      path: 'DataSubscription',
      element: <DataSubscriptionPage/>
    },
    {
      path: 'UserSettings',
      element: <UserSettings/>
    }
  ]
};

export default LoginRoutes;
