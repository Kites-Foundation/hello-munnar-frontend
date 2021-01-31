import React, { useState } from "react";
import searchIcon from "./search.svg";
import bellIcon from "./bell.svg";
import NearmeRestWrapper from "./Wrappers/NearmeRestWrapper";
import NearmeFoodWrapper from "./Wrappers/NearmeFoodWrapper";
import NearmeStayWrapper from "./Wrappers/NearmeStayWrapper";
import NearmeDustBinWrapper from "./Wrappers/NearmeDustBinWrapper";
import NearmeInfoWrapper from "./Wrappers/NearmeInfoWrapper";

export default function NearMe() {
    const [nearBy, setNearBy] = useState("Things to do");
    return (
        <div className="p-4 font-quicksand font-bold font-weight=600 text-3xl  ">
            <div className="flex justify-between mt-6">
                <p> Near Me </p>
                <div className="flex space-x-4">
                    <div class="font-thin text-gray-100 ">
                        <button>
                            <img
                                alt="search icon"
                                style={{
                                    width: 30,
                                }}
                                src={searchIcon}></img>
                        </button>
                    </div>
                    <div class="font-thin text-gray-100">
                        <button>
                            <img
                                alt=""
                                style={{
                                    width: 30,
                                }}
                                src={bellIcon}></img>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-5 flex flex-wrap ">
                <div class="flex  justify-center mt-4">
                    <button
                        onClick={() => setNearBy("Things to do")}
                        class=" border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-4 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Things to do
                    </button>
                    <button
                        onClick={() => setNearBy("Food & Drink")}
                        class="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Food & Drink
                    </button>
                    <button
                        onClick={() => setNearBy("Stay")}
                        class="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Stay
                    </button>
                </div>
                <div class="mt-3 flex justify-center">
                    <button
                        onClick={() => setNearBy("Information Desk")}
                        class="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Information Desk
                    </button>
                    <button
                        onClick={() => setNearBy("Guide")}
                        class="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Book Guide
                    </button>
                </div>

                <div class="mt-3 flex justify-center">
                    <button
                        onClick={() => setNearBy("Wastebins")}
                        class="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Wastebins
                    </button>
                    <button
                        onClick={() => setNearBy("Restrooms")}
                        class="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Restrooms
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col">
                {nearBy === "Restrooms" ? (
                    <NearmeRestWrapper />
                ) : nearBy === "Food & Drink" ? (
                    <NearmeFoodWrapper />
                ) : nearBy === "Stay" ? (
                    <NearmeStayWrapper />
                ) : nearBy === "Wastebins" ? (
                    <NearmeDustBinWrapper />
                ) : nearBy === "Information Desk" ? (
                    <NearmeInfoWrapper />
                ) : (
                    <NearmeStayWrapper />
                )}
            </div>
        </div>
    );
}
