import React from "react";
import PublicRouter from "./router/PublicRouter";
import ReactGA from "react-ga";
import SplashScreen from "./components/Common/SplashScreen";
import ApiProvider from "./ApiContext";
import UserProvider from "./UserContext";

function App() {
    // Initialize GA
    ReactGA.initialize(process.env.REACT_APP_GA_ID, { debug: false });
    return (
        <div className="App">
            <ApiProvider>
                <UserProvider>
                    <SplashScreen duration={2000} />
                    <PublicRouter />
                </UserProvider>
            </ApiProvider>
        </div>
    );
}

export default App;
