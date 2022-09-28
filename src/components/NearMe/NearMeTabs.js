import React, { useState } from "react";
import Amenities from "./amenitiescard1";
import wastebinAminityData from "../../data/wastebinAminityData.json";
import toiletAminityData from "../../data/toiletAminityData.json";

const NearMeTab = ({ color }) => {
    const [openTab, setOpenTab] = useState(1);
    let aminitiesData = [...wastebinAminityData, ...toiletAminityData];

    return (
        <>
            <div className="w-full">
                <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist">
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            className={
                                "text-sm px-5 py-3 " +
                                (openTab === 1
                                    ? "text-gray-800 border-b-2 border-black font-bold"
                                    : "text-" +
                                      color +
                                      "-600 focus:outline-none text-gray-800  font-medium ")
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist">
                            Toilets
                        </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            className={
                                "text-sm font-medium  px-5 py-3  " +
                                (openTab === 2
                                    ? "text-gray-800 bg-white-600 font-bold border-b-2 border-black"
                                    : "text-" +
                                      color +
                                      "-600 bg-white focus:outline-none text-gray-800  font-medium ")
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist">
                            Waste bins
                        </a>
                    </li>
                </ul>

                <div className="">
                    {openTab === 1 && (
                        <div id="link2">
                            {toiletAminityData.map((aminity) => {
                                return (
                                    <div className="p-3">
                                        <Amenities
                                            category={aminity.aminityType}
                                            title={aminity.aminityName}
                                            place={aminity.aminityLocation}
                                            color={aminity.route}
                                            lat={aminity.latitude}
                                            long={aminity.longitude}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {openTab === 2 && (
                        <div id="link2">
                            {wastebinAminityData.map((aminity) => {
                                return (
                                    <div className="p-3">
                                        <Amenities
                                            category={aminity.aminityType}
                                            title={aminity.aminityName}
                                            place={aminity.aminityLocation}
                                            color={aminity.route}
                                            lat={aminity.latitude}
                                            long={aminity.longitude}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default NearMeTab;
