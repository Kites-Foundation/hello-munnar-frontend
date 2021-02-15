import React, { useState } from "react";
import Amenities from "./amenitiescard1";
import ThingsTodo from "./thingstodo";

const NearMeTab = ({ color }) => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <>
            <div className="flex flex-wrap">
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
                                Things to do
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
                                Amenities
                            </a>
                        </li>
                    </ul>
                    <div className="container mx-auto max-w-sm flex flex-col space-y-4 justify-center items-center">
                        <div
                            className={openTab === 1 ? "block" : "hidden"}
                            id="link1">
                            <div>
                                <ThingsTodo name="Trekking Meeshapulimala" />
                                <ThingsTodo name="Destination Name" />
                            </div>
                        </div>
                        <div
                            className={openTab === 2 ? "block" : "hidden"}
                            id="link2">
                            <div className=" flex flex-wrap ">
                                <div className="flex mx-auto my-3 w-full justify-center">
                                    <button className=" border-2 border-gray-600 bg-white-600 rounded-lg my-auto text-center text-xs font-medium text-black-500 px-4 py-1 hover:bg-gray-200 hover:text-black mr-2">
                                        Hospitals
                                    </button>
                                    <button className="border-2 border-gray-600 bg-white-600 rounded-lg my-auto text-center text-xs font-medium text-black-500 px-2 py-1  hover:bg-gray-200 hover:text-black mr-2">
                                        Food & Drinks
                                    </button>
                                    <button className="border-2 border-gray-600 bg-white-600 rounded-lg my-auto text-center text-xs font-medium text-black-500 px-2 py-1 hover:bg-gray-200 hover:text-black mr-2">
                                        Waste bins
                                    </button>
                                </div>
                                <div className="container my-5 mx-auto max-w-sm flex flex-col space-y-4 justify-center items-center">
                                    <Amenities
                                        category="Hospitals"
                                        title="Tata Global Hospital"
                                        place="Meeshapulimala"
                                        color="red"
                                        time="24 hours"
                                        private="Private"
                                        distance="1 KM"
                                    />
                                    <Amenities
                                        category="Food_Drink"
                                        title="Village restaurant"
                                        place="Bodi hills"
                                        color="indigo"
                                        time="8AM-10PM"
                                        private="Private"
                                        distance="1.2 KM"
                                    />
                                    <Amenities
                                        category="Wastebin"
                                        title="Wastebin"
                                        place="Sun moon valley"
                                        color="green"
                                        time="24 hours"
                                        private="Private"
                                        distance="1.2 KM"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NearMeTab;
