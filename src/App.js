import React from "react";
import PublicRouter from "./router/PublicRouter";
import ReactGA from "react-ga";

function App() {
    // Initialize GA
    ReactGA.initialize(process.env.REACT_APP_GA_ID, { debug: false });
    return (
        <div className="App">
            <PublicRouter />
        </div>
    );
}

export default App;
