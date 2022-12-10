import React, { FC, memo, useState } from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "../components/pages/AuthenticatedRoute";
// import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
// import Logout from "../components/pages/Logout";

const Router: FC = memo(() => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <AuthenticatedRoute />
    </Switch>
  );
});

export default Router;
