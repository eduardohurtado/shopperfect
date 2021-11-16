import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Styles
import "./dashboard.css";

const Dashboard = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <div className="dashboardContainer">
            {isAuthenticated ? (
                <div>
                    <h1>Bienvenido al dashboard</h1>
                    <img src={user.picture} alt="userLogo" className="userLogo" />
                    <p>Email: {user.email}</p>
                    <p>Nombre: {user.nickname}</p>
                </div>
            ) : null}
        </div>
    );
};

export default Dashboard;
