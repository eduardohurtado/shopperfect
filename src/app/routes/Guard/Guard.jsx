import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import lockImage from "../../images/lock.png";

// Styles
import "./guard.css";

const Guard = ({ children }) => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? (
        <div>{children}</div>
    ) : (
        <div className="main-container">
            <h1>No tinene Permisos</h1>

            <img src={lockImage} alt="Lock" className="lock-image" />
        </div>
    );
};

export default Guard;
