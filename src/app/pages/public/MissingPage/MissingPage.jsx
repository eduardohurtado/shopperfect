import React from "react";
import Error404 from "../../../images/error-404.png";

// Styles
import "./missingPage.css";

const MissingPage = () => {
    return (
        <div className="main-container">
            <h1>Error: Página no encontrada :(</h1>

            <img src={Error404} alt="Error404" className="missing404-image" />
        </div>
    );
};

export default MissingPage;
