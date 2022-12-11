import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../components/pages/Login";
import Page404 from "../components/pages/Page404";
import homeRoutes from "./HomeRoutes";

const Router: FC = memo(() => {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      <Route path="*" exact>
        <Page404 />
      </Route>
    </Switch>
  );
});

export default Router;
