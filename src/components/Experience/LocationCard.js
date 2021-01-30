import React from "react";
import dummy from "../../assets/images/dummy.jpg";
import Icon from "../Common/Icon";

export default function LocationCard() {
    return (
        <div className="shadow-lg mb-10">
            <div className="relative">
                <img src={dummy} alt="" className="h-54 w-full object-cover" />
                <div className="absolute top-3 right-3"></div>
                <div className="absolute bottom-0 left-0 p-3 w-full flex justify-between items-center">
                    <h3 className="text-xl text-gray-800 font-semibold">
                        Trekking
                    </h3>
                    <div className="flex items-center box-border bg-indigo-600 bg-opacity-25 justify-center w-10 h-10 rounded-full border-indigo-600 border-2">
                        <Icon name="location" size={5} color="indigo-600" />
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="flex w-full justify-between pb-3">
                    <div className="flex flex-col">
                        <div className="flex item-center mb-2">
                            <Icon name="clock" size={5} color="gray-600" />
                            <span className="ml-2 font-semibold">Starting</span>
                        </div>
                        <div className="flex item-center">
                            <Icon name="run" size={5} />
                            <span className="ml-2 font-semibold">2 hrs</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Icon name="plus" size={8} />
                    </div>
                </div>
                <p className="text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    );
}
