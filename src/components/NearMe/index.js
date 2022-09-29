import React from "react";
import Topbar from "./Topbar.js";
import NearMeTabs from "./NearMeTabs";
import { A } from "hookrouter";

export default function NearMe() {
    return (
        <div>
            <Topbar />
            <NearMeTabs color="black" />
        </div>
    );
}
