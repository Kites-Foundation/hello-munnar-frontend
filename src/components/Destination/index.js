import React from "react";
import DestinationNav from "./DestinationNav";
import Icon from "../Common/Icon";
import data from "../Explore/assets/data/data.json";

export default function Destination(id) {
    let dest = [];
    data.forEach((element) => {
        element.destinations.forEach((item) => {
            if (item.id === id.id) {
                dest.push(item);
            }
        });
    });
    return (
        <div className="relative z-20 min-h-screen ">
            <img
                src={dest[0].assetUrl}
                alt=""
                className="h-64 sm:bg-cover mx-auto lg:rounded-lg "
            />
            <div className="flex justify-between">
                <div className="text-2xl font-semibold m-4">{dest[0].name}</div>
                <div className="my-auto mr-2">
                    <Icon name="plus" color={"black"} size={6} />
                </div>
            </div>

            <DestinationNav />
        </div>
    );
}
