import React from "react";
import dummy from "../../assets/images/dummy.jpg";
import Icon from "../Common/Icon";
import LocationCard from "./LocationCard";

export default function Experience({ id }) {
    return (
        <div className="">
            <div className="relative">
                <img
                    src={dummy}
                    alt=""
                    className="h-56 w-full object-cover mx-auto"
                />
                <div className="absolute bottom-0 left-0 p-3 w-full flex justify-between">
                    <h2 className=" text-3xl font-semibold">Trekking</h2>
                    <div className="flex items-center box-border bg-indigo-600 bg-opacity-25 justify-center w-10 h-10 rounded-full border-indigo-600 border-2">
                        <Icon name="location" color="indigo-600" size={7} />
                    </div>
                </div>
            </div>
            <div className="flex justify-end p-3">
                <Icon name="filter" size={9} />
            </div>
            <div className="px-8">
                <LocationCard />
                <LocationCard />
            </div>
        </div>
    );
}
