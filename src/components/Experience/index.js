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
                    <Icon name="nearMe" color="green-400" />
                </div>
            </div>
        </div>
    );
}
