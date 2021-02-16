import React, { useState } from "react";
import FavouriteActivities from "./FavouriteActivities";
import FavouriteDestinations from "./FavouriteDestinations";

export default function Favourite() {
    const [favourite, setFavourite] = useState("Destinations");
    return (
        <div className="bg-gray-50">
            <p className="text-2xl font-semibold ml-4 mt-8">Your favourites</p>
            <nav className="px-8 pt-3">
                <div className="flex justify-center space-x-10 mt-2">
                    <button
                        className={`border-b-2 border-transparent text-xl py-3 focus:outline-none ${
                            favourite !== "Activities" ? "border-black" : ""
                        }`}
                        onClick={() => setFavourite("Destinations")}>
                        Destinations
                    </button>
                    <button
                        className={`border-b-2 border-transparent text-xl py-3 focus:outline-none ${
                            favourite === "Activities" ? "border-black" : ""
                        }`}
                        onClick={() => setFavourite("Activities")}>
                        Activities
                    </button>
                </div>
            </nav>
            <div>
                {favourite === "Activities" ? (
                    <FavouriteActivities />
                ) : (
                    <FavouriteDestinations />
                )}
            </div>
        </div>
    );
}
