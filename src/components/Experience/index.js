import React from "react";
import Icon from "../Common/Icon";
import LocationCard from "./LocationCard";
import BackButton from "../Common/BackButton";
import allData from "../../assets/data/data.json";
import { activityData } from "../../assets/data/activities";

export default function Experience({ id }) {
    const activity = activityData.find((d) => d.name === id);
    id = id.replace("_", " ");
    const destinations = allData.reduce(
        (acc, data) => [
            ...acc,
            ...data.destinations.filter((dest) => dest.activities.includes(id)),
        ],
        []
    );
    return (
        <div className="">
            <BackButton color="white" />
            <div className="relative">
                <div className="absolute w-full h-full bg-black bg-opacity-50" />
                <img
                    src={activity.url}
                    alt=""
                    className="h-56 w-full object-cover mx-auto"
                />
                <div className="absolute bottom-0 left-0 p-3 w-full flex justify-between">
                    <h2 className="capitalize text-3xl font-semibold text-white">
                        {id}
                    </h2>
                    <div className="flex items-center box-border bg-indigo-600 bg-opacity-25 justify-center w-10 h-10 rounded-full border-indigo-600 border-2">
                        <Icon name="location" color="indigo-600" size={7} />
                    </div>
                </div>
            </div>
            <div className="flex justify-end p-3">
                <Icon name="filter" size={9} />
            </div>
            <div className="px-8">
                {destinations.map((dest) => (
                    <LocationCard key={dest.name} data={dest} />
                ))}
            </div>
        </div>
    );
}
