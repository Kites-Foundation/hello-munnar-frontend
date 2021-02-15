import React, { useState } from "react";
import NearmeRestWrapper from "./Wrappers/NearmeRestWrapper";
import NearmeFoodWrapper from "./Wrappers/NearmeFoodWrapper";
import NearmeStayWrapper from "./Wrappers/NearmeStayWrapper";
import NearmeDustBinWrapper from "./Wrappers/NearmeDustBinWrapper";
import NearmeInfoWrapper from "./Wrappers/NearmeInfoWrapper";
import Callbookguide from "./callbookguide";
import Thingstodo from "./thingstodo";

export default function NearMe() {
    const [nearBy, setNearBy] = useState("Things to do");
    return (
        <div className="p-4 font-quicksand font-bold font-weight=600 text-3xl  ">
            <div className="flex justify-between mt-6">
                <p> Near Me </p>
                <div className="flex space-x-4">
                    <div className="font-thin text-gray-100 "></div>
                    <div className="font-thin text-gray-100"></div>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap ">
                <div className="flex  justify-center mt-4">
                    <button
                        onClick={() => setNearBy("Things to do")}
                        className=" border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-4 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Things to do
                    </button>
                    <button
                        onClick={() => setNearBy("Food & Drink")}
                        className="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Food & Drink
                    </button>
                    <button
                        onClick={() => setNearBy("Stay")}
                        className="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Stay
                    </button>
                </div>
                <div className="mt-3 flex justify-center">
                    <button
                        onClick={() => setNearBy("Information Desk")}
                        className="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Information Desk
                    </button>
                    <button
                        onClick={() => setNearBy("Guide")}
                        className="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Book Guide
                    </button>
                </div>

                <div className="mt-3 flex justify-center">
                    <button
                        onClick={() => setNearBy("Wastebins")}
                        className="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
                        Wastebins
                    </button>
                    <button
                        onClick={() => setNearBy("Restrooms")}
                        className="border-2 border-green-500 rounded-full my-auto text-center text-sm font-bold text-green-500 px-2 py-1 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-2">
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
                ) : nearBy === "Guide" ? (
                    <Callbookguide />
                ) : (
                    <Thingstodo />
                )}
            </div>
        </div>
    );
}
