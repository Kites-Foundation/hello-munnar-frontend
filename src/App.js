import React from "react";
import PublicRouter from "./router/PublicRouter";
import ReactGA from "react-ga";

function App() {
    // Initialize GA
    ReactGA.initialize(Env.GA_ID, { debug: Env.GA_DEBUG });
    ReactGA.pageview(window.location.pathname + window.location.search);
    history.listen((location) => {
        // Intercept route
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname + window.location.search);
    });
    return (
        <div className="App">
            <PublicRouter />
        </div>
    );
}

export default App;
