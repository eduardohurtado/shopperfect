import React from "react";

// Components
import ProductList from "./components/ProductList/ProductList";
import Footer from "../../../shared/Footer/Footer";

// Styles
import "./products.css";

const Products = () => {
    return (
        <div className="productsPage">
            <div className="productsPageContainer">
                <div className="productList">
                    <ProductList />
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Products;
