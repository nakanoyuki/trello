import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../components/pages/Login";
import Page404 from "../components/pages/Page404";
import HeaderLayout from "../components/templetes/HeaderLayout";
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
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      <Route path="*" exact>
        <HeaderLayout>
          <Page404 />
        </HeaderLayout>
      </Route>
    </Switch>
  );
});

export default Router;
