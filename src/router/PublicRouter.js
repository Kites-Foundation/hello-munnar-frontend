import { useRoutes } from "hookrouter";
import React from "react";
import Home from "../components/Home/index";
import Destination from "../components/Destination/index.js"


const routes = {
    "/": () => <Home />,
    "/nearme": () => <NearMe />,
   
    "/destination/:id": ({ id }) => <Destination id={id} />,
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
