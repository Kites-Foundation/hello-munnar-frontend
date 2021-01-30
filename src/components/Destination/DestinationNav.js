import React, { useState } from "react";
import Details from "./Details";
import Activity from "./Activity";
import Reviews from "./Reviews";
import Hotels from "./Hotels";

export default function DestinationNav() {
    const defaultTab = "details";
    const [activeTab, setActiveTab] = useState(defaultTab);
    return (
        <div>
            <div className="flex justify-around ">
                <button
                    className="font-semibold hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 focus:outline-none"
                    onClick={() => setActiveTab("details")}>
                    Details
                </button>
                <button
                    className="font-semibold hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 focus:outline-none"
                    onClick={() => setActiveTab("reviews")}>
                    Reviews
                </button>
                <button
                    className="font-semibold hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 focus:outline-none "
                    onClick={() => setActiveTab("hotels")}>
                    Hotel
                </button>
                <button
                    className="font-semibold hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 focus:outline-none"
                    onClick={() => setActiveTab("activities")}>
                    Activitites
                </button>
            </div>
            {activeTab === "details" && <Details />}
            {activeTab === "reviews" && <Reviews />}
            {activeTab === "hotels" && <Hotels />}
            {activeTab === "activities" && <Activity />}
        </div>
    );
}
