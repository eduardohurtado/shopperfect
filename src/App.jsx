import { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

// Router
import AppRouter from "./app/routes/AppRouter/AppRouter";

// Styles
import "./styles/normalize.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";

function App() {
    const [isFontReady, setIsFontReady] = useState(false);

    const isFontLoaded = () => {
        document.fonts.ready.then(setIsFontReady(true));
    };

    useEffect(() => {
        isFontLoaded();
    }, []);

    return (
        isFontReady && (
            <Auth0Provider
                domain="dev-km5x2l8w.us.auth0.com"
                clientId="QhvlZm7Gqc8CguRaKbTqe1pu5D6wuwK0"
                redirectUri={window.location.origin}
            >
                <AppRouter />
            </Auth0Provider>
        )
    );
}

export default App;
