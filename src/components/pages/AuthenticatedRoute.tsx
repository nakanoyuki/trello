import { Route, Switch } from "react-router-dom";
import { FC } from "react";
import Home from "./Home";
import Logout from "./Logout";

const AuthenticatedRoute: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/logout" exact component={Logout} />
    </Switch>
  );
};

export default AuthenticatedRoute;
