import React from "react";
import PublicRouter from "./router/PublicRouter";
import ReactGA from "react-ga";
import SplashScreen from "./components/Common/SplashScreen";

function App() {
    // Initialize GA
    ReactGA.initialize(process.env.REACT_APP_GA_ID, { debug: false });
    return (
        <div className="App">
            <SplashScreen duration={2000} />
            <PublicRouter />
        </div>
    );
}

export default App;
