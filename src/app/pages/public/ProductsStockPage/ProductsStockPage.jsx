import React from "react";

// Components
import ProductList from "./components/ProductList/ProductList";

// Styles
import "./products.css";

const ProductsStockPage = () => {
    return (
        <div className="productsPage">
            <div className="productsPageContainer">
                <div className="productList">
                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default ProductsStockPage;
