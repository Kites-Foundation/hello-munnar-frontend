import React from "react";
import DestinationNav from "./DestinationNav";
import img from "../../assets/images/dummy.jpg";
import Icon from "../Common/Icon";

export default function Destination(id) {
    id = 1;
    return (
        <div className="relative z-20 min-h-screen ">
            <img
                src={img}
                alt=""
                className="h-64 sm:bg-cover mx-auto lg:rounded-lg "
            />
            <div className="flex justify-between">
                <div className="text-2xl font-semibold m-4">
                    Destination Name
                </div>
                <div className="my-auto mr-2">
                    <Icon name="plus" color={"black"} size={6} />
                </div>
            </div>

            <DestinationNav />
        </div>
    );
}
