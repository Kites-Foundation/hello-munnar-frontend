import React from "react";
import FavouriteCard from "./FavouriteCard";
const data = require("./assets/data");

export default function FavouriteActivities() {
    const activities = data["activities"];
    return (
        <div className="m-4">
            {activities.map((value, index) => {
                return (
                    <div key={index}>
                        <FavouriteCard name={value.name} route={value.route} time={value.time} day={value.day} />
                    </div>
                );
            })}


        </div>
    );
}