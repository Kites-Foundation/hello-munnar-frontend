import { useRoutes, usePath, useEffect } from "hookrouter";
import React, { useContext } from "react";
import Explore from "../components/Explore/index";
import Destination from "../components/Destination/index";
import Experience from "../components/Experience/";
import NavBar from "../components/Common/NavBar";
import Notification from "../components/Notification/index";
import NearMe from "../components/NearMe/index";
import Experiences from "../components/Experiences/Experiences";
import SignIn from "../components/User/SignIn";
import SignOut from "../components/User/SignOut";
import Profile from "../components/User/Profile";

import Favourites from "../components/Favourites/index";
import Ksrtc from "../components/Ksrtc/index";
import RouteRouter from "./RouteRouter";
import NotFound from "../components/Common/NotFound";
import Activity from "../components/Activity";
import ReactGA from "react-ga";
// import { UserContext } from "../UserContext";

const routes = {
    // Explore page is the temporary default home page
    "/": () => <Explore />,
    "/nearme": () => <NearMe />,
    "/signIn": () => <SignIn />,
    "/signOut": () => <SignOut />,
    "/profile": () => <Profile />,
    "/destination/:slug": ({ slug }) => <Destination slug={slug} />,
    "/experience/:id": ({ id }) => <Experience id={id} />,
    "/activity/:slug": ({ slug }) => <Activity slug={slug} />,
    "/notifications": () => <Notification />,
    "/experiences": () => <Experiences />,

    "/favourites": () => <Favourites />,
    "/ksrtc": () => <Ksrtc />,

    // all routes will for VIBRGYOR routes
    "/route*": () => <RouteRouter />,
};

export default function PublicRouter() {
    // let { authInit } = useContext(UserContext);

    const pagesToShowNavBar = ["/", "/favourites", "/nearme", "/experiences"];
    const path = usePath();
    // useEffect(() => {
    //     // Send page view event
    //     ReactGA.set({ page: path });
    //     ReactGA.pageview(window.location.pathname + window.location.search);
    // }, [path]);

    // useEffect(()=>{
    //     authInit();
    // },[authInit])
    
    const pages = useRoutes(routes);
    return pages ? (
        pagesToShowNavBar.includes(window.location.pathname) ? (
            <div className="w-screen flex flex-col min-h-screen pb-20">
                {pages}
                <NavBar />
            </div>
        ) : (
            pages
        )
    ) : (
        <NotFound />
    );
}
