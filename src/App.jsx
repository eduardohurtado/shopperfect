import { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

// Router
import AppRouter from "./app/AppRouter/AppRouter";

// Styles
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
                domain="YOUR_DOMAIN"
                clientId="YOUR_CLIENT_ID"
                redirectUri={window.location.origin}
            >
                <AppRouter />
            </Auth0Provider>
        )
    );
}

export default App;
