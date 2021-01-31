import { useRoutes } from "hookrouter";
import React from "react";
import Explore from "../components/Explore/index";
import Destination from "../components/Destination/index";
import NavBar from "../components/Common/NavBar";
import Notification from '../components/Notification/index'
import Experiences from "../components/Experiences/Experiences";
import SignIn from "../components/User/SignIn";
import SignOut from "../components/User/SignOut";
import Profile from "../components/User/Profile";


const routes = {
    "/": () => <Explore />,
    "/signIn": () => <SignIn />,
    "/signOut": () => <SignOut />,
    "/profile": () => <Profile />,
    "/experiences": () => <Experiences />,
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
