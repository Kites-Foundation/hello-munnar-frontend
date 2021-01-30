import React from "react";
import mapIcon from "./map.svg";
import trashIcon from "./trash.svg";
import carIcon from "./car.svg";
import mapPinIcon from "./map-pin.svg";

export default function Card() {
    return (
        <div class="bg-white w-full flex items-center p-2  shadow border">
            <div class="flex items-center space-x-4">
                <img
                    style={{
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
                <div class="font-semibold text-gray-700">
                    Place name
                </div>
                </div>
                <div class="flex items-center space-x-2">
              <div class="flex items-center">
              <img
                        style={{
                            width: 15,
                        }}
                        src={carIcon}></img>
              </div>
                <div class="text-sm text-gray-500">
                10 min 2km
                </div>
                </div>
            </div>
            <div class="p-2">
                <img
                style={{
                  width: 20,
              }}
                src={mapPinIcon}></img>
            </div>
        </div>
    );
}
