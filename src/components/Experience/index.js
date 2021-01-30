import React from "react";
import dummy from "../../assets/images/trek-bg.jpg";
import trek1 from "../../assets/images/trek-1.jpg";
import trek2 from "../../assets/images/trek-2.jpg";
import Icon from "../Common/Icon";
import LocationCard from "./LocationCard";
import BackButton from "../Common/BackButton";

export default function Experience({ id }) {
    return (
        <div className="">
            <BackButton color="white" />
            <div className="relative">
                <div className="absolute w-full h-full bg-black bg-opacity-50" />
                <img
                    src={dummy}
                    alt=""
                    className="h-56 w-full object-cover mx-auto"
                />
                <div className="absolute bottom-0 left-0 p-3 w-full flex justify-between">
                    <h2 className=" text-3xl font-semibold text-white">
                        Trekking
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
                <LocationCard img={trek1} />
                <LocationCard img={trek2} />
            </div>
        </div>
    );
}
