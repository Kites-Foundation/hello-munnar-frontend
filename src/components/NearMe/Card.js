import React from "react";
import mapIcon from "./icons/map.svg";
import trashIcon from "./icons/trash.svg";
import carIcon from "./icons/car.svg";
import mapPinIcon from "./icons/map-pin.svg";

export default function DustBinCard(props) {
    return (
        <div class="bg-white w-full flex items-center p-2  shadow border-2 border-gray-400">
            <div class="flex items-center space-x-4">
                <img
                    style={{
                        color: "#B4BFC9",
                        width: 50,
                    }}
                    src={trashIcon}></img>
            </div>
            <div class="flex-grow p-3">
                <div class="flex items-center space-x-2">
                    <div class="flex items-center">
                        <img
                            style={{
                                width: 15,
                            }}
                            src={mapIcon}></img>
                    </div>
                    <div class="font-semibold text-gray-700">Place name</div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex items-center mt-1">
                        <img
                            style={{
                                width: 15,
                            }}
                            src={carIcon}></img>
                    </div>
                    <div class="text-sm text-gray-500">10 min 2 km</div>
                </div>
            </div>
            <div class="p-2">
                <img
                    style={{
                        width: 30,
                    }}
                    src={mapPinIcon}></img>
            </div>
        </div>
    );
}
