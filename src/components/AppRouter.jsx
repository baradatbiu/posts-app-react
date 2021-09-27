import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";
import Loader from "./UI/loader/Loader";

function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) return <Loader />

  return (
    <div>
      {isAuth ? (
        <Switch>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            ></Route>
          ))}
          <Redirect to="/posts" />
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            ></Route>
          ))}
          <Redirect to="/login" />
        </Switch>
      )}

    </div>
  );
}

export default AppRouter;
