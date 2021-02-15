import React from "react";
import location from "../NearMe/icons/map-pin.svg";
import nearmeicon from "./Vector (2).svg";

export default function TabsRender() {
    return (
        <div className="p-4 font-poppins font-weight=600">
            <div className="flex justify-between mt-6 font-semibold text-3xl">
                <div className="flex mt-6">
                    <img src={nearmeicon} alt=""></img>
                    <div className="pl-2 ml-2 text-2xl ">Near me </div>
                </div>
            </div>

            <div>
                <div className="flex mt-6 w-4 ">
                    <img src={location} alt=""></img>

                    <div className="pl-2 text-1xl font-medium">
                        Meeshapullimala
                    </div>
                </div>
            </div>
        </div>
    );
}
