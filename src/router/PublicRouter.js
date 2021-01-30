import { useRoutes } from "hookrouter";
import React from "react";
import Home from "../components/Home/index";
import NearMe from "../components/NearMe/index";

const routes = {
    "/": () => <Home />,
    "/nearme": () => <NearMe/>
};

export default function PublicRouter() {
    const pages = useRoutes(routes);
    return <div className="w-screen flex flex-col min-h-screen">{pages}</div>;
}
