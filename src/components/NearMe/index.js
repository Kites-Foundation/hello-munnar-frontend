import React from "react";
import Topbar from "./Topbar.js";
import NearMeTabs from "./NearMeTabs";

export default function NearMe() {
    return (
        <div>
            <div>
                <Topbar />
                <NearMeTabs color="black" />
            </div>
        </div>
    );
}
