import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Guard from "../Guard/Guard";
import NavbarGeneral from "../../shared/NavbarGeneral/NavbarGeneral";

// Pages
import Home from "../../pages/public/Home/Home";
import Products from "../../pages/public/Products/Products";
import Dashboard from "../../pages/admin/Dashboard/Dashboard";
import MissingPage from "../../pages/public/MissingPage/MissingPage";

const AppRouter = () => {
    return (
        <Router>
            <NavbarGeneral />

            <Switch>
                <Route exact path={["/", "/products"]}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/products">
                            <Products />
                        </Route>
                    </Switch>
                </Route>

                <Route exact path={["/dashboard", "/roles", "/ventas"]}>
                    <Guard>
                        <Switch>
                            <Route exact path="/dashboard">
                                <Dashboard />
                            </Route>

                            <Route exact path="/roles">
                                {"Roles"}
                            </Route>

                            <Route exact path="/ventas">
                                {"Ventas"}
                            </Route>
                        </Switch>
                    </Guard>
                </Route>

                <Route path="*">
                    <MissingPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
