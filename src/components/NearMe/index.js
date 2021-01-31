import React from "react";
import Topbar from "./top.js";
import Thingstodo from "./thingstodo.js";
import NearMeCard from "./Wrappers/Cards/NearMeCard.js";
import NearmeFoodWrapper from "./Wrappers/NearmeFoodWrapper.js";

export default function NearMe() {
    return (
        <div>
            <Topbar />
            <NearmeFoodWrapper />
        </div>
    );
}
