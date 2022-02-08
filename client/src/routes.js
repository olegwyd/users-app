import AdminPanel from './pages/AdminPanel';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserPanel from './pages/UserPanel';
import {
  ADMIN_ROUTE,
  USER_PANEL_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from './utils/consts';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPanel,
  },
  {
    path: USER_PANEL_ROUTE,
    Component: UserPanel,
  },
];

export const publickhRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: SignIn,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: SignUp,
  },
];
