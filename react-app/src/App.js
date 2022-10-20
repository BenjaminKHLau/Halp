import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import BusinessFormComponent from "./components/businesses/businessform.js";
import BusinessCardComponent from "./components/businesses/businessCard";
import GetAllBusinesses from "./components/businesses/businessesHome";
import GetAllCategories from "./components/categories/categoriesHome";
import GetBusinessDetailsComponent from "./components/businesses/businessDetails";
import BusinessSearchComponent from "./components/BusinessSearch"
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <GetAllBusinesses />
          <GetAllCategories />
        </Route>
        {/* <Route path="/businesses/new" exact={true}>
          <BusinessFormComponent />
          </Route> */}
        <Route path="/businesses/search">
          <BusinessSearchComponent />
        </Route>
        <Route path="/businesses/:businessId" exact={true}>
          <GetBusinessDetailsComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
