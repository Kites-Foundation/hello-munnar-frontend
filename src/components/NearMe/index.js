import React from "react";
// import Topbar from "./Topbar.js";
// import NearMeTabs from "./NearMeTabs";
import { A } from "hookrouter";

export default function NearMe() {
    return (
        // <div>
        //     <Topbar />
        //     <NearMeTabs color="black" />
        // </div>
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">Coming Soon</h2>
            <p className="text-xl my-5">This feature is under Development.</p>
            <A
                href="/"
                className="font-medium capitalize text-white text-base px-3 py-2 border border-black rounded-full bg-black">
                Go home
            </A>
        </div>
    );
}
