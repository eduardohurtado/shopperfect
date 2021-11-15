import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Guard from "../Guard/Guard";
import NavbarGeneral from "../../shared/NavbarGeneral/NavbarGeneral";

// Pages
import Home from "../../pages/public/Home/Home";
import ProductsStock from "../../pages/public/Products/ProductsStock";
import NewProductPage from "../../pages/public/NewProductPage/NewProductPage";
import Dashboard from "../../pages/admin/Dashboard/Dashboard";
import MissingPage from "../../pages/public/MissingPage/MissingPage";
import Footer from "../../shared/Footer/Footer";

const AppRouter = () => {
    return (
        <Router>
            <NavbarGeneral />

            <Switch>
                <Route exact path={["/", "/products/stock", "/products/nuevo"]}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route exact path="/products/stock">
                            <ProductsStock />
                        </Route>

                        <Route exact path="/products/nuevo">
                            <NewProductPage />
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

            <Footer />
        </Router>
    );
};

export default AppRouter;
