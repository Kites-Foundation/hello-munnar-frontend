import { useRoutes } from "hookrouter";
import React from "react";
import Explore from "../components/Explore/index";
import Destination from "../components/Destination/index";
import Experience from "../components/Experience/";
import NavBar from "../components/Common/NavBar";
import Notification from "../components/Notification/index";
import NearMe from "../components/NearMe/Topbar";
import Experiences from "../components/Experiences/Experiences";
import SignIn from "../components/User/SignIn";
import SignOut from "../components/User/SignOut";
import Profile from "../components/User/Profile";

import Favourites from "../components/Favourites/index";
import Ksrtc from "../components/Ksrtc/index";
import RouteRouter from "./RouteRouter";

const routes = {
    // Explore page is the temporary default home page
    "/": () => <Explore />,
    "/nearme": () => <NearMe />,
    "/signIn": () => <SignIn />,
    "/signOut": () => <SignOut />,
    "/profile": () => <Profile />,
    "/destination/:id": ({ id }) => <Destination id={id} />,
    "/experience/:id": ({ id }) => <Experience id={id} />,
    "/notifications": () => <Notification />,
    "/experiences": () => <Experiences />,

    "/favourites": () => <Favourites />,
    "/ksrtc": () => <Ksrtc />,

    // all routes will for VIBRGYOR routes
    "/route*": () => <RouteRouter />,
};

export default function PublicRouter() {
    const pagesToShowNavBar = ["/", "/favorites", "/nearme", "/experiences"];
    console.log(window.location.pathname);
    const pages = useRoutes(routes);
    return pagesToShowNavBar.includes(window.location.pathname) ? (
        <div className="w-screen flex flex-col min-h-screen pb-20">
            {pages}
            <NavBar />
        </div>
    ) : (
        pages
    );
}
