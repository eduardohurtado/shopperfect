import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Guard from "../Guard/Guard";
import NavbarGeneral from "../../shared/NavbarGeneral/NavbarGeneral";

// Pages
import Home from "../../pages/public/Home/Home";
import MarketPage from "../../pages/public/MarketPage/MarketPage";
import ProductsStockPage from "../../pages/public/ProductsStockPage/ProductsStockPage";
import NewProductPage from "../../pages/public/NewProductPage/NewProductPage";
import Dashboard from "../../pages/admin/Dashboard/Dashboard";
import MissingPage from "../../pages/public/MissingPage/MissingPage";
import SalesPage from "../../pages/admin/SalesPage/SalesPage";
import Footer from "../../shared/Footer/Footer";

const AppRouter = () => {
    return (
        <Router>
            <NavbarGeneral />

            <Switch>
                <Route exact path={["/", "/tienda", "/productos/stock", "/productos/nuevo"]}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route exact path="/tienda">
                            <MarketPage />
                        </Route>

                        <Route exact path="/productos/stock">
                            <ProductsStockPage />
                        </Route>

                        <Route exact path="/productos/nuevo">
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

                            <Route exact path="/ventas">
                                <SalesPage />
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
