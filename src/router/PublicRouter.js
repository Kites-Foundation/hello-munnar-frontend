import { useRoutes } from "hookrouter";
import React from "react";
import Home from "../components/Home/index";
import NavBar from "../components/Common/NavBar";

const routes = {
    "/": () => <Home />,
};

export default function PublicRouter() {
    const pages = useRoutes(routes);
    return (
        <div className="w-screen flex flex-col min-h-screen pb-20">
            {pages}
            <NavBar />
        </div>
    );
}
