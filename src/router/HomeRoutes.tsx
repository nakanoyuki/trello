import Home from "../components/pages/Home";
import Logout from "../components/pages/Logout";
import Page404 from "../components/pages/Page404";

const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/logout",
    exact: false,
    children: <Logout />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];

export default homeRoutes;
