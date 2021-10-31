import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";

const AppRouter = () => {
    return (
        <Router>
            <Route
                exact
                path="/login"
                render={() => {
                    return <Login />;
                }}
            ></Route>

            <Route
                exact
                path="/products"
                render={() => {
                    return <Products />;
                }}
            ></Route>
        </Router>
    );
};

export default AppRouter;
