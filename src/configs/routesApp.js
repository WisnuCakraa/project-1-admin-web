import { ROUTES } from "../configs";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Product from "../Pages/Product";

export const routesApp = [
  {
    path: ROUTES.LOGIN(),
    compt: Login,
    exact: true,
  },
  {
    path: ROUTES.DASHBOARD(),
    compt: Dashboard,
    exact: false,
  },
  {
    path: ROUTES.NEW_PRODUCT(),
    compt: Product,
    exact: false,
  },
];
