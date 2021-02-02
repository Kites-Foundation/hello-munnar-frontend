import React from "react";
import locationIcon from "./map-pin.svg";
import munnarIcon from "../../../src/assets/images/munnar.png";

export default function Thingstodo() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                        <p className="font-sans font-bold text-2xl font-quicksand">
                            Things to do
                        </p>
                        <div className="bg-cover bg-center h-56 p-4 relative">
                            <img
                                className="min-w-full min-h-full"
                                src={munnarIcon}
                                alt=""></img>

                            <div className="mr-2 absolute right-5 bottom-5">
                                <button>
                                    <img src={locationIcon} alt=""></img>
                                </button>
                            </div>
                        </div>
                        <div className="mt-3 flex justify-between">
                            <div className="uppercase tracking-wide text-sm font-bold text-gray-700 ml-4 font-quicksand">
                                <p> Name</p>
                            </div>
                            <div>
                                <button className="mr-4 bg-gray-400 hover:bg-gray-700 h-5 w-6 text-sm">
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="ml-4 font-quicksand">
                            <p>xyz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
