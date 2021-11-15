import React from "react";
import { Nav } from "react-bootstrap";

// Images
import ShopLogo from "../../../images/shop.png";

// Styles
import "./home.css";

const Home = () => {
    return (
        <>
            <div className="homeContainer">
                <h1>Bienvenido a Shopperfect</h1>

                <img src={ShopLogo} alt="Shop logo" className="shopLogo" />
            </div>

            <div className="buttonsContainer">
                <button type="button" className="btn btn-primary mr-2">
                    <Nav.Link href="/tienda">
                        <p className="buttonText">Ir a la tienda</p>
                    </Nav.Link>
                </button>

                <button type="button" className="btn btn-primary">
                    <Nav.Link href="/productos/stock">
                        <p className="buttonText">Ir al stock</p>
                    </Nav.Link>
                </button>
            </div>
        </>
    );
};

export default Home;
