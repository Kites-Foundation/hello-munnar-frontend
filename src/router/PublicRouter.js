import { useRoutes } from "hookrouter";
import React from "react";
import Home from "../components/Home/index";
import Destination from "../components/Destination/index";
import Experience from "../components/Experience/";
import NavBar from "../components/Common/NavBar";

const routes = {
    "/": () => <Home />,
    "/destination/:id": ({ id }) => <Destination id={id} />,
    "/experience/:id": ({ id }) => <Experience id={id} />,
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
