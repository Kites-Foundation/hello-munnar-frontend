import { useRoutes } from "hookrouter";
import React from "react";
import Explore from "../components/Explore/index";
import Destination from "../components/Destination/index";
import NavBar from "../components/Common/NavBar";
import Notification from '../components/Notification/index'
import NearMe from "../components/NearMe/top";


const routes = {
    // Explore page is the temporary default home page 
    "/": () => <Explore />,
    "/nearme": () => <NearMe />,
    "/destination/:id": ({ id }) => <Destination id={id} />,
    '/notifications': () => <Notification />
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
