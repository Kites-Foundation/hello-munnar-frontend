import React from "react";
import mapIcon from "../../icons/map.svg";
import Icon from "../../../Common/Icon.js";
import carIcon from "../../icons/car.svg";
import mapPinIcon from "../../icons/map-pin.svg";

export default function NearMeCard(props) {
    return (
        <div class="bg-white w-full flex items-center p-2  shadow border-2 border-gray-400">
            <div class="flex items-center space-x-4">
                <Icon name={props.icon} />
            </div>
            <div class="flex-grow p-3">
                <div class="flex items-center space-x-2">
                    <div class="flex items-center">
                        <img
                            alt=""
                            style={{
                                width: 15,
                            }}
                            src={mapIcon}></img>
                    </div>
                    <div class="font-semibold text-lg text-gray-700">
                        {props.place}
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex items-center mt-1">
                        <img
                            alt=""
                            style={{
                                width: 15,
                            }}
                            src={carIcon}></img>
                    </div>
                    <div class="text-sm text-gray-500">
                        {props.minute} min {props.km} km
                    </div>
                </div>
            </div>
            <div class="p-2">
                <img
                    alt=""
                    style={{
                        width: 30,
                    }}
                    src={mapPinIcon}></img>
            </div>
        </div>
    );
}
